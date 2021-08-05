const mongoose = require('mongoose');
const bcrypt= require('bcrypt');

const userSchema =  new mongoose.Schema({
  name: {
    type:String,
    required: true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

userSchema.pre('save', function(next){
    bcrypt.genSalt(10 , (err, salt)=>{
        if(err){
          return next(err);
        }
        bcrypt.hash(this.password, salt , (err, hash)=>{
          if(err){
            console.log(err);
            return next(err)
          }
          this.password= hash;
          next();
        })
    })
})

userSchema.methods.comparePassword = function(plainPassword){
        const user = this;
        return new Promise((resolve , reject)=>{
          bcrypt.compare(plainPassword , user.password,(err, isMatch)=>{
            if(err){
              reject(err);
            }
            if(!isMatch){
              reject(false);
            }
            resolve(true);
          })
         })
}

module.exports =mongoose.model('user', userSchema);