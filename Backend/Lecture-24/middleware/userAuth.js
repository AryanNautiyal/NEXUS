

const jwt = require('jsonwebtoken');

const User = require('../Models/users');

const redisClient = require('../config/redis');




const userAuth = async (req,res,next)=>{


    try{
        const {token} = req.cookies;
    
        if(!token){
            throw new Error("Token doesn't exist");
        }

        const payload = jwt.verify(token,process.env.SECRET_KEY);

        const {_id} = payload;

        if(!_id)
        {
            throw new Error("Id is missing");
        }

        const result = await User.findById(payload._id);

        if(!result)
        {
            throw new Error("User doesn't exist");
        }


        // Checked if copied cookies are not used

        const IsBlocked = await redisClient.exists(`token:${token}`);

        if(IsBlocked)
        {
            throw new Error("Invalid Token");
        }

        req.result = result;

        next();

    }
    catch(err){
        res.send("Error : "+err.message);
    }

}


module.exports = userAuth;