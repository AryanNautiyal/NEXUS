



const bcrypt = require('bcrypt');

const validator = require('validator');


const express = require('express');

const User = require('./Models/users');

const validUser = require('./utils/validateUser')

const main = require('./database');

const app = express();


app.use(express.json());



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





        const data = await User.findById(req.body._id);

        if(!(data.emailId === req.body.emailId))
        {
            throw new Error("Incorrect Email or Password");
        }
        
        const IsAllowed = await bcrypt.compare(req.body.password, data.password);

        if(!IsAllowed)
        {
            throw new Error("Incorrect Email or Password");
        }

        res.send("Login Successful");

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


// So problem in this was that when user has logged in to website how will be know for every request he's been giving that

// the user is logged in already so one such method is that with every request user will give emailId and password again and again

// But this costs us many DB calls increasing the amount 

// Therefore we use session id so once the user logs into the website we give user a session id using which he makes requests

// Session id is also sensitive as if someone else gets that session id then someone else can also use that and obtain data of other person

// And if we store Session id in DB then we will be needed to make DB call for every request

// If we keep it in memory of server then we will be needed to distribute it to other servers also which is a overhead

// Need to share with other servers also as Instagram has many servers to load balancer can redirect to other server if too much load

// That's why need session id in every server so that user can access smoothly

// So this is called as " StateFul " as it's by himself maintaining it 


/*


    "Stateful" describes a system or application that remembers and retains information about previous interactions to inform 
    future ones, unlike "stateless" systems which treat each request as an isolated event


*/

// So here like in restaurants or say college we have id cards so guard at college gate doesn't check the id card

// He just sees the college signature and instantly knows that the person is from this college only

// Similar we will do here

// So we will use digital signature to solve the problem 







// *** Meaning of digital signature ***



// So when we send messages over the network sometimes the message can be changed due to change in 1 or 2 bit

// So how can we ensure message integrity 

// So we send the message in hash code also along with original message so we can ensure message integrity by

// Just convert the message we got and compare it with the hashcode we get so if it matches then message is not modified 

// If it doens't match then message is modified

// Still hacker can obtain message change message and change hashcode that was going with message to manipulate user






// So to ensure that no one manipulates messages or to maintain message integrity we use public private key

// So my public key is with everyone like hacker, server, other users, etc but my private key will be with me only

// So we will encrypt our message with our private key and can only decrypt this message using our public key

// So if we encrypt the message with public key so it will be decrypted by private key only




// So we will encrypt our hashcode that we were sending with message using our private key

// So whoever we are sending this message to will decrypt this message using our public key

// As our public key is available to everyone

// So the receiver will get the actual hashcode

// Then receiver can just convert the message to hashcode and compare and check if there's any modification in the message



// So now our question will be what if hacker takes the message as he can also decrypt it using our public key

// So hacker will first decrypt the hashcode then alter the message and then encrypt the message using the key 

// But the hacker doesn't have our private key to encrypt the hashcode again so whatever the hacker sends

// First the receiver will decode the hashcode and compare it with message hashcode but both of them won't match

// As hacker didn't have our private key so by this the receiver will know that the message is altered

// So what is digital signature ?

/*

    A digital signature is a cryptographic method used to verify the authenticity and integrity of digital documents,
    messages, and data

    'OR'

    a digital code which is attached to an electronically transmitted document to verify its contents and the sender's identity.

*/

// So digital signature here is doing that we encrypt the message hash code using our private key

// So that anyone who is sitting in between even if they get the message they won't be able to alter it

// (As receiver can just verify if the message is altered or not)



// Key is just a string (encryption and decryption algos are applied)
