API<br/>


POST:<br/>
-get logs of time when cat was fed<br/>
    path:/api/cats/feed/log<br/>
    body: {"feederid":"actualfeederid"}<br/>
    return: Descending time logs of feeds in JSON for feederid<br/>
            example: <br/>
            {
                "data": [
                    {
                        "id": 13,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T12:02:33.000Z"
                    },
                    {
                        "id": 12,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T11:58:53.000Z"
                    },
                    {
                        "id": 11,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T11:57:44.000Z"
                    },
                    {
                        "id": 10,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T11:50:10.000Z"
                    },
                    {
                        "id": 9,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T09:28:28.000Z"
                    },
                    {
                        "id": 8,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T08:43:16.000Z"
                    },
                    {
                        "id": 7,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T08:41:50.000Z"
                    },
                    {
                        "id": 6,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T08:36:22.000Z"
                    },
                    {
                        "id": 5,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T08:24:51.000Z"
                    },
                    {
                        "id": 4,
                        "feederId": "firstcat0",
                        "time": "2021-02-08T00:46:33.000Z"
                    },
                    {
                        "id": 2,
                        "feederId": "firstcat0",
                        "time": "2021-02-08T00:46:10.000Z"
                    },
                    {
                        "id": 1,
                        "feederId": "firstcat0",
                        "time": "2021-02-08T00:46:02.000Z"
                    }
                ]
            }
<br/>
-get logs of movement<br/>
    path:/api/cats/movement/log<br/>
    body: {"feederid":"actualfeederid"}<br/>
    return: Descending time logs of registered movements in front of feeder in JSON for feederid, example same as feed log

-get logs of temperature<br/>
    path:/api/cats/temperature/log<br/>
    body: {"feederid":"actualfeederid"}<br/>
    return: Descending time logs of registered temperature and coresponding values of temperature at feeder in JSON for feederid<br/>
            example:<br/>
            {
                "data": [
                    {
                        "id": 13,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T09:42:09.000Z",
                        "temperature": 21.1
                    },
                    {
                        "id": 12,
                        "feederId": "firstcat0",
                        "time": "2021-02-10T09:41:52.000Z",
                        "temperature": 21.1
                    },
                    {
                        "id": 1,
                        "feederId": "firstcat0",
                        "time": "2021-02-08T01:35:11.000Z",
                        "temperature": 21.6
                    }
                ]
            }
<br/>
-get number of feeds since last refill <br/>
    path:/api/cats/position/log<br/>
    body: {"feederid":"actualfeederid"}<br/>
    return: returns JSON, example: {"data":1} values 1-3<br/>

-feed cat<br/>
    path:/api/cats/tofeed<br/>
    body:{"feederid":"actualfeederid","feed":1}<br/>
    return: result of affected rows can be ignored<br/>

-reset feeder<br/>
    path:/api/cats/position/update<br/>
    body:{"feederid":"actualfeederid","feednum":1}<br/>
    return: can be ignored<br/>




    