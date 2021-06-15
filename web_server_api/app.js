import dotenv from 'dotenv';
import router from './api/cat/cat.router.js'
import express from 'express'


dotenv.config();
var app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
//app.use("api/cats", router);
app.use('/api/cats',router);




app.listen(process.env.APP_PORT, () => console.log("Server is running"));