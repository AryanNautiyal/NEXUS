


const express = require('express');

const authRouter = express.Router();

const bcrypt = require('bcrypt');

const User = require('../Models/users');

const validUser = require('../utils/validateUser')

const validator = require('validator');

const redisClient = require('../config/redis');

const jwt = require('jsonwebtoken');

const userAuth = require('../middleware/userAuth');


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


authRouter.post("/logout", userAuth, async (req,res)=>{

    try{


        // So anyone can do anything to make our API break so they might send fake token so cannot save that in DB

        // Hence will verify it by using our middleware userAuth






        // Now using Redis will just keep track of cookies that are not expired after logging out 

        // await redisClient.set("key", "value");

        // So why Redis is asking values in key-value pair because it's easy to find items using the key

        // So Redis can use hashing or hashmap to get data in O(1) time by storing it in key value pair

        // Hence key should be unique

        // We need to make key meaningful as we can directly just give token value as key but we need to keep it meaningful 

        // To understand it better

        // So like key: token:fjbfbffjfgfgf and value: "blocked"



        const {token} = req.cookies;

        // console.log(token);





        // await redisClient.set(`token:${token}`, "Blocked");

        // await redisClient.expire(`token:${token}`, 1800);

        // To automatically remove the stored token from the DB or can say RAM for this one we used this 

        // so fixing the expiry time can lead to problems as if user spends 20 mins on our platform then logs out

        // So we will be needed to store it for 10 mins more only as after that it will be invalid only but here we stored for 30mins

        // Hence we will not hardcode it 



        // So to get the expiry time we will first decode the token (payload) to get the expiry time again 


        const payload = jwt.decode(token);

        // console.log(payload);

        // Due to this we get the object (Base64 decoded) 

        // So in payload there is iat == creation time and exp == expiry time

        // Time is large because it calculates seconds from 1 Jan 1970


        // So to calculate time after which token will expire so will use the function


        await redisClient.set(`token:${token}`, "Blocked");


        await redisClient.expireAt(`token:${token}`, payload.exp);

        // Expire tells for how much time it will be stored in Redis like here we fixed 1800

        // with ExpireAt it tells from 1 Jan 1970 till when it will be valid




        // Can use redisClient.get(key) to get data 




        res.cookie("token",null, {expires : new Date(Date.now())});
        

        res.send("Logged Out Successfully");


    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


module.exports = authRouter;