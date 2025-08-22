

// Created an element

// const element = document.createElement('li');               // Entered which tag to create as parameter

// element.innerHTML = "TS";

// const parent = document.getElementById('root');

// parent.appendChild(element);                        // By this attached to DOM so that it can be shown


// To create multiple li

// function attach(content)
// {
//     const element = document.createElement('li');               

//     element.innerHTML = content;

//     const parent = document.getElementById('root');

//     parent.appendChild(element); 

// //    parent.append("Hello Coder Army");                  // Can append multiple elements with this at once

// };

// attach("TS");

// attach("React");

// attach("Node");



//  **************************************** Text Node ***************************************************


// To create text node (no tag with them)

// const element = document.createTextNode("Hello Coder Army");            // To create text node

// const parent = document.getElementById('root');

// parent.appendChild(element);




//  **************************************** Attribute Node ***************************************************

// const element = document.createAttribute("id");

// element.value = 'first';

// const curr_list = document.querySelector('li');

// curr_list.setAttributeNode(element);

// To access 2nd li

// const parent = document.getElementById('root');

// console.log(parent.children);                                   // To get children of parent then we can use index

// const element = document.createAttribute("id");

// element.value = 'second';

// const curr_list = parent.children[1];

// curr_list.setAttributeNode(element);
 


// Access attribute of an element

// const element = document.getElementById("root");

// console.log(element.getAttribute("class"));


// element.setAttribute("custom" , "20");                          // Custom used here and value for it

// element.removeAttribute("custom");



//  **************************************** Add Nodes to the DOM ***************************************************

// appendChild , append already done


// const parent = document.getElementById("root");

// const element = document.createElement("li");

// element.innerHTML = "TS";

// // parent.prepend(element);                                // Adds the element to the front (pre + append = prepend)

// // parent.append(element);                                 // Adds at the last



// // insertBefore


// const child2 = parent.children[1];

// // parent.insertBefore(element, child2);                       // 1st parameter: what to insert , 2nd parameter: before whom it should be inserted

// parent.replaceChild(element,child2);                            // Replaced HTML child with TS

// const parent = document.getElementById("root");

// parent.innerHTML = "TS";                            // Removes everything inside root and and adds text

// parent.innerHTML += "TS";                               // Adds TS in the last but it won't make it list like

// To make it list like we can do this

// parent.innerHTML += "<li>TS</li>";         

// const element = document.createElement("div");

// element.innerHTML = "Hello Coder Army";

// parent.insertAdjacentElement("beforebegin" , element);              // Adds element before beginning (before begin) (parent is root so according to that it places before ul)

// parent.insertAdjacentElement("afterend" , element);                     // Adds element after ending (after end) (parent is root so according to that it places after ul ends)

// parent.insertAdjacentElement("afterbegin" , element);                   // afterbegin makes it his first child (parent is root so according to that it places inside ul at 1st position)

// parent.insertAdjacentElement("beforeend" , element);                    // beforeend makes it his last child (parent is root so according to that it places inside ul at last position)



// To remove a child or deleting a node

// document.querySelector('li').remove();

// Or can also do this in 2 steps

// const element = document.querySelector('li');

// element.remove();

const parent = document.getElementById("root");

const element = document.querySelector('li');

parent.removeChild(element);                        // Removed it