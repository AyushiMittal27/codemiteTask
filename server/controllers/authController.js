const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const {validationResult} = require("express-validator");

//register the user
exports.registerUser= catchAsyncError(async(req, res,next)=>{
  const errors = validationResult(req.body);
  if(!errors.isEmpty()){
    return next(new ErrorHandler("Invalid inputs", 400));
  }
  const {name , email  , password}= req.body;
  const existingUser = await User.findOne({email:email});
  if(existingUser){
    return next(new ErrorHandler("User Already exists", 400)) 
  }
  const user =new User(req.body); 
  await user.save();
  const token = await jwt.sign({userId: user._id}, process.env.JWTSECRET);
  return res.json({token});
})

//signup the user
exports.loginUser= catchAsyncError(async(req, res,next)=>{
  const errors = validationResult(req.body);
  if(!errors.isEmpty()){
    return next(new ErrorHandler("Invalid inputs", 400));
  }
  const {name , email  , password}= req.body;
  const existingUser = await User.findOne({email:email});
  if(!existingUser){
    return next(new ErrorHandler("User  dont exists", 404)) 
  }
  await existingUser.comparePassword(password);
  const token = await jwt.sign({userId: existingUser._id}, process.env.JWTSECRET);
  return res.json({token});
})