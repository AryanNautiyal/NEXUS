




const express = require('express');

const User = require('./Models/users');

const main = require('./database');

const app = express();


app.use(express.json());



app.post("/register", async (req,res)=>{

    try{


        const mandatoryField = ["firstName","emailId","age"];

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



// So we don't store password in our DB in plain text

// As we see that in news someone's DB is leaked and all that (DB leaked means that someone has copied the DB and kept it)

// So in leaked DB someone will have all the credentials about everyone

// And if someone across network uses same password for multiple websites then it's a problem 

// So should we encrypt the password to store in DB so for encryption we will require a key 

// So if by chance hacker obtains the key using which we were encrypting therefore this method is also not good

// Asymmetric key Cryptography in this the key for encryption and decryption is different 

// Symmetric key Cryptography in this same key is used for encryption and decryption 

// So we need something like so that we can generate some other thing from our password but cannot revert it back

// eg: Rohit@123 --> Mohan@312 we can do this conversion but not this Mohan@312 --> Rohit@123

// So we need something like this (one way encryption)


/*

    The avalanche effect is a desirable property in cryptography where a minor change to the input (plaintext or key) causes 
    a significant and unpredictable change in the output (ciphertext).

*/

// In hashing we go only one way so recognizing and finding pattern to decrypt and all that is next to impossible

// That's why it tells us to make strong passwords using special character, small letter, etc as it makes it hard for hacker

// So used SHA-256 here which generates hash code 

// So speciality of SHA-256 is that not matter how long password we give like 11 bit or 500 bit it will always return 256 bit hash code

// So hacker cannot even guess the length of the password 

// So SHA-256 is also not used in real world 

// This is because hacker know how to crack SHA-256 password by using Rainbow Table Attack

// So if someone uses very common password and it is present in rainbow table then the hacker just needs to match the hash code

// Then hacker can easily see the password 

// So to save password we need something different so here comes our " salting " in picture

// We will attach salt to the password that user is sending (salt === string)

// eg: our salt is "mohit" so user gives password Rohit@123 so we add salt to it "Rohit@123mohit" 

// Now from this password it will find hashcode and now we will store this hashcode in our DB

// So now the question is if we should use same salt for everyone that's logging or signing up in our website

/*

        1st Case : Using Same Salt 

            The problem with this solution is that hacker will see in leaked DB that many people have same hashcode 

            Which means that all had same password so it might try to use brute force attack and then hacker can obtain password

            for many accounts (as all had same password stored) so this is a problem 

            And hacker if by chance gets the salt then also problem 

            Hence this solution is not feasible 

        
        2nd Case : Using Different Salt

            In this also hacker can hack but here the hash code for many people will be different now

            So at a time hacker can find password for one person only

            So problem here is that we will be needed to store the salt also here 

            So we will store the salt in the DB only and will not apply any encryption or anything to the salt

            Because even if hacker sees the salt it will still be needed to crack the password also or calculate password 


*/
