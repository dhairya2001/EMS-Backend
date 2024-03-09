const jwt=require("jsonwebtoken");

const auth = (req,res,next) =>{
    try {
        let token=req.headers.authorization;
        if(token){
            console.log(token);
            token=token.split(" ")[1];
            let user=jwt.verify(token,process.env.SECERET_KEY);
            console.log(user);
            req.userId=user.id;
        }
        else{
            throw new Error("Authorization token not provided");
        }
    } catch(error) {
        console.log("Token validation failed");
        res.status(401).json({message:"Unauthorized User!"})
    } 
};

module.exports = auth;
