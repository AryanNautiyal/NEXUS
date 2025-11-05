


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


authRouter.post("/logout", async (req,res)=>{

    try{

        // So whenever our user logs out we don't want user to send any request except the login or register request

        // So what we can do is just delete the token

        // So we cannot delete the token from client system so what we can alternatively do is

        // We can just give client another random token with anything random due to this the token will be invalid

        // So the client cannot send request due to invalid token and giving a new token to the client removes the old token by itself


        // res.cookie("token","jgfkjgnbjfonsdfmgnfn");


        // Given anything random 

        // What other thing we can do is we can just expire the cookie 


        res.cookie("token",null, {expires : new Date(Date.now())});

        // So in value of token we sended null and it's expiry date as the new Date object in which the date and time is current one

        // So it will be expired

        // Another advantage I can see here is that we can now differentiate as before it was giving output "jwt malformed"

        // So we might not be able to differentiate if someone manipulated the data or it was server due to logout 

        // So in this the output is "Token doesn't exist"


        // So we can easily see a loophole that if the user copies the cookies and then logs out then after logging out also

        // The user can still access the information due to copied cookies

        // Hence it really isn't a logout feature

        // We cannot expire the jwt token as it's stateless so we can just remove it 

        // So we need a way to expire the old token so that the user is really logged out



        // So one way we can do is make a list of blocked tokens in the DB which is costly and not worth it

        // We can in DB make array, set or something of tokens to keep track of the expired token during logout 

        // So that user cannot use that but it's a headache to make it

        // As once the token is expired (say we set limit 3 days) we will be needed to remove it from array or set

        // And millions of request can come simultaneously for logout so will be needed to create a separate code for it 

        // So a headache and as there will be 2 replicas of the server so will be needed to make something to make data synchronized

        // As DB access is available to all the servers but server's in-memory (RAM) is not accessible to other servers

        // As will be needed to inform the other 2 DB also about the block list 

        // So here our new DB comes " Redis "





        res.send("Logged Out Successfully");


    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


module.exports = authRouter;