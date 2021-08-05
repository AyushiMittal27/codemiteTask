const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const authMiddleware = require('./middleware/authMiddleware');
const cors = require("cors");
const ErrorHandler = require('./utils/errorHandler');
const errorMiddleware = require('./middleware/errorMiddleware');
require("dotenv").config();


const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next)=>{
  console.log("Req recieved"+ req.body.name + req.body.email + req.body.password);
  next();
})
app.use('/api/auth', authRoutes);
app.use('/api/user',authMiddleware,userRoutes);


//handle unhandled routes
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`${req.originalUrl} route NOT FOUND`, 404));
});

app.use(errorMiddleware);


mongoose.connect(process.env.MONGOURL,
 {useNewUrlParser:true, useUnifiedTopology:true})
 .then(()=>{
   console.log("Mongo Db has started");
 })

app.listen(process.env.PORT, ()=>{
  console.log(`The sever has started on PORT ${process.env.PORT}`);
})

