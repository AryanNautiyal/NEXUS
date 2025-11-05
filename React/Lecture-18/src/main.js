


// Child component state is attached to key 


// JS code re-renders the whole code whereas React only re-renders a particular component




// Why index are not used as key







import React, { useState } from "react";

import ReactDOM from "react-dom/client";

import Add from "./component/Add";




function App(){

    const [language, setLanguage] = useState(["TS","JS","Java"]);

    function handleClick(){
        setLanguage(["C++", ...language])
    }


    return (

        <>

        <div style={{display:"flex", justifyContent:"center", gap:"20px", marginTop:"50px"}}>
            {
                language.map((value,index)=><Add key={value} value={value}></Add>)
            }
        </div>

        <button onClick={handleClick}>Add language</button>
        
        </>
    )
}







ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);






// Taking keys as index leads to incorrect output

// As when we add another language in front the vote count gets shifted as it again takes key from index value

// And this time at index 0 there's C++ so TS votes goes to C++ and then same for JS and Java

// As C++ got key 0 and key is attached to state so hence it got 3 votes

// If we don't enter key then it by default takes key as index only





// Now let's see

// JS code re-renders the whole code whereas React only re-renders a particular component

// This is a myth as in the end in React also it's converted to JS only so JS also re-renders a particular component only

// Both are same almost as React also in the converts code into JS and then gives it to actual DOM 






// Virtual DOM is light weight whereas actual DOM is heavy weight


// Can confirm this easily by this

/*

    const VDom = <h1>Hello Coder Army</h1>;

    const RDom = document.createElement('h1');

    RDom.innerText = "Hello Coder Army";


    console.log(VDom);

    console.dir(RDom);


    See the types and all in there VDom has very less whereas RDom has many


*/


