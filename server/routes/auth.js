const express = require('express');
const route = express.Router();
const {check } =require('express-validator');
const {registerUser, loginUser} = require('../controllers/authController');

//signup the user
route.post('/signup',
[check('email',  "Please enter a valid email").isEmail(),
 check('password', "Password should not be empty").exists()
],registerUser);

//signin the user
route.post('/signin' ,[check('email',  "Please enter a valid email").isEmail(),
check('password', "Password should not be empty").exists()
]
,loginUser); 

module.exports =route;