





// useContext hook



import React, { useState, useEffect, useMemo, useCallback, useContext } from "react";

import ReactDOM from "react-dom/client";

import Increment from "./component/Increment";

import Decrement from "./component/Decrement";

import GlobalContext from "./Global";




function App(){

    const [count, setCount] = useState(0);


    return (
        <>

            {/* <GlobalContext.Provider value={{count,setCount}}>               So we send it like object so that everyone can access it so now this object has reached Global file */}

            {/* Or can do like this in key-value pair */}

            <GlobalContext.Provider value={{counts:count,setCounts:setCount}}>     

            <h1>Parent Counter is: {count}</h1>

            </GlobalContext.Provider>

            
        
        </>
    )
}








ReactDOM.createRoot(document.getElementById('root')).render(<App/>);










// So we need to pass a variable that is in Parent and we need to pass it to the grandchild

// So we will pass it to child first of root parent then to his grandchild

// So like this if we want to pass to grandchild's grandchild so doing this work would be tedious and this passing is called props drilling

// So to save this tedious work we use useContext 

// By using useContext we can directly send variables from root parent to grandchild's grandchild

// So what if we make a global file in which we store all the variables and these variables can be accessed by anyone

// So change in values also reflect in global file

// Like for example Github

