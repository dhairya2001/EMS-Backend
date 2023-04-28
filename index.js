const express=require('express');
const emsRoute = require('./routes/emsRoute');
const userRoute = require('./routes/userRoute');
const app=express();
const mongoose = require('mongoose');
// const cors=require("cors");
// const dotenv=require("dotenv");
// dotenv.config();

app.use(express.json()); // parses req from string to json
// app.use((req,res,next)=>{
//     console.log("HTTP Method - " + req.method + ", URL - " + req.url);
//     next();
// })

// app.use(cors()); // acts as middleware
app.use('/user',userRoute);
app.use('/ems',emsRoute);
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

// token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpZCI6IjY0NGEyZTAwOWM5OWEzYzE3MjE3OGQ1YiIsImlhdCI6MTY4MjU5MDMyMX0.El1NxSDga53P4H_YpUuapNYDbOwv9F069lLqvUEP2Lg