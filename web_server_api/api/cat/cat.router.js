import {
    createCat, getTime, putFeed, putMovement, putTemperature, feed, checkFeed, getPosition, updatePosition, getFeedLog,getTemperatureLog,getMovementLog} from "./cat.controller.js"
import Router from 'express'

var router = Router();
router.post('/', createCat);
router.post('/time', getTime);
router.post('/feed/insert',putFeed);
router.post('/feed/log',getFeedLog);
router.post('/tofeed/get', checkFeed)
router.post('/temperature',putTemperature);
router.post('/temperature/log',getTemperatureLog);
router.post('/tofeed',feed);
router.post('/movement',putMovement);
router.post('/movement/log', getMovementLog);
router.post('/position/update', updatePosition);
router.post('/position/log', getPosition);

export default router;