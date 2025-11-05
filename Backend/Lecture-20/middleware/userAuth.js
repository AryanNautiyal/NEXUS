

const jwt = require('jsonwebtoken');

const User = require('../Models/users');





const userAuth = async (req,res,next)=>{


    try{
        const {token} = req.cookies;
    
        if(!token){
            throw new Error("Token doesn't exist");
        }

        const payload = jwt.verify(token,"Rohit@13412$");

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

        req.result = result;

        next();

    }
    catch(err){
        res.send("Error : "+err.message);
    }

}


module.exports = userAuth;