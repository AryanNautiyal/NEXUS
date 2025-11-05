
// const mongoose = require('mongoose');

// const {Schema} = mongoose;


// /*

//     "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/" 

//     So to create DB we just manipulate this link by adding DB name in the end 

//     "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/BookStore"

//     So even if DB doesn't exist there it will just create one


// */


// const url = "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/BookStore";

// async function main()
// {
//     await mongoose.connect(url);





//     // Before creating schema don't forget above line to get schema from mongoose

//     // So when we have created schema so it isn't mandatory that all fields stated here will come in data

//     // But any extra field other than the mentioned ones in schema will be rejected 

//     // So if someone send name, age, gender, address here then the data will be rejected but name,gender,city if send by someone will be accepted

//     const userSchema = new Schema({
//         name:String,
//         age:Number,
//         city:String,
//         gender:String
//     });

//     // Schema === Structure of DB collection or model





//     // after creating schema we do " Model creation "

//     // So model creation just means creating a collection (creating table)

//     const User = mongoose.model("user",userSchema);                 // As we can see no await = no network call so just taking name and schema here

//     // So we have created a collection named " user " and we have used the " userSchema " here
    
//     // So the variable User here can be called as Class as if we see closely the Schema is like the constructor 

//     // So we have created a Schema for the DB and a collection or model in which our data will be stored 

//     // Since User is a class so using OOPs concepts we know how to create object of a class




//     const user1 = new User({name:"Rohit",age:20,city:"dwarka",gender:"Male"});

//     // Hence we have created a document or an object

//     // So class is nothing but blueprint for an object so like in OOPs when we create new object we give values to variables



//     await user1.save();

//     // With this command we finally save the data of user1 in our Collection 

//     // Used await here as to store data in DB will need a network call

//     // That's why we said that it will be nothing but just JS Object (Ohhh)



//     // So instead of inserting data in 2 lines we can do this in just 1 line

//     await User.create({name:"Mohan",city:"pakistan", age:30});

//     // This single line creates the document and saves it in the collection in the DB



//     // To insert multiple documents in a model

//     await User.insertMany([{name:"Ipsita", age:18},{age:25,gender:"Male"}])




    
// }

// main()
//     .then(()=>console.log("Connection Successfully Established"))
//     .catch(console.error);







// So while creating model we see that we have used the model or collection name as user but in MongoDB Compass we see users

// So Mongoose by default lowercases the collection or model name and adds a ' s ' at the end 






















// New one due to too many comments





const mongoose = require('mongoose');

const {Schema} = mongoose;



const url = "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/BookStore";

async function main()
{
    await mongoose.connect(url);


    const userSchema = new Schema({
        name:String,
        age:Number,
        city:String,
        gender:String
    });


    const User = mongoose.model("user",userSchema);              


    // const user1 = new User({name:"Rohit",age:20,city:"dwarka",gender:"Male"});

 
    // await user1.save();




 
    // await User.create({name:"Sohan",city:"Lucknow", age:30, phone: 9822112233});

    // So tested here what will actually happen if I enter a field that is not mentioned in schema

    // So it stores the data that is present in schema and ignores the phone field 





    // await User.create({name:"Sohan",city:"Lucknow", age:"23"});

    // Automatically converted number string to number





    // await User.create({name:"Sohan",city:"Lucknow", age:"Hello"});

    // Gives error in this case



    
    // await User.create({address: "C-66", userId : "HelloWorld"});

    // In this case just creates a document in DB but it's empty 






 
    // await User.insertMany([{name:"Ipsita", age:18},{age:25,gender:"Male"}])



    // To find data

    const ans = await User.find({});

    console.log(ans);

    // Not getting information 2 times as I commented all data insertion lines 



    // Finding document by any particular field

    const result = await User.find({name:"Rohit"});

    console.log(result);

    
}

main()
    .then(()=>console.log("Connection Successfully Established"))
    .catch(console.error);



// So we see that it stores some extra information __v in database

// So __v is for " version " so it stores the version of data so if we modify the data then the __v will becomes __v : 1

// So it increments the count for each modification in data




// Making new file database.js from here

// Arranging the codes in proper manner