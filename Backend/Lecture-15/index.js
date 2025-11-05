
const express = require('express');

const app = express();

const main = require('./database');

const User = require('./Models/users');

// imported User and main as they are used


app.use(express.json());

app.get("/info",async (req,res)=>{

    const ans = await User.find({});        // Due to this made async

    res.status(200).send(ans);
});

app.post("/info", async (req,res)=>{

    try{

        await User.create(req.body);

        res.status(201).send("Successfully Updated");
    
    }
    catch(err){

        res.status(500).send(err);
    }
});

app.delete("/info/:name", async (req,res)=>{

    await User.deleteOne({name:req.params.name});

    // Modified it on my own for deleting according to choice

    res.send("Data Deleted");
});

app.put("/info", async (req,res)=>{

    // await User.updateOne({name:"Mohan"},{age:40});

    await User.updateOne({name:"Mohan"},{age:40, city:"Bangladesh"});      // First parameter is used to select which one to update 

    // Second param is to update what

    res.send("Updated Successfully");

})




main()
    .then(()=>{
        console.log("Connection Established Successfully");

        app.listen(4000,()=>{
            console.log("Listening at port 4000");
        });

        // const res = await User.find({});
        // console.log(res);

        // Made async to check if connection is established by find method

    })
    .catch(console.error)


// Did this so that first our DB connection is established before user requests anything as we can miss user's request if we are not connected


