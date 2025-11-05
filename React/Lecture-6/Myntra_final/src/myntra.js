
import React, { useState } from "react";

import ReactDOM from "react-dom/client";

import Card from "./component/Card";

import Header from "./component/Header";

import Footer from "./component/Footer";

import arr from "./utils/dummy";            // Can use as to change it's name According to us


// Header



// Body


// Footer









function App(){


    let [A , setA] = useState(arr);

    function sortArray(){
        //  let B = structuredClone(A.sort((a,b)=>a.price - b.price));

        //      "OR"

        A.sort((a,b)=>a.price - b.price);
        setA([...A]);

        // Still with this we don't see cards with sorted price 

        // This is because before it was also A and after also it was A as both of their reference is same only

        // useState sees the reference only for it and it sees that both the reference is same hence no changes are done

        // Hence we made a clone of it so that reference will be different

    }



    function priceAbove499(){
        const B = A.filter((value)=>value.price>499);
        setA(B);
    }

    return (

        <>
            {/* Header */}

            <Header/>

            <button className="button" onClick={sortArray}>Sort by Price</button>

            <button className="button" onClick={priceAbove499}>Price above 499</button>

            {/*  Body */}

            <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>

                {
                    A.map((value,index)=> <Card cloth={value.cloth} offer={value.Offer} price = {value.price} key={index}/>)

                    // map returns array so ok
                }

            </div>

            {/*  Footer */}

            <Footer/>

        </>
    )
};

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(<App/>);



// Like if we have a count variable as count = 0

// And we want to again initialize count = 0 to show in UI this is allowed by JS

// But react takes care and sees that as it's already initialized with 0 so no need to again do it

