

// React Redux


// Only use this for state management

// Redux says it won't let us do State Lifting (That one where we need to share count value to 2 childs so we lift the state and declare it in their ancestor)

// Redux makes it easier to manage states so that we won't have to do state lifting

// Will use this more than useContext

// So in this we will create like a global variable or global file that can be accessed by everyone 

// So we will use useState inside that

// We won't allow anyone to directly implement changes in our global file or in value of global variable 








// As it's global so there is possibility of mistakes so that it changes value wrongly and other components suffer from it

// So as we are not giving direct access so there will be setters for it so that when operation is performed using setters can update value

// And these functions are called REDUCERS







// So when someone calls like a function to change the global value then as all the functions are stored in global file

// So DISPATCHER takes the request to perform the operation and makes the suitable changes using the function in global variable

// So will do it like dispatch(Function_name())

// like dispatch(Decrement()) or dispatch(Reset()) , etc





// So like then as it's global so nowhere else there should be same variable name as global variable

// And also there's shouldn't be same function name as global function that operate on global variable

// So we cannot look each time so see the names and all and if there's no way we cannot name any variable that doesn't relate to what it's used for

// So the solution is provided by SLICE

// So we will make slices in global file like in slice1 we store global variables and in slice2 we store reducer functions

// So whenever we dispatch we will also mention slice also as to in which slice it is stored so hence it will make it different from others

// SLICE is just like we made spaces in global file and stored different things in them

// Note: SLICE names should be unique 

// So just need to make sure  no one uses the slice name as slice name should be unique



// So we have 2 things one is Redux which connects React with global files and all that

// Whereas Redux Toolkit is used to create something as named toolkit, so it is used to create slice 










import React from "react";

import ReactDOM from "react-dom/client";

import Counting from "./component/Counting";


import { Provider } from "react-redux";

import stores from "./Stores";



function App(){


    return (


            <Provider store={stores}>

            <Counting></Counting>

            </Provider>
        
    )
}






ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);

