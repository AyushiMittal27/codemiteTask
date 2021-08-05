const express = require('express');
const { userInfo } = require('../controllers/userController');
const route = express.Router();


//show logged in user info
route.get('/info',userInfo);

module.exports = route;
