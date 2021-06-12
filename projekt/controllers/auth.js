const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var path = require('path');
const { request, response } = require("express");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
})

exports.login = async (request, response) => {
    try {
        const {name, password} = request.body;

        if (!name || !password) {
            return response.status(400).render('login', {
                messageError: "Please provide a valid information"
            });
        }

        db.query('SELECT * FROM accounts WHERE username = ?', [name], async (error, results) => {
            console.log(results);
            if (error){
                console.log(error);
            }
            
            if(!results || !(await bcrypt.compare(password, results[0].password))) {
                response.status(401).render('login', {
                    messageError: 'Username or Password is incorrect'
                });
            }
            else {
                const id = results[0].id;
                const feederid=results[0].feederID;
                response.cookie('userid', id);
                response.cookie('feederid',feederid);
                response.status(200).render("catstation.hbs")
            }
        });
    } catch(error) {
        console.log(error);
    }
}

exports.logout = (request, response) => {
    response.clearCookie('userid');
    response.clearCookie('feederid');
    response.status(200).render('index');
}

exports.register = (request, response) => {
    console.log(request.body);

    const {name, password, feederid} =  request.body;
    if (!name || !password || !feederid) {
        return response.render('register', {
            messageError: 'Provide a valid informations!'
        });
    }
    else {
        db.query("SELECT username FROM accounts WHERE username = ?", [name], async (error, results) => {
        if (error) {
            console.log(error);
        }

        if(results.length > 0) {
            return response.render('register', {
                messageError: 'Username already in use!'
            });
        }
        else {
            let hashedPassword  = await bcrypt.hash(password, 10);
            console.log(hashedPassword);

            db.query('INSERT INTO accounts SET ?', {username: name, password: hashedPassword, feederID: feederid}, (error, results) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(results);
                    return response.render('register', {
                        message: 'User registred!'
                    })
                }
            });
        }});
    }
    //response.send("Form submitted");
}