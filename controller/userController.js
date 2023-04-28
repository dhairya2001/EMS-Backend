const userModel=require('../model/userModel')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const SECERET_KEY='EMSAPI';
// u can use await only in async functions
const signUp = async(req,res) =>{
    //Existing User Check
    //Hashed Password
    //User Creation
    //Token Generate

    const{email,password}=req.body;
    try{
        const existingUser = await userModel.findOne({email:email})
        if(existingUser){
            return res.status(400).json({message:"User Already Exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10); //function will run 10 times 

        const result=await userModel.create({
            email:email,
            password:hashedPassword
        });

        //payload is used to store info to validate user & sescret key is used to decrypt it
        const token = jwt.sign({email:result.email,password:result.password},SECERET_KEY);
        res.status(201).json({user:result,token:token});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
}

const logIn=async(req,res)=>{
    const{email,password}=req.body;
    try {
        const existingUser = await userModel.findOne({email:email})
        if(!existingUser){
            return res.status(404).json({message:"User Not Found"});
        }
        // user will enter original password but we stored encrypted password so we need to use bcrypt library
        const matchPassword=await bcrypt.compare(password,existingUser.password);
        //comaparing password to db password
        if(!matchPassword){
            return res.status(400).json({message:"Invalid Credential"});
        }
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},SECERET_KEY);
        res.status(201).json({user:existingUser,token:token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
}

module.exports={signUp,logIn};