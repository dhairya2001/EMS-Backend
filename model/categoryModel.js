const mongoose=require("mongoose");

const categorySchema = mongoose.Schema({
        type:{
            type:String,
            required:true
        },
        limit:{
            type:Number,
        },
        userId:{
            type : mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
    
},{timeStamps:true});

module.exports = mongoose.model("Category",categorySchema);