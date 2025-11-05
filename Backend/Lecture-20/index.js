








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


app.use(express.json());

app.use(cookieParser());


app.post("/register", async (req,res)=>{

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


app.post("/login", async (req,res)=>{

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
        
        const IsAllowed = await bcrypt.compare(req.body.password, data.password);

        if(!IsAllowed)
        {
            throw new Error("Incorrect Email or Password");
        }



        const token = jwt.sign({_id:data._id, emailId:data.emailId}, "Rohit@13412$", {expiresIn:"100"});    


        res.cookie("token",token);


        res.send("Login Successful");

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }

})


app.get("/user", userAuth, async (req,res)=>{

    try{

        

        res.status(200).send(req.result);

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


app.delete("/user/:id", userAuth, async (req,res)=>{

    try{

        await User.findByIdAndDelete(req.params.id);

        res.send("Deleted Successfully");

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


app.patch("/user", userAuth, async (req,res)=>{

    try{

        const {_id , ...update} = req.body;

        await User.findByIdAndUpdate(_id, update,{"runValidators":true});

        res.send("Data Updated Successfully");

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})




main()
    .then(()=>{
        console.log("DB connected successfully");

        app.listen(4000,()=>{
            console.log("Listening at port 4000");
        });

    })
    .catch(console.error)


