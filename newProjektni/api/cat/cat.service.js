import connection from "../../config/database.js";

var create =  (data,callBack)=>{
        console.log("Here i am")
        connection.query(
            'insert into catfeeder(feederID, catName,feed,feednum) values(?,?,0,0)',
            [
                data.feederid,
                data.catname
            ],
            (error, results, fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
var getRemainingTime = (data,callBack)=>{
    console.log(data)
    connection.query('SELECT TIMESTAMPDIFF(hour,(SELECT time from feederlog WHERE feederId= ? ORDER BY time DESC LIMIT 1) , ?) as datediff',
        [
            data.feederid,
            new Date().toISOString().slice(0, 19).replace('T', ' ')
            ],
    (error, results, fields) => {
        
        if(error){
            return callBack(error);
        }
        return callBack(null, results[0].datediff);
    }
    );
}
var insertFeed = (data, callBack) => {
    console.log(data)
    connection.query('insert into feederlog(feederID,time) values (?,?)',
        [
            data.feederid,
            new Date().toISOString().slice(0, 19).replace('T', ' ')
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            else{
                connection.query('UPDATE catfeeder set feednum = feednum + 1 where feederid = ?',
                    [
                        data.feederid
                    ],
                    (error, results, fields) => {
                        if (error) {
                            return callBack(error);
                        }
                        return callBack(null, results);
                    });

            }
        }
    );
}

var insertMovement = (data, callBack) => {
    connection.query('insert into catmovement(feederID,time) values (?,?)',
        [
            data.feederid,
            new Date().toISOString().slice(0, 19).replace('T', ' ')
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
}
var insertTemperature = (data, callBack) => {
    connection.query('insert into feedertemperature(feederID,time,temperature) values (?,?,?)',
        [
            data.feederid,
            new Date().toISOString().slice(0, 19).replace('T', ' '),
            data.temperature
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
}
var updateToFeed = (data, callBack) => {
    connection.query('UPDATE catfeeder SET feed = ? WHERE feederID = ?',
        [
            data.feed,
            data.feederid
            
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
}
var getToFeed = (data, callBack) => {
    connection.query('SELECT feed FROM catfeeder WHERE feederID = ?',
        [
            data.feederid

        ],
        (error, results, fields) => {
            console.log(results)
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0].feed);
        }
    );
}
var databasePosition = (data, callBack) => {
    connection.query('SELECT feednum FROM catfeeder WHERE feederID = ?',
        [
            data.feederid

        ],
        (error, results, fields) => {
            console.log(results)
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0].feednum);
        }
    );
}
var setPosition = (data, callBack) => {
    connection.query('UPDATE catfeeder SET feednum = ? WHERE feederID = ?',
        [
            data.position,
            data.feederid

        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
}
var databaseFeedLog = (data, callBack) => {
    connection.query('SELECT * FROM feederlog WHERE feederID = ? ORDER BY time DESC',
        [
            data.feederid
        ],
        (error, results, fields) => {
            
            if (error) {
                return callBack(error);
            }
            
            return callBack(null, results);
        }
    );
}
var databaseTemperatureLog = (data, callBack) => {
    connection.query('SELECT * FROM feedertemperature WHERE feederID = ? ORDER BY time DESC',
        [
            data.feederid
        ],
        (error, results, fields) => {
            console.log(results)
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
}
var databaseMovementLog = (data, callBack) => {
    connection.query('SELECT * FROM catmovement WHERE feederID = ? ORDER BY time DESC',
        [
            data.feederid
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
}


export {
    create, getRemainingTime, insertFeed, insertMovement, insertTemperature, updateToFeed, getToFeed, databasePosition, setPosition, databaseFeedLog,databaseTemperatureLog,databaseMovementLog };