
// const express = require('express');

// const app = express();





// app.use("/user",(req,res)=>{

//     res.send("Hello Coder Army");
// });



// app.use("/user",(req,res)=>{

//     res.send({name : "Rohit"});                 // Showing that it's also showing JSON Object
// });



// app.get("/user",(req,res)=>{
    
//     res.send({name : "Rohit"})

//     // Inspect ---- Network ---- Click on file name user ---- Header        => Use this to see Request URL , Request Method, etc

//     // So both app.use and app.get shows request method as get only

// });


// app.post("/user",(req,res)=>{

//     console.log("Data Saved Successfully");
//     res.send("Data Saved Successfully");

// })




// app.listen(4000,()=>{

//     console.log("Listening at port 4000");

// });












// So to test the POST request we will be needed to build frontend and then try and all which will be difficult 

// So POSTMAN helps us here so it helps us by using it's API for testing



// These are the APIs


// const response = await fetch('https://api.example.com/data',{
//     method : 'POST',
//     headers : {
//         'Content-Type' : 'application/json'
//     },
//     body : JSON.stringify({name : 'John', age : 30})
// });




// We call these as API endpoints 



// app.get("/user",(req,res)=>{
    
//     res.send({name : "Rohit"})

// });


// app.post("/user",(req,res)=>{

//     console.log("Data Saved Successfully");
//     res.send("Data Saved Successfully");

// })




// So POSTMAN has created all these services for our testing so it will automatically handle all the http requests (without frontend)


// In postman create collection -- click on '+' then blank collection then click on new then http request

// Select the request type here we use GET to obtain data or read data and use url as localhost:4000/user



// so when we send get request using Postman we see that we get output in postman {"name": "Rohit"} so app.get is working successfully


// Done same for post and can see output 


// app.get("/user",(req,res)=>{
    
//     res.send({name : "Rohit"})

// });


// app.post("/user",(req,res)=>{

//     console.log("Data Saved Successfully");
//     res.send("Data Saved Successfully");

// })




// app.listen(4000,()=>{

//     console.log("Listening at port 4000");

// });





// So how it handles this so our req object has many information attached to it when it comes from frontend so using it, it determines the type of request 

// And resolves it accordingly

// Same also in fetch 







// app.get("/user",(req,res)=>{
    
//     res.send({name : "Rohit"})

// });


// app.post("/user",(req,res)=>{

//     console.log(req.body);

//     console.log("Data Saved Successfully");
//     res.send("Data Saved Successfully");

// })




// app.listen(4000,()=>{

//     console.log("Listening at port 4000");

// });


// So to send data using Postman we do this request type = POST then in body section select raw then in json format we can send any data

// So we will use req.body to print the data that we are getting 

// So when we do this we get output as undefined







// So here we do parsing first

// So to parse we use this code

// app.use(express.json());


// // So now we got the data that we have sent from postman


// app.get("/user",(req,res)=>{
    
//     res.send({name : "Rohit"})

// });


// app.post("/user",(req,res)=>{

//     console.log(req.body);

//     console.log("Data Saved Successfully");
//     res.send("Data Saved Successfully");

// })




// app.listen(4000,()=>{

//     console.log("Listening at port 4000");

// });


// So if we try to remember we can see similar thing in frontend also when we try to get data without converting it to JSON we cannot see it

// So we have written app.use(express.json()) to convert our JSON data to JS Object (middleware)

// Switched to README.md












// To prove that 30 is converted to string 



// app.use(express.json());



// app.get("/user",(req,res)=>{
    
//     res.send({name : "Rohit"})

// });


// app.post("/user",(req,res)=>{

//     console.log(typeof(req.body.age));

//     // Here it's showing number ;) 

//     // So always check the typeof of the data before using as it might have taken number as string

//     console.log("Data Saved Successfully");
//     res.send("Data Saved Successfully");

// })




// app.listen(4000,()=>{

//     console.log("Listening at port 4000");

// });















// Book Store code

// const express = require('express');

// const app = express();

// const BookStore = [
//     {id:1,name:"Harry Potter",author:"DevFlux"},
//     {id:2,name:"Friends",author:"Vikas"},
//     {id:3,name:"Nexus",author:"Rohit Negi"},
//     {id:4,name:"DSA",author:"Maharaj"},
//     {id:5,name:"Prem Kahani",author:"Rohan"}
// ]

// app.get("/book", (req,res)=>{
//     res.send(BookStore);
// })


// // To get specific book data using id

// app.get("/book/:id", (req,res)=>{

//     // console.log(req.params);

//     console.log(typeof req.params.id)       // It's string that's why used parseInt

//     const id = parseInt(req.params.id);

//     // // Done parseInt as id was coming in string

//     // res.send(BookStore[id]);

//     const Book = BookStore.find(info => info.id === id)

//     res.send(Book);

// })



// app.listen(4000,()=>{

// });



// app.use accepts every method whether it's get, post, put, patch, delete

// So if in above code if we use app.use instead of app.get we get all books data 





// Solving problem 


// const express = require('express');

// const app = express();

// const BookStore = [
//     {id:1,name:"Harry Potter",author:"DevFlux"},
//     {id:2,name:"Friends",author:"Vikas"},
//     {id:3,name:"Nexus",author:"Rohit Negi"},
//     {id:4,name:"DSA",author:"Maharaj"},
//     {id:5,name:"Prem Kahani",author:"Rohan"}
// ]

// app.use("/book/:id", (req,res)=>{

//     console.log(typeof req.params.id)       

//     const id = parseInt(req.params.id);

//     const Book = BookStore.find(info => info.id === id)

//     res.send(Book);

// })

// app.use("/book", (req,res)=>{
//     res.send(BookStore);
// })



// app.listen(4000,()=>{

// });


// So our app.use only works differently from others like app.get, app.post, app.delete, app.put, app.patch

// So app.use working we already know so our app.get and others work exactly like we want to they don't see based on prefix only

// So it will compare the whole string instead of just the prefix










// Now updating code with using app.get only



const express = require('express');

const app = express();

const BookStore = [
    {id:1,name:"Harry Potter",author:"DevFlux"},
    {id:2,name:"Friends",author:"Vikas"},
    {id:3,name:"Nexus",author:"Rohit Negi"},
    {id:4,name:"DSA",author:"Maharaj"},
    {id:5,name:"Prem Kahani",author:"Rohan"}
]

app.use(express.json());

app.get("/book/:id", (req,res)=>{

    console.log(typeof req.params.id)       

    const id = parseInt(req.params.id);

    const Book = BookStore.find(info => info.id === id)

    res.send(Book);

})

app.get("/book", (req,res)=>{
    res.send(BookStore);
})


app.post("/book", (req,res)=>{

    BookStore.push(req.body)            // Would be needed to parse this as we know for JSON to JS Object

    res.send("Data saved successfully")
})

// On my own

// app.delete("/book/:id",(req,res)=>{

//     const id = parseInt(req.params.id);

//     const Books = BookStore.filter(book => book.id != id);

//     console.log(Books);

// })

// Kind of working 


app.listen(4000,()=>{

});


// So can see that by doing post request first then using get request we see that we have added the book

// So if our server is restarted and we again use get request we will see only 5 books only

// Hence we use DB or file or something to store data in

