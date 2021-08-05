const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../model/User");

exports.userInfo = catchAsyncError(async(req, res, next)=>{
  
   const user = await User.findById(req.userId);
   if(!user){
     return next(new ErrorHandler("User Not FOund", 404));
   }
   return res.json({user});
})