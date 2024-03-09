const express = require('express');
const auth=require('../middlewares/auth.js');
const { signUp, logIn } = require('../controller/userController.js');
const userRoute=express.Router();

userRoute.post('/signUp',signUp);
userRoute.post('/logIn',logIn);
userRoute.use(auth); // Use the auth middleware for all routes defined in userRoute
module.exports=userRoute;
