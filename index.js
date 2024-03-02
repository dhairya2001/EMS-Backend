const express=require('express');
const dotenv=require('dotenv');
const emsRoute = require('./routes/emsRoute');
const userRoute = require('./routes/userRoute');
const mongoose = require('mongoose');
const cors=require("cors");
const categoryRoute = require('./routes/categoryRoute');

dotenv.config({ path: '.env' });
const app=express();
app.use(cors()); 

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); 
app.use('/user',userRoute);
app.use('/ems',emsRoute);
app.use('/category',categoryRoute)
app.get('/',(req,res)=>{
    res.status(200).send("EMS API");
});
//Connection to database
// const PORT=process.env.PORT || 5000;
// mongoose.connect(process.env.MONGO_URL)
console.log(process.env.USERNAME);
mongoose.connect(`${process.env.MONGO_URL}`)
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server started on port " +5000);
    });
})
.catch((error)=>{
    console.log(error)
})

