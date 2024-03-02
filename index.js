const express=require('express');
const dotenv=require('dotenv');
const emsRoute = require('./routes/emsRoute');
const userRoute = require('./routes/userRoute');
const app=express();
const mongoose = require('mongoose');
const cors=require("cors");
const categoryRoute = require('./routes/categoryRoute');

dotenv.config({ path: '.env' });
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


app.use(cors()); 
app.use('/user',userRoute);
app.use('/ems',emsRoute);
app.use('/category',categoryRoute)
app.get('/',(req,res)=>{
    res.status(200).send("Tasks API");
});
//Connection to database
// const PORT=process.env.PORT || 5000;
// mongoose.connect(process.env.MONGO_URL)
console.log(process.env.USERNAME);
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASS}@${process.env.DB}.wwjij98.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server started on port " +5000);
    });
})
.catch((error)=>{
    console.log(error)
})

