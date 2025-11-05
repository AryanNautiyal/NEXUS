

const foodItems = [
    {id:1, food:'Pizza', Price:"200"},
    {id:2, food:'Pasta', Price:"300"},
    {id:3, food:'Momos', Price:"1200"},
    {id:4, food:'Kebab', Price:"2000"},
    {id:5, food:'Chicken', Price:"1200"},
    {id:6, food:'Paneer', Price:"2800"},
    {id:7, food:'Burger', Price:"2100"},
    {id:8, food:'Poha', Price:"4200"},
    {id:9, food:'Rice', Price:"100"},
    {id:10, food:'Daal', Price:"300"}
];


import { useState } from "react";


import FoodCart from "./FoodCart";



export default function Card(){


    return (

        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px"}}>

            {foodItems.map((value)=>{
                return (
                    <div key={value.id}>

                        <FoodCart value={value}></FoodCart>

                       
                    </div>
                )
            })}
        </div>
    )

}



// Made separate component for food cart as we will be using useState in that component

// So that each food item has its own state variable

// If we use useState here then all the food items will share the same state variable

// So if we click on add for one item then all the items will show remove

// So we made separate component for food item which has its own state variable

// So when we click on add for one item then only that item will show remove button

// Other items will still show add button as they have their own state variable