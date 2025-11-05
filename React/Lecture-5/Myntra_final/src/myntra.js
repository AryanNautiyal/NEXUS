
import React from "react";

import ReactDOM from "react-dom/client";

import Card from "./component/Card";

import Header from "./component/Header";

import Footer from "./component/Footer";

import arr from "./utils/dummy";            // Can use as to change it's name According to us


// Header



// Body


// Footer









function App(){

    return (

        <>
            {/* Header */}

            <Header/>

            {/*  Body */}

            <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>

                {
                    arr.map((value,index)=> <Card cloth={value.cloth} offer={value.Offer} key={index}/>)

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





// In company we won't code all in one file only as it would lead to too much trouble in changing and reading file

// Hence we use modules (like function we use)



// Can use both .js or .jsx both extensions







// React is a library so if doesn't support any specific folder structure all are equal for it

// Whereas Angular is framework so it tells specific folder structure

// React manipulates DOM efficiently and we only need to focus on UI hence we learn React

