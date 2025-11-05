

const express = require('express');

const userRouter = express.Router();

const userAuth = require('../middleware/userAuth');

const User = require('../Models/users');


// userRouter.get("/user", userAuth, async (req,res)=>{

// Updated

userRouter.get("/", userAuth, async (req,res)=>{

    try{

        

        res.status(200).send(req.result);

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


// userRouter.delete("/user/:id", userAuth, async (req,res)=>{

// Updated

userRouter.delete("/:id", userAuth, async (req,res)=>{

    try{

        await User.findByIdAndDelete(req.params.id);

        res.send("Deleted Successfully");

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }
})


// userRouter.patch("/user", userAuth, async (req,res)=>{

// Updated

userRouter.patch("/", userAuth, async (req,res)=>{

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

module.exports = userRouter;