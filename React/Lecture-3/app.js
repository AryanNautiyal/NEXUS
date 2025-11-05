// To run code below and to display it in our website we import react and react-dom


import React from "react";

// We imported React from folder in node_modules named react

import ReactDOM from "react-dom/client";

// We imported ReactDOM from folder in node_modules named react-dom

// Before ReactDOM was in react-dom folder but the latest version is in react-dom/client



// It still gives error : app.js:2 Uncaught SyntaxError: Cannot use import statement outside a module

// This import is part of our JS only but it's part of our latest version of JS

// Hence it's giving this error

// So we need to tell browser that our app.js is not any normal JS file it's a module






const element = React.createElement('h1',{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color: "pink"}, key:'h1'},"Hello Coder Army");

const element1 = React.createElement('h2',{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color: "white"}, key:'h2'},"Maza aaya mujhe");


const div1 = React.createElement('div',{},[element, element1]);


const Reactroot = ReactDOM.createRoot(document.getElementById('root'));     

Reactroot.render(div1);




// JSX : JavaScript XML 

// With JSX we can write direct HTML code inside JS file

const newElement = <h1>Hello Coder Army</h1>;           // This is JSX

Reactroot.render(newElement);

// JSX is not part of React

// React.createElement => react element (JSObject) => HTML element

// React.createElement returns a JSObject or react element then by render we convert it into HTML element



// JSX allows us to write HTML like code in JS file (it's HTML like code so there are some differences)


// So when we write code using JSX then there must be someone that converts it to React code

// So here comes babel in action so parcel already brings babel together so we can see it


// JSX => React.createElement() => react element (JSObject) => HTML element

// First we write in JSX in JS file then Babel converts it to React.createElement() then it follows normal procedure like above



// const newElement = <h1>Hello Coder Army</h1>;   ===      const element = React.createElement('h1',{} ,"Hello Coder Army");


// So babel is also kind of transpiler



// It expects a single element hence we will be needed to wrap it up in a single element

const newelement = (

    <div>
        <h1>Hello Coder Army</h1>
        <h2>Maja aaya muje</h2>
    </div>

);

Reactroot.render(newelement);



/*

    const newelement = 

        <div>
            <h1>Hello Coder Army</h1>
            <h2>Maja aaya muje</h2>
        </div>

    Can do like this also but less readable


*/


// const Newelement = (

//     <>
//         <h1>Hello Coder Army</h1>
//         <h2>Maja aaya muje</h2>
//     </>

// );

// // This will also work so that we don't get an extra div

// Reactroot.render(Newelement);



// const Newelement = (

//     <>
//         <h1 id='abc' className="heading">Hello Coder Army</h1>          
//         <h2>Maja aaya muje</h2>
//     </>

// );

// // A difference is spotted as for previous reasons we cannot use class here so we use className

// Reactroot.render(Newelement);


// We can use JS expressions also in JSX


// const names = "Rohit";

// const obj = {
//     age:23,
//     salary:60
// }

// const Newelement = (


//     <>
//         <h1 id='abc' className="heading">Hello Coder Army {names}</h1>          
//         <h2 money = {23}>Maja aaya muje {obj.age}</h2>
//     </>

// );

// Reactroot.render(Newelement);

// Parcel also helps in finding errors as it tells where the error has occurred

// Then after this we can simply use it's id and all to write CSS simple

// Can create our own attribute also

// In JSX wherever we see {} in above like then it means inside that bracket we are entering JS



// const names = "Rohit";

// const obj = {
//     age:23,
//     salary:60
// }

// const obj2 = {
//     color:"pink",
//     backgroundColor:"black",
//     fontSize:"30px"
// }

// const Newelement = (


//     <>
//         <h1 id='abc' className="heading">Hello Coder Army {names}</h1>          
//         <h2 style = {obj2}>Maja aaya muje {obj.age}</h2>
//     </>

// );

// Reactroot.render(Newelement);










// Can also do it like this





const names = "Rohit";

const obj = {
    age:23,
    salary:60
}

// React element (as in the end gives React element only after conversion by babel)

const Newelement = (


    <>
        <h1 id='abc' className="heading">Hello Coder Army {names}</h1>          
        <h2 style = {{color:"pink", backgroundColor:"black", fontSize:"30px"}}>Maja aaya muje {obj.age}</h2>
    </>

);

Reactroot.render(Newelement);

// {{}} double brackets are there as style needs obj here so {} for object and then outside curly bracket there is one more

// curly bracket due to JSX {} <= means writing JS inside it









//                              React Component

// 1. Class based component                         2. Function Based Component



// Class based component  : No need to study as it's old method and rarely used now




// Function Based Component


function greet(){
    return <h1>Aur Bhai Kaisa hai</h1>;
};

const newElement2 = greet();

Reactroot.render(newElement2);


// This is only function based component

const meet = ()=>{
    return <h2>Mera Sab aacha h</h2>
};

const newElement3 = meet();

Reactroot.render(newElement3);


// "Or"

Reactroot.render(greet());


// To execute multiple functions

Reactroot.render(<>{greet()} {meet()}</>);


// "Or"

const newElement4 = <>{newElement2} {newElement3}</>;

Reactroot.render(newElement4);


