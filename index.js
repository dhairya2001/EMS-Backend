const express=require('express');
const emsRoute = require('./routes/emsRoute');
const userRoute = require('./routes/userRoute');
const mongoose = require('mongoose');
const cors=require("cors");
const categoryRoute = require('./routes/categoryRoute');

const app=express();

app.use(cors({origin:"http://localhost:3000",credentials:true})); 

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
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log("Server started on port " + (process.env.PORT || 5000));
    });
})
.catch((error)=>{
    console.log(error)
})
export default app;
