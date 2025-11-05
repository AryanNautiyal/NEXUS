






import React from "react";

import ReactDOM from "react-dom/client";

import Counting from "./component/Counting";


import { Provider } from "react-redux";

import stores from "./Stores";

import { reactslicer } from "./Slicer1";

import CustomCounter from "./component/CustomCounter";



function App(){

    // console.log(stores);

    console.log(reactslicer);


    return (


            <Provider store={stores}>

            <Counting></Counting>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <CustomCounter></CustomCounter>

            </Provider>
        
    )
}






ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);





// We see that a new key actions is added in reactslicer object

// In actions the Increment, Decrement and Reset functions are present

// and each of them have a type associated with it which is slice1/func_name

// So action is created because when we dispatch an action it goes to the store

// and store sees which slice it is associated with and then goes to that slice

// and sees which function to execute based on the type