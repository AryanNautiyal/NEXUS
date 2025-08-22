

//  DOM : Document Object Model

document.getElementById('first').innerHTML = 'Kaise ho bhai';       // Can manipulate our page using JS

// Our page is converted into DOM only first so that our JS can interact with it or we can apply JS to our web page

// So our HTML web page is converted into object which is document

// We know how we can manipulate our object

// Our HTML is converted into DOM automatically by our browseer (makes it as an object)

// In hierarchy at the top there is window (inside window there is document) 

// This document contains our HTML files and each and every element is treated like an object in DOM

// Our HTML document contains head and body (all treated as object)

// head has meta & title 

// title has coder Army     (So this is called as text node {Coder army is called text node}) [rest can be called as nodes or object {title is also a node}]

// body contains one div tag

// div tag contains h1 , h2 and ul 

// h1 contains Hello Coder Army (text node) and contains attribute which is considered as a different node (attribute node)

// every single detail is stored as an object only (every single one)

// Then how will an element look like when it's converted into object

//      <h1 id="first" class="header1"> Hello Coder Army</h1>                   let's take this as an example

const obj = {
    id:"first",
    class:'header1',
    innerHTML : 'Hello Coder Army',
    tag: 'h1'
};

// Like this it will appear when it's made an object

obj.innerHTML = "Mein Badiya Hu";

// Done

// Conversion in done automatically so we don't need to make that obj 

// To change id

obj.id = "header2";

// Can also delete object, add object, etc

// Hence we convert our HTML document into DOM

// To access element in the HTML page

// Use console.dir(document);  to get full details of the document

// In JS for class in HTML document we use here className as class already exists in JS to create classes (OOPs)

const obj2 = document.getElementById('first');

obj2.className = "DEM";

// Second method to access elements

const obj3 = document.getElementsByClassName('header1');        // HTML collection here as class name can be same for many elements

        // Use obj[i] to access elements, i>=0

// obj[i] is not exactly an array as there are some elements that cannot be iterated over like normal array

// Later we will learn how we can convert an HTML element into an array (and this is object only not an array)

obj3[0].style.backgroundColor = "pink";         // To change background colour

obj3[0].style.fontSize = "30px";                // To change font size



