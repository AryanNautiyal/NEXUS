



const bcrypt = require('bcrypt');

const validator = require('validator');

const cookieParser = require('cookie-parser');

const jwt = require('jsonwebtoken');




const express = require('express');

const User = require('./Models/users');

const validUser = require('./utils/validateUser')

const main = require('./database');

const app = express();


app.use(express.json());

app.use(cookieParser());


app.post("/register", async (req,res)=>{

    try{

        // Due to many API level validations the code was getting messier so we don't follow this strategy 

        // So made another file for it 

        validUser(req.body);



        // Converting password to hash


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

        // Validate email and password

        if(!(validator.isEmail(req.body.emailId)) || !(validator.isStrongPassword(req.body.password)))
        {
            throw new Error("Invalid Email or Password");
        }



        // const data = await User.findById(req.body._id);

        // As user doesn't know about id of DB so he can enter email id only it's unique

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

        // JWT Token

        // We send JWT Token inside cookie 

        // res.cookie("token","hfhfhfhfhfhfhfhfh");

        // token is the key here and the random keys I pressed on keyboard is the value of the key

        // Cookies is handled by our web browsers only (where to store cookies and etc)




        // Generating using jsonwebtoken

        const token = jwt.sign({_id:data._id, emailId:data.emailId}, "Rohit@13412$", {expiresIn:"100"});    // expiry time (100 seconds here)

        // {} inside bracket comes the payload and the second argument is the key (keep the key safe)

        // header part is automatically attached


        res.cookie("token",token);


        res.send("Login Successful");

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }

})


app.get("/info", async (req,res)=>{

    try{

        // Validate the user first before sending data using JWT token

        const payload = jwt.verify(req.cookies.token,"Rohit@13412$");

        // It returns payload and if user is not verified then it will throw error 

        console.log(payload);

        // We see an extra field iat so it automatically generates this field so keep track of when this token was created



        // Due to above token code we don't need to do /user/:id anymore as the one who logs in will get the cookie

        // Using that cookie we can see who's requesting 




        const result = await User.find({});

        // console.log(req.cookies);

        res.status(200).send(result);

    }
    catch(err){

        res.send("Error : "+err.message);
    }
})


app.get("/user", async (req,res)=>{

    try{

        // To remove the usage of /:id 

        const payload = jwt.verify(req.cookies.token,"Rohit@13412$");

        const result = await User.findById(payload._id);

        res.status(200).send(result);

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


app.delete("/user/:id", async (req,res)=>{

    try{

        await User.findByIdAndDelete(req.params.id);

        res.send("Deleted Successfully");

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


app.patch("/user", async (req,res)=>{

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