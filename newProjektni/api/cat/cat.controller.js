import {
    create, getRemainingTime, insertFeed, insertMovement, insertTemperature, updateToFeed, getToFeed, databasePosition, setPosition, databaseFeedLog,databaseTemperatureLog,databaseMovementLog} from "./cat.service.js"



var createCat =  (req, res) =>{
    const body = req.body;
    create(body,(err, results)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                message: "Database connection error"
            });
        }
        return res.status(200).json({
            data: results
        });
    })
}

var getTime = (req,res)=>{
        
        getRemainingTime(req.body,(err,results)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(results);
        return res.json({
            data: results
        });
    });
}
var putFeed = (req, res) => {
    
    insertFeed(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        
        return res.json({
            data: results
        });
    });
}
var putMovement = (req, res) => {
    insertMovement(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            data: results
        });
    });
}
var putTemperature = (req, res) => {
    insertTemperature(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            data: results
        });
    });
}
var feed = (req, res) => {
    updateToFeed(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            data: results
        });
    });
}
var checkFeed = (req, res) => {
    getToFeed(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            data: results
        });
    });
}
var updatePosition = (req, res) => {
    setPosition(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            data: results
        });
    });
}
var getPosition = (req, res) => {
    databasePosition(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            data: results
        });
    });
}
var getFeedLog = (req, res) => {
    databaseFeedLog(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            data: results
        });
    });
}
var getTemperatureLog = (req, res) => {
    databaseTemperatureLog(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            data: results
        });
    });
}
var getMovementLog = (req, res) => {
    databaseMovementLog(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(results)
        return res.json({
            data: results
        });
    });
} 

export {
    createCat, getTime, putFeed, putMovement, putTemperature, feed, checkFeed, updatePosition, getPosition, getFeedLog,getTemperatureLog,getMovementLog};
