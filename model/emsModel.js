const mongoose=require("mongoose");

const emsSchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    money:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timeStamps:true});

module.exports = mongoose.model("EMS",emsSchema);