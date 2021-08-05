const jwt = require('jsonwebtoken');
const catchAsyncError = require('./catchAsyncError');
const ErrorHandler= require('../utils/errorHandler');

module.exports = catchAsyncError(async(req, res,next)=>{
  const {authorization} = req.headers;
  if(!authorization){
    return next(new ErrorHandler("Login First to Access this resource ", 401));
  }
  const token= authorization.split(" ")[1];
  const decoded= await jwt.verify(token , process.env.JWTSECRET)
  const {userId} = decoded;
  req.userId= userId;
  next();
})