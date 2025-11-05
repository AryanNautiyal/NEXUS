

const express = require('express');

const app = express();


// DB : array

const FoodMenu = [

    {id:1, food: "Chowmein", category:"veg", price:500},
    {id:2, food: "Butter Naan", category:"veg", price:100},
    {id:3, food: "Chicken", category:"non-veg", price:1000},
    {id:4, food: "Mutton", category:"non-veg", price:1500},
    {id:5, food: "Momos", category:"veg", price:300},
    {id:6, food: "Chai", category:"veg", price:50},
    {id:7, food: "Rajma", category:"veg", price:300},
    {id:8, food: "Roti", category:"veg", price:20},
    {id:9, food: "Chichken Lollipop", category:"non-veg", price:700},
    {id:10, food: "Kebab", category:"non-veg", price:400},
    {id:11, food: "Paneer", category:"veg", price:800},
    {id:12, food: "Egg Curry", category:"non-veg", price:400},
    {id:13, food: "Salad", category:"veg", price:100},
    {id:14, food: "Shawarma", category:"veg", price:300},
    {id:15, food: "Butter Chicken", category:"non-veg", price:900},
    {id:16, food: "Mushroom", category:"veg", price:700}

]


// For user to add items to his/her cart

const AddToCart = [];

app.use(express.json());


app.get("/food", (req,res)=>{

    res.status(200).send(FoodMenu);

    // Responding with status of 200 => Successful (GET/PUT/PATCH)

});


// app.post("/admin", (req,res)=>{

//     // Add item into food menu

//     // Dummy code for authentication 

//     const token = "ABCDEF";

//     const Access = token === "ABCDEF"?1:0;

//     if(Access){
//         FoodMenu.push(req.body);
//         res.status(201).send("Item added Successfully");
//     }
//     else
//     {
//         res.status(403).send("Permission not granted");
//     }

// });


// app.delete("/admin/:id", (req,res)=>{


//     const token = "ABCDEF";

//     const Access = token === "ABCDEF"?1:0;

//     if(Access){
        
//         const id = parseInt(req.params.id);

//         const index = FoodMenu.findIndex(FoodItem => FoodItem.id === id);

//         if(index === -1)
//         {
//             res.status(404).send("Item Doesn't Exist");
//         }
//         else
//         {
//             FoodMenu.splice(index,1);

//             res.send("Item deleted Successfully");
//         }

//     }
//     else
//     {
//         res.status(403).send("Permission not granted");
//     }

// })

// app.patch("/admin", (req,res)=>{

//     const token = "ABCDEF";

//     const Access = token === "ABCDEF"?1:0;

//     if(Access){
        
//         const id = req.body.id;

//         const Food = FoodMenu.find(foodItem => foodItem.id === id);

//         if(Food)
//         {
//             if(req.body.food)
//             {
//                 Food.food = req.body.food;
//             }
//             if(req.body.category)
//             {
//                 Food.category = req.body.category;
//             }
//             if(req.body.price)
//             {
//                 Food.price = req.body.price;
//             }

//             res.status(200).send("Successfully updated");
//         }
//         else{
//             res.status(404).send("Item doesn't exist");
//         }
//     }
//     else
//     {
//         res.status(403).send("Permission not granted");
//     }
    
// })



app.use("/admin",(req,res,next)=>{      // Making middleware for auth as to avoid writing same code again and again 

    const token = "ABCDEF";

    const Access = token === "ABCDEF"?1:0;

    if(Access){

        next();
    }
    else
    {
        res.status(403).send("Permission not granted");
    }

});



app.post("/admin", (req,res)=>{
    
    FoodMenu.push(req.body);
    res.status(201).send("Item added Successfully");

});


app.delete("/admin/:id", (req,res)=>{
        
    const id = parseInt(req.params.id);

    const index = FoodMenu.findIndex(FoodItem => FoodItem.id === id);

    if(index === -1)
    {
        res.status(404).send("Item Doesn't Exist");
    }
    else
    {
        FoodMenu.splice(index,1);

        res.send("Item deleted Successfully");
    }


});

app.patch("/admin", (req,res)=>{
        
    const id = req.body.id;

    const Food = FoodMenu.find(foodItem => foodItem.id === id);

    if(Food)
    {
        if(req.body.food)
        {
            Food.food = req.body.food;
        }
        if(req.body.category)
        {
            Food.category = req.body.category;
        }
        if(req.body.price)
        {
            Food.price = req.body.price;
        }

        res.status(200).send("Successfully updated");
    }
    else{
        res.status(404).send("Item doesn't exist");
    }
    
});




app.listen(4000,()=>{

    console.log("Listening at port 4000");

});


// Can make it more neat and clean see index1.js file and middleware folder 
