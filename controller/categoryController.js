const categoryModel=require("../model/categoryModel");

const createCategory = async(req,res) =>{
    const{type,limit}=req.body;
    const filter={type:type,userId:req.userId};
    const update={limit:limit};
    
    if(type!==""){
        try{
            await categoryModel.findOneAndUpdate(filter, update,{new:true,upsert:true});
            res.status(200).json(update);
            
        }
        catch(error){
            console.log(error);
            res.status(500).json({message:"Something Went Wrong"})
        }
    }
    else{
        res.status(500).json({message:"Something Went Wrong"})
    }
}


const deleteCategory = async(req,res) =>{
    const taskid=req.params.id;
    
    try {
        const delCategory = await categoryModel.findByIdAndDelete(taskid);
        res.status(202).json(delCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }
}

const getCategory = async(req,res) =>{
    try{
        const result=await categoryModel.find({userId:req.userId});
        res.status(200).json(result);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Something Went Wrong"})
    }
}


module.exports = {
    createCategory,
    deleteCategory,
    getCategory
}