const express=require('express');
const emsRoute = require('./routes/emsRoute');
const userRoute = require('./routes/userRoute');
const app=express();
const mongoose = require('mongoose');
const cors=require("cors");
const categoryRoute = require('./routes/categoryRoute');

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
mongoose.connect("mongodb+srv://dhairya:dhairya2001@cluster1.i4xkwhs.mongodb.net/tasks_db?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server started on port " +5000);
    });
})
.catch((error)=>{
    console.log(error)
})

