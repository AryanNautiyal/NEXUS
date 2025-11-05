



require('dotenv').config();

const bcrypt = require('bcrypt');

const validator = require('validator');

const cookieParser = require('cookie-parser');

const jwt = require('jsonwebtoken');




const express = require('express');

const User = require('./Models/users');

const validUser = require('./utils/validateUser')

const main = require('./database');

const app = express();


const userAuth = require('./middleware/userAuth');

const authRouter = require('./routes/auth');

const userRouter = require('./routes/user');

const redisClient = require('./config/redis');

const rateLimiter = require('./middleware/rateLimiter');





app.use(express.json());

app.use(cookieParser());

app.use(rateLimiter);


app.use("/user",userRouter);


app.use("/auth",authRouter);






const InitializeConnection = async ()=>{

    try
    {

        await Promise.all([redisClient.connect(),main()]);

        console.log("DB Connected");



        app.listen(process.env.PORT,()=>{
            console.log("Listening at port 4000");
        });

    }
    catch(err){
        console.log("Error : "+err.message);
    }
}

InitializeConnection();




