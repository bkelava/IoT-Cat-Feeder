import mysql from 'mysql'

var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: 'cat_station'
    })
export default connection;