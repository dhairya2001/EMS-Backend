const emsModel=require("../model/emsModel");

const createTask = async(req,res) =>{
    const{category,date,money}=req.body;

    const newTask=new emsModel({
        category:category,
        date:date,
        money:money,
        userId:req.userId
    });

    try{
        await newTask.save();
        res.status(201).json(newTask);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }
}

const updateTask = async(req,res) =>{
    const taskid=req.params.id;
    const{category,date,money}=req.body;

    const newTask={
        category:category,
        date:date,
        money:money,
        userId:req.userId
    }
    try {
        await emsModel.findByIdAndUpdate(taskid,newTask,{new:true});
        res.status(200).json(newTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }
}

const deleteTask = async(req,res) =>{
    const taskid=req.params.id;
    
    try {
        const delTask = await emsModel.findByIdAndDelete(taskid);
        res.status(202).json(delTask);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }
}

const getTask = async(req,res) =>{
    console.log("incoming get request")
    const{category,startDate,endDate}=req.body;
    try{
        const tasks=await emsModel.find({userId:req.userId});
        console.log(tasks);
        res.status(200).json(tasks);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }
}


module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getTask
}