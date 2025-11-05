



// Middleware



// const express = require('express');

// const app = express();


// app.use("/user",(req,res)=>{

//     console.log("First");

//     res.send("Hello Ji");

//     console.log("Hello First");   
    
//     // With this we confirmed that res.send is not return so it executes line after that so still second function is not executed

//     // Cannot send 2 response in a single function as server serves request when it is send to when it sees res.send it sends data

//     // Then it cannot send 2 responses for a single request hence we cannot (Due to this we study Web Sockets for real time chat application)

//     // As in real time chat application even though client doesn't request the message we still send it to the client

//     // Similarly if we don't send any response then the client keeps on requesting until after sometime it stops

//     // We can see this in postman if we try to use any http method and it's callback doesn't have res.send

// },
// (req,res)=>{

//     console.log("Second");

//     res.send("Good Morning");

// })

// // Only first function is getting executed


// app.listen(4000,()=>{

// });







// Now learning about how we can execute 2 callback functions in app.use




// const express = require('express');

// const app = express();


// app.use("/user",(req,res,next)=>{

//     console.log("First");

//     // res.send("Hello Ji");           // Commenting this response as when both the function are executed there are 2 responses 

//     // So to avoid error 

//     console.log("Hello First");   
    
//     next();

//     // The third parameter is next and next() calls the second callback function so that it gets executed

// },
// (req,res)=>{

//     console.log("Second");

//     res.send("Good Morning");

// })


// app.listen(4000,()=>{

// });






// Now using 3 functions



// const express = require('express');

// const app = express();


// app.use("/user",(req,res,next)=>{

//     console.log("First");

//     // res.send("Hello Ji");           // Commenting this response as when both the function are executed there are 2 responses 

//     // So to avoid error 

//     console.log("Hello First");   
    
//     next();

//     // The third parameter is next and next() calls the second callback function so that it gets executed

// },
// (req,res,next)=>{

//     console.log("Second");

//     // res.send("Good Morning");

//     next();

//     // First next calls this function so it gets executed then this second next calls the third function so it gets executed

// },
// (req,res)=>{

//     console.log("Third");

//     res.send("Yoyo");

// })


// app.listen(4000,()=>{

// });





/*

        (req,res,next)=>{

            console.log("First");

            res.send("Hello Ji");   

            console.log("Hello First");   
            
            next();
        }


        We can call these functions as route handler


*/


















// const express = require('express');

// const app = express();


// app.use("/user",(req,res,next)=>{

//     console.log("First");

//     console.log("Hello First");   
    
//     next();

//     console.log("Sixth");

// },
// (req,res,next)=>{

//     console.log("Second");

//     next();

//     console.log("Fifth");

// },
// (req,res)=>{

//     console.log("Third");

//     res.send("Yoyo");

//     console.log("Fourth");

// })


// app.listen(4000,()=>{

// });



















// const express = require('express');

// const app = express();


// app.use("/user",(req,res,next)=>{

//     console.log("First");

//     console.log("Hello First");   
    
//     next();


// },
// (req,res,next)=>{

//     console.log("Second");

//     next();

// },
// (req,res,next)=>{

//     console.log("Third");


//     next();     // Now what will happen ??

//     // It gives error 404 which indicates that the data is not found [ Requested resource could not be found. 😐 ]

// })


// app.listen(4000,()=>{

// });






















// const express = require('express');

// const app = express();


// // Route Handler = RH

// //  app.use(route, [RH, RH, RH, RH, RH, RH]) OR  app.use(route, RH, [RH, RH, RH, RH, RH])   OR   app.use(route, RH, RH, [RH, RH, RH], RH)



// app.use("/user",[(req,res,next)=>{

//     console.log("First");

//     console.log("Hello First");   
    
//     next();


// },
// (req,res,next)=>{

//     console.log("Second");

//     next();

// },
// (req,res,next)=>{

//     console.log("Third");


//     next();     

// },
// (req,res)=>{

//     console.log("Fourth");

//     res.send("Done");
    
// }])

// // We can wrap all our route handlers in an array

// // Will work the same


// app.listen(4000,()=>{

// });


















// We can also write functions like this as above one not much readable




// const express = require('express');

// const app = express();


// // Middleware (mw) : mw -> mw -> mw -> request handler


// app.use("/user",(req,res,next)=>{

//     console.log("First");

//     console.log("Hello First");   
    
//     next();


// });


// app.use("/user",(req,res,next)=>{

//     console.log("Second");

//     next();

// });


// app.use("/user",(req,res,next)=>{

//     console.log("Third");


//     next();   

// });


// app.use("/user",(req,res)=>{

//     console.log("Fourth");

//     res.send("Done");
    
// });


// app.listen(4000,()=>{

// });






// So here our question arises what is middleware

// So our middleware is nothing but the function with next() in them except the one which is actually responding to the request



/*


                app.use("/user",(req,res,next)=>{

                    console.log("First");

                    console.log("Hello First");   
                    
                    next();


                });


                app.use("/user",(req,res,next)=>{

                    console.log("Second");

                    next();

                });


                app.use("/user",(req,res,next)=>{

                    console.log("Third");


                    next();   

                });


                app.use("/user",(req,res)=>{

                    console.log("Fourth");

                    res.send("Done");
                    
                });



            In this the middleware is


            
                app.use("/user",(req,res,next)=>{

                    console.log("First");

                    console.log("Hello First");   
                    
                    next();


                });


                app.use("/user",(req,res,next)=>{

                    console.log("Second");

                    next();

                });


                app.use("/user",(req,res,next)=>{

                    console.log("Third");


                    next();   

                });


            The last function is not called as a middleware as it is responding to the request (so middleware doesn't send response)


            -- In server-side web frameworks, middleware refers to a function or a series of functions that execute in order
                 between the server receiving an HTTP request and sending the final response.


            
            So the last function which is actually sending the response can be called as Request handler

*/










// Understanding usecase of middleware


const express = require('express');

const app = express();


// So first our app.use is executed as it can handle any request, it saves the logs and then according to method the next() is executed

// Same can be done for authentication and authorization too

app.use("/user", (req,res,next)=>{

    console.log(`${Date.now} ${req.method} ${req.url}`);

    next();

})


app.get("/user",(req,res)=>{

    // console.log(`${Date.now} ${req.method} ${req.url}`);

    res.send("Info about user");

})

app.post("/user",(req,res)=>{

    // console.log(`${Date.now} ${req.method} ${req.url}`);

    res.send("Info saved");

})

app.delete("/user",(req,res)=>{

    // console.log(`${Date.now} ${req.method} ${req.url}`);

    res.send("Info deleted");

})

// So to save logs for each (logs code can be 10-15 lines) so instead of writing it again and again we use middleware




app.listen(4000,{

});

// So we need to maintain the logs of each request as if by chance our server crashes we can see that due to which request the server crashed

// Then we can try to fix that request method

// Sometimes Government also asks for logs 

// So we make changes in our code to store logs too (aise hi karr rahe h abhi)



// Our [ app.use(express.json()); ] <-- this is also a middleware

