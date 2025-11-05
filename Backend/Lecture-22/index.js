



// require('dotenv').config();

// // attached our keys to global object process.env

// // So process.env exist before also we just wanted to attach our keys to it 




// // console.log(process.env);

// // Don't use semicolon after lines in .env file as it takes it as a string too




// const bcrypt = require('bcrypt');

// const validator = require('validator');

// const cookieParser = require('cookie-parser');

// const jwt = require('jsonwebtoken');




// const express = require('express');

// const User = require('./Models/users');

// const validUser = require('./utils/validateUser')

// const main = require('./database');

// const app = express();


// const userAuth = require('./middleware/userAuth');


// app.use(express.json());

// app.use(cookieParser());


// app.post("/register", async (req,res)=>{

//     try{



//         validUser(req.body);


//         const salt = await bcrypt.genSalt(10);

//         const hashpass = await bcrypt.hash(req.body.password, salt);

//         req.body.password = hashpass;

//         await User.create(req.body);

//         res.status(201).send("User Registered Successfully");

//     }
//     catch(err)
//     {
//         res.send("Error : "+err.message);
//     }
// })


// app.post("/login", async (req,res)=>{

//     try{

//         if(!(validator.isEmail(req.body.emailId)) || !(validator.isStrongPassword(req.body.password)))
//         {
//             throw new Error("Invalid Email or Password");
//         }


//         const data = await User.findOne({emailId:req.body.emailId});


//         if(!(data.emailId === req.body.emailId))
//         {
//             throw new Error("Incorrect Email or Password");
//         }
        
//         const IsAllowed = data.verifyPassword(req.body.password);

//         if(!IsAllowed)
//         {
//             throw new Error("Incorrect Email or Password");
//         }
   
//         const token = data.getJWT();


//         res.cookie("token",token);


//         res.send("Login Successful");

//     }
//     catch(err)
//     {
//         res.send("Error : "+err.message);
//     }

// })


// app.get("/user", userAuth, async (req,res)=>{

//     try{

        

//         res.status(200).send(req.result);

//     }
//     catch(err)
//     {
//         res.send("Error : "+err.message);
//     }
// })


// app.delete("/user/:id", userAuth, async (req,res)=>{

//     try{

//         await User.findByIdAndDelete(req.params.id);

//         res.send("Deleted Successfully");

//     }
//     catch(err)
//     {
//         res.send("Error : "+err.message);
//     }
// })


// app.patch("/user", userAuth, async (req,res)=>{

//     try{

//         const {_id , ...update} = req.body;

//         await User.findByIdAndUpdate(_id, update,{"runValidators":true});

//         res.send("Data Updated Successfully");

//     }
//     catch(err)
//     {
//         res.send("Error : "+err.message);
//     }
// })




// main()
//     .then(()=>{
//         console.log("DB connected successfully");

//         app.listen(process.env.PORT,()=>{
//             console.log("Listening at port 4000");
//         });

//     })
//     .catch(console.error)








// Environment variable



// So can we upload this code to github ??


// No we cannot upload this code to github as although we have free DB but once the people get the DB key they will just destroy DB

// They can increase cost of DB if we have chosen paid plan, they can make many collections inside it and max out the DB 

// Similarly we cannot share the secret key from which we are doing the digital signature

// Don't upload .env file on Github
















// Express router 




// So in real life application we will create 40-50 API calls (API calls = app.get, app.use, etc) 

// So should we keep 40-50 API calls in a single file ?

// We can but our code will get very messy 

// So we can group API that have same type of work and can give a route to them 












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


app.use(express.json());

app.use(cookieParser());

// app.use("/",authRouter);

// So just by seeing ' / ' it will just take it to authRouter then inside it, it knows how to handle this


// app.use("/",userRouter);



// So what will happen here now so it will first go to /auth path then it will look for /user and etc if it's not there in the file

// Then it will return to the index.js file then will go to another route 

// So better solution for it is that we can see that initials in the userRouter for every path is /user so can use /user here

// Instead of ' / ' only


app.use("/user",userRouter);

// So now will go to authRouter first then will see that /user is not there so it will come out and then will see that /user is here

// So will go inside that route


// So to make it good we just give them initials 


app.use("/auth",authRouter);




main()
    .then(()=>{
        console.log("DB connected successfully");

        app.listen(process.env.PORT,()=>{
            console.log("Listening at port 4000");
        });

    })
    .catch(console.error)





