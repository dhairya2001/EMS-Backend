const jwt=require("jsonwebtoken");
// const SECERET_KEY="EMSAPI"
const auth = (req,res,next) =>{
    try {
        let token=req.headers.authorization;
        if(token){
            token=token.split(" ")[1];
            let user=jwt.verify(token,process.env.SECERET_KEY);
            req.userId=user.id;
        }
        else{
            throw new Error("Authorization token not provided");
        }
    } catch(error) {
        console.log(error);
        res.status(401).json({message:"Unauthorized User!"})
    } 
};

module.exports = auth;
