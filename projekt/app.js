const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
    path: './.env'
});

let app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory)); 
app.use(express.static(path.join(__dirname, "./server_scripts")));

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.set("view engine", "hbs");

//Define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

let port = 3001;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server started on Port " + port);
});