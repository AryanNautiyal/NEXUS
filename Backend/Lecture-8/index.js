

// const express = require('express');

// const app = express();

// const BookStore = [
//     {id:1,name:"Harry Potter",author:"DevFlux"},
//     {id:2,name:"Friends",author:"Vikas"},
//     {id:3,name:"Nexus",author:"Rohit Negi"},
//     {id:4,name:"DSA",author:"Maharaj"},
//     {id:5,name:"Prem Kahani",author:"Rohan"}
// ]

// app.use(express.json());

// app.get("/book/:id", (req,res)=>{

//     console.log(typeof req.params.id)       

//     const id = parseInt(req.params.id);

//     const Book = BookStore.find(info => info.id === id)

//     res.send(Book);

// })

// app.get("/book", (req,res)=>{
//     res.send(BookStore);
// })


// app.post("/book", (req,res)=>{

//     BookStore.push(req.body)            

//     res.send("Data saved successfully")
// })


// app.patch("/book",(req,res)=>{

//     console.log(req.body);

//     const Book = BookStore.find(book=>book.id === req.body.id);

//     if(req.body.author)
//     {
//         Book.author = req.body.author;
//     }
//     if(req.body.name)
//     {
//         Book.name = req.body.name;
//     }
    

//     res.send("Patch Updated");

// })


// app.put("/book", (req,res)=>{

//     const Book = BookStore.find(book => book.id === req.body.id);

//     Book.author = req.body.author;

//     Book.name = req.body.name;

//     res.send("Updated Successfully");


// })


// app.delete("/book/:id",(req,res)=>{

//     const id = parseInt(req.params.id);

//     const index = BookStore.findIndex(book => book.id === id);

//     BookStore.splice(index,1);

//     res.send("Successfully Deleted");

// })


// app.listen(4000,()=>{

// });


// Whenever we send data through link it takes number as string also that's why need parseInt for req.body.id 

// Whereas when we send data through body to server it remain JSON but then express.json() [parser] converts it to usable JS Object














// Using params in postman 




const express = require('express');

const app = express();

const BookStore = [
    {id:1,name:"Harry Potter",author:"DevFlux"},
    {id:2,name:"Friends",author:"Vikas"},
    {id:3,name:"Nexus",author:"Rohit Negi"},
    {id:4,name:"DSA",author:"Maharaj"},
    {id:5,name:"Prem Kahani",author:"Rohan"},
    {id:6,name:"Hello",author:"Vikas"}
]

// So we need books of the author Vikas only so we will apply a filter in postman to get that only (by using params)

app.use(express.json());

app.get("/book/:id", (req,res)=>{

    console.log(typeof req.params.id)       

    const id = parseInt(req.params.id);

    const Book = BookStore.find(info => info.id === id)

    res.send(Book);

})

app.get("/book", (req,res)=>{

    console.log(req.query);

    // Used this to get author name that we have given in postman whose books we want 

    // So below key enter author and its value as Vikas then we see that the link is changed [ localhost:4000/book?author=Vikas ]

    // Now will need to handle this query

    const authorBooks = BookStore.filter(book => book.author === req.query.author);

    res.send(authorBooks);
})


app.post("/book", (req,res)=>{

    BookStore.push(req.body)            

    res.send("Data saved successfully")
})


app.patch("/book",(req,res)=>{

    console.log(req.body);

    const Book = BookStore.find(book=>book.id === req.body.id);

    if(req.body.author)
    {
        Book.author = req.body.author;
    }
    if(req.body.name)
    {
        Book.name = req.body.name;
    }
    

    res.send("Patch Updated");

})


app.put("/book", (req,res)=>{

    const Book = BookStore.find(book => book.id === req.body.id);

    Book.author = req.body.author;

    Book.name = req.body.name;

    res.send("Updated Successfully");


})


app.delete("/book/:id",(req,res)=>{

    const id = parseInt(req.params.id);

    const index = BookStore.findIndex(book => book.id === id);

    BookStore.splice(index,1);

    res.send("Successfully Deleted");

})


app.listen(4000,()=>{

});



// In get and delete sending data through body is not preferable until the data is sensitive as we see in the link we can see data


