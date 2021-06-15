const { response, request } = require("express");
const express = require("express");

const router = express.Router();

router.get('/', (request, response) => {
    response.render('index');
});

router.get('/register', (request, response) => {
    response.render('register');
});

router.get('/login', (request, response) => {
    response.render('login');
});

module.exports = router;