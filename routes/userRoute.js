const express = require('express');
const { signUp, logIn } = require('../controller/userController.js');
const userRoute=express.Router();

userRoute.post('/signUp',signUp);
userRoute.post('/logIn',logIn);
module.exports=userRoute;
