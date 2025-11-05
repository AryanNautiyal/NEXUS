

// const express = require('express');

// const app = express();      // Created server

// app.use((req,res)=>{

//     // res.send({'name':'Rohit', 'age':20})                 // Sended data in JSON format using this

//     res.send({'name':'Rohit', 'age':20, 'money':70, 'Mon':20})                // Need to restart server everytime we update data we are sending which is a problem      
    
//     // So this restarting server problem is solved by nodemon

// })

// app.listen(4000, ()=>{
//     console.log("Listening at port 4000")
// })








// Other part (routing)





// const express = require('express');

// const app = express();  

// // Home page

// // app.use("/", (req,res)=>{           // Due to this here it sees / only and for each page redirects to home page only 

// //     // So to reolve this use it at last

// //     res.send("I am your Home Page")

// // })

// // For routing used /about here

// app.use("/about", (req,res)=>{

//     res.send({'name':'Rohit', 'age':20, 'money':70, 'Mon':20})             

// })


// // Used /contact here

// app.use("/contact", (req,res)=>{

//     res.send("I am your Contact Page")

// })

// // Used /detail here

// app.use("/detail", (req,res)=>{

//     res.send("I am your Detail Page");

// })


// // Home Page


// app.use("/", (req,res)=>{

//     res.send("I am your Home Page")

// })


// app.listen(4000, ()=>{
//     console.log("Listening at port 4000")
// })







// Use of ? 



const express = require('express');

const app = express();  


// app.use("/abou?t" , (req,res)=>{     // Due to this the ' u ' becomes optional in about 

//     res.send({'name':'Rohit', 'age':20, 'money':70, 'Mon':20})             

// })




// app.use("/abou+t" , (req,res)=>{     // Due to this the ' u ' can come in any count in about 

//     res.send({'name':'Rohit', 'age':20, 'money':70, 'Mon':20})             

// })



// app.use("/abou*t" , (req,res)=>{     // Due to this after ' u ' any character and in any number can come in about 

//     res.send({'name':'Rohit', 'age':20, 'money':70, 'Mon':20})             

// })



app.use("/about/:id/:user" , (req,res)=>{     // Due to this after about it makes it optional like we can enter anything

    // Stores in object format in req.params like { 'id' : 40, 'user' : "Rohit"}

    // So it makes it optional to write id and user instead of them can write anything

    // Made it dynamic as if 1000 users use it we won't have to make multiple links
    
    console.log(req.params)
;
    res.send({'name':'Rohit', 'age':20, 'money':70, 'Mon':20})             

})



app.use("/contact", (req,res)=>{

    res.send("I am your Contact Page")

})

app.use("/detail", (req,res)=>{

    res.send("I am your Detail Page");

})


app.use("/", (req,res)=>{

    res.send("I am your Home Page")

})


app.listen(4000, ()=>{
    console.log("Listening at port 4000")
})