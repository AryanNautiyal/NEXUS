

const express = require('express');

const User = require('./Models/users');

const main = require('./database');

const app = express();


app.use(express.json());

// See Mongoose docs for commands easy to understand


app.post("/register", async (req,res)=>{

    try{

        // Creating our own validators

        const mandatoryField = ["firstName","emailId","age"];

        // const IsAllowed = Object.keys(req.body).every((keys)=> mandatoryField.includes(keys));

        // Object.keys returns array of object keys

        // Above one won't work as req.body will have other fields also so will just reverse it



        const IsAllowed = mandatoryField.every((keys)=> Object.keys(req.body).includes(keys));

        if(!IsAllowed)
        {
            throw new Error("Fields Missing");
        }

        await User.create(req.body);

        res.status(201).send("User Registered Successfully");

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


app.get("/info", async (req,res)=>{

    try{

        const result = await User.find({});

        res.status(200).send(result);

    }
    catch(err){

        res.send("Error : "+err.message);
    }
})


app.get("/user/:id", async (req,res)=>{

    try{

        const result = await User.findById(req.params.id);

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

        // runValidators are used as after using validator function the data was correctly inserted but at the time of updation

        // user tried to enter wrong value and it just blindly saved the wrong values in DB without checking validator function

        // So this is used so that while updating it will run validator functions again

        // Just checked it wasn't checking anything even min and max limit on age so this is used to run all the validations we have put

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