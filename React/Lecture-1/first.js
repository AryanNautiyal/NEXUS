

// React is JS library


// Create element through JS



// const header1 = document.createElement('h1');

// header1.innerText = "Hello Coder Army";

// header1.style.backgroundColor = "lightblue";

// header1.style.fontSize = "30px";

// header1.style.color = "white";

// const root = document.getElementById('root');

// root.append(header1);



// const header2 = document.createElement('h2');

// header2.innerText = "Kaise ho app sabh log";

// header2.style.backgroundColor = "black";

// header2.style.fontSize = "25px";

// header2.style.color = "white";

// root.append(header2);

// So this work is tiring so we will make a function for it 


// const React = {
//     createElement: function(tag,styles,children){
//         const element = document.createElement(tag);

//         if(typeof(children) === 'object'){                  // Arrays are also object in JS ;-;

//             for(let val of children)
//             {
//                 element.append(val);
//             }

//         }
//         else{

//             element.innerText = children;

//         }

//         for(let key in styles)
//         {
//             element.style[key] = styles[key];
//         }

//         return element;

//     }
// };

// const ReactDOM = {
//     render: function(element,root){
//         root.append(element);
//     }
// }


// const header1 = React.createElement('h1',{fontSize:"30px", backgroundColor:"blue",color:'white'},"Hello Coder Army");

// const header2 = React.createElement('h2',{fontSize:"25px", backgroundColor:"black",color:'white'},"Kaise ho aap sab log");

// const root = document.getElementById('root');

// ReactDOM.render(header1,document.getElementById('root'));

// ReactDOM.render(header2,document.getElementById('root'));


// // To create unordered list

// const li1 = React.createElement('li',{},"HTML");

// const li2 = React.createElement('li',{},"CSS");

// const li3 = React.createElement('li',{},"JS");

// const UL = React.createElement('ul',{fontSize:"30px", backgroundColor:"blue",color:'white'},[li1,li2,li3]);

// ReactDOM.render(UL,document.getElementById('root'));


// Here React and ReactDOM are objects


// This is React only so whatever code we are writing is already written in React library




















// ----------------------------------------------------------------------------------------------------


// React and ReactDOM are object of JS

// Why React and ReactDOM are written in different files ?

// React is not only used with web browser but it is also used with mobile apps , etc (with React Native)

// In mobile app there is no html files so their way of DOM manipulation is different

// So they have their own React Native environment hence kept it different as they don't need ReactDOM there








