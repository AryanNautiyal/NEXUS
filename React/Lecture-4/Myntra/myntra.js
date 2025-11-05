
import React from "react";

import ReactDOM from "react-dom/client";


// Header


// Body


// Footer


const arr = [{cloth:"T-Shirt", Offer:"30-50%Off"}, {cloth:"Skirt", Offer:"20-40%Off"}, {cloth:"Kurta", Offer:"30-60%Off"}, {cloth:"Patloon", Offer:"11-40%Off"},{cloth:"Shoes", Offer:"40-60%Off"},{cloth:"Shirt", Offer:"10-20%Off"},];




function Card(props){
    return(

        <div style={{border:"2px solid green" , padding:"2px", backgroundColor:"green"}}>
            <img src="https://www.technosport.in/cdn/shop/files/OR81Black_1.jpg?crop=center&height=2048&v=1755594588&width=2048" height="200px" width="200px"/>

            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>

    )
}




function App(){

    return (
        // Header
        // Body

        <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
            {/* <Card cloth="T-shirt" offer="20-80%off"/>
            <Card cloth="Jeans" offer="30-80%off"/>
            <Card cloth="Pant" offer="50-60%off"/>
            <Card cloth="Kurta" offer="30-80%off"/>
            <Card cloth="Pajama" offer="10-80%off"/>
            <Card cloth="T-shirt" offer="20-80%off"/>
            <Card cloth="T-shirt" offer="20-80%off"/>
            <Card cloth="T-shirt" offer="20-80%off"/> */}

            {
                arr.map((value,index)=> <Card cloth={value.cloth} offer={value.Offer} key={index}/>)

                // map returns array so ok
            }

        </div>

        // Footer
    )
};

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(<App/>);




