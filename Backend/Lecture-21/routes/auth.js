


const express = require('express');

const authRouter = express.Router();

const bcrypt = require('bcrypt');

const User = require('../Models/users');

const validUser = require('../utils/validateUser')

const validator = require('validator');


authRouter.post("/register", async (req,res)=>{

    try{



        validUser(req.body);


        const salt = await bcrypt.genSalt(10);

        const hashpass = await bcrypt.hash(req.body.password, salt);

        req.body.password = hashpass;

        await User.create(req.body);

        res.status(201).send("User Registered Successfully");

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


authRouter.post("/login", async (req,res)=>{

    try{

        if(!(validator.isEmail(req.body.emailId)) || !(validator.isStrongPassword(req.body.password)))
        {
            throw new Error("Invalid Email or Password");
        }


        const data = await User.findOne({emailId:req.body.emailId});


        if(!(data.emailId === req.body.emailId))
        {
            throw new Error("Incorrect Email or Password");
        }
        
        const IsAllowed = data.verifyPassword(req.body.password);

        if(!IsAllowed)
        {
            throw new Error("Incorrect Email or Password");
        }
   
        const token = data.getJWT();


        res.cookie("token",token);


        res.send("Login Successful");

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }

})


module.exports = authRouter;