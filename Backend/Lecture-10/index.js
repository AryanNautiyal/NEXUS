

const express = require('express');

const app = express();

const {Auth} = require("./middleware/Auth");


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




const AddToCart = [];

app.use(express.json());


app.get("/food", (req,res)=>{

    res.status(200).send(FoodMenu);

});




// app.use("/admin",Auth);



app.post("/admin", Auth, (req,res)=>{
    
    FoodMenu.push(req.body);
    res.status(201).send("Item added Successfully");

});


app.delete("/admin/:id", Auth, (req,res)=>{
        
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

app.patch("/admin", Auth, (req,res)=>{
        
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


app.post("/user/:id",(req,res)=>{

    const id = parseInt(req.params.id);

    const foodItem = FoodMenu.find(FoodItem => FoodItem.id === id);

    if(foodItem)
    {
        AddToCart.push(foodItem);

        res.status(201).send("Item added Successfully");
    }
    else
    {
        res.status(404).send("Item Out of Stock");
    }

});


app.delete("/user/:id",(req,res)=>{

    const id = parseInt(req.params.id);

    const index = AddToCart.findIndex(Item => Item.id === id);

    if(index!=-1)
    {
        AddToCart.splice(index,1);

        res.send("Item removed successfully");
    }
    else
    {
        res.status(404).send("Item is not present in cart");
    }


})


app.get("/user",(req,res)=>{

    if(AddToCart.length != 0)
    {
        res.status(200).send(AddToCart);
    }
    else
    {
        res.status(404).send("Cart is Empty");
    }
})


app.get("/dummy",(req,res)=>{

    try{

    JSON.parse("invalid json");         // Haven't handled this error 

    }
    catch(err)
    {
        res.send("Some error Occurred");
    }

    res.send("Hello Coder");

})




app.listen(4000,()=>{

    console.log("Listening at port 4000");

});





/*

        So why are we using express.json(); when we have JSON.parse();


        express.json() internal implementation might have used JSON.parse()

        But JSON.parse() wants the JSON data at a single time but our data travels in a stream (0/1 form ) and whole data cannot be 
        send together so it comes in parts 

        Hence we use express.json() as it has implementation to handle it so that it converts in parts then later combine and
        give as single 


*/