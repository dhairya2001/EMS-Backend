const express=require('express');
const emsRoute=express.Router();
const {createTask,updateTask,deleteTask,getTask} = require("../controller/emsController");
const auth = require("../middlewares/auth");

// auth will be used to validate tokens before running functions
emsRoute.get('/',auth ,getTask);

emsRoute.post('/',auth ,createTask);

emsRoute.put('/:id',auth,updateTask);

emsRoute.delete('/:id',auth,deleteTask); 

module.exports=emsRoute;