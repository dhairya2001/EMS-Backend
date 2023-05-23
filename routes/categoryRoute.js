const express=require('express');
const categoryRoute=express.Router();
const {createCategory,deleteCategory,getCategory} = require("../controller/categoryController");
const auth = require("../middlewares/auth");

// auth will be used to validate tokens before running functions
categoryRoute.get('/',auth ,getCategory);

categoryRoute.post('/',auth ,createCategory);

categoryRoute.delete('/:id',auth,deleteCategory); 

module.exports=categoryRoute;