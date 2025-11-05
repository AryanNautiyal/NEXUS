

import React from "react";

import ReactDOM from "react-dom/client";


// So we use capital 'f' in function in React but there is nowhere written that we need to 

// Even code before just ran perfectly fine

const element1 = <h1>Hello Coder Army</h1>;

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(element1);


// So we cannot write anything inside {} in JSX



// For example



// function greet(name){
//     return <h2>Ram Ram Bhaiya Ji {let x = 2;}</h2>
// };



// This gives error

// JSX allows JS expressions but it doesn't allow JS statements

// Expression are that gives some output or gives result whereas statements are like for example let x = 2;

// statements like just mean nothing


// Result string number array is ok but object means nothing but obj.name does

// Example of statement


// if(x>5)
// {
//     console.log("Hello Ji");            // Doesn't give anything as result
// }



const arr = [20,40, "Rohit", 10];


function reet(){
    return <h2>Ram Ram Bhaiya Ji {arr}</h2>
};

Reactroot.render(reet());

// Takes out element one by one and renders it



function greet(name){
    return <h2>Ram Ram Bhaiya Ji {name}</h2>
};

const element2 = greet("Mohan");

Reactroot.render(greet("Rohit"));

Reactroot.render(element2);

// const element3 = <greet/>                           // This is JSX format to call the function (self closing that's why /)

// But it doesn't work as JSX rule states that first letter of the function should be capital 

// That's why that guy was saying in React we use first letter capital of function

// Because of the JSX rule and JSX isn't part of react so please it's JSX rule only


function Greet(){

    return <h2>Ram Ram Bhaiya Ji</h2>

};


const element3 = <Greet/>;

Reactroot.render(element3);


// Why was this rule made like this at all html tags have small letters so if it sees first letter capital in a tag

// It can instantly know that it's user defined tag and it's rule of JSX



// So now we need to learn how can we pass argument in this




function Greeet(props){                         // props is an object (we can name it anything)

    return <h2>Ram Ram Bhaiya Ji {props.name} {props.age}</h2>

};


const element4 = <Greeet name="Rohit" age="23" />;

// We just need to make this similar to HTML only

// Like how in react the whole tag is stored in object like in DOM too 

// Same is here as name and age are in key-value pair hence they are stored in object

Reactroot.render(element4);


// So here our props will look like


/*


props = {
    name:"Rohit Negi",
    age:"23"
};


*/




