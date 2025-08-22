

// const timer = document.getElementById('root');

// function timing(){

//     const now = new Date();

//     const IndianTime = now.toLocaleTimeString();

//     timer.innerHTML = IndianTime;
// };


// // while(true)                     // Due to this our code will crash as it will call it too many times so instead of that we use this
// // timing();


// setInterval(timing,1000);


// timer.style.fontSize = "200px";

// timer.style.display = "flex";

// timer.style.justifyContent = "center";

// timer.style.alignItems = "center";

// timer.style.height = "100vh";

// timer.style.width = "100vw";

// To make timer count go up without refreshing 






// CSS selector

const id = document.querySelector('#first');                           // Can select anything in this like id class tagName etc

// id.innerHTML = "Hello Money";

const id2 = document.querySelector('.header2');                     // querySelector() returns the first element that matches the details

id2.style.backgroundColor = "pink";

// To get all of them in the class use querySelectorAll()

const obj = document.querySelectorAll('.header1');              // Can iterate over this node list by normal for loop, for of loop, forEach()

// To convert nodelist to array

// Array.from(obj);


let obj1 = document.querySelectorAll('li');                             // Gives all the li in the document

let obj2 = document.querySelector('li');                              // Same as below gives one li and first one

let obj3 = document.querySelector('ul li');                         // Gives only 1 li inside ul and gives first one only

let obj4 = document.querySelectorAll('ul li');                      // Gives all li inside ul in nodelist form

let obj5 = document.querySelectorAll('ul>li');                      // Same as above




// ********************************************************************************



const obj6 = document.getElementsByTagName('h1');                       // Returns HTMLCollection (Not exactly an array)

const obj7 = document.getElementsByTagName('li');

// console.log(obj7);

for(let i=0;i<obj7.length;i++)
{
    obj7[i].style.color = "black";
}


for(let val of obj7)
{
    val.style.color = "red";
}


// To apply forEach() to obj7 as it's not an array

Array.from(obj7);

Array.from(obj7).forEach((val)=> {
    val.style.fontSize = "30px";
});


// ********************************************************************************

const list = document.querySelector('li');

// To find it's immediate parent

let obj8 = list.parentElement;         // We get it's parent

console.log(obj8);

let obj9 = list.parentNode;         // We get it's parent

console.log(obj9);

// Difference between parentNode and parentElement


const par = document.querySelector('ul');

console.log(par);

console.log(par.childNodes);                        // Gives nodelist 

// It gives text and list so we had 4 elements (li) and we also get text (5 times) and the text is due to space between li tags

console.log(par.children);                          // Gives HTML collection

// So with this we can see difference that HTMLCollection only contains HTML elements whereas NodeList contains the text too (space)



// ********************************************************************************



console.log(par.firstChild);                    // Gives text as in nodelist first is text 

console.log(par.firstElementChild);             // Gives element

console.log(par.lastChild);              

console.log(par.lastElementChild);              // For last child




// ********************************************************************************


console.log(par.nextSibling);

console.log(par.previousSibling);                   // As you know can give text also

console.log(par.nextElementSibling);                    // Gives element only

console.log(par.previousElementSibling);






// innerHTML
// textContent
// innerText


console.log(document.getElementById('first').innerHTML);

console.log(document.getElementById('first').textContent);

console.log(document.getElementById('first').innerText);


// All 3 giving text inside tag

// Difference between 3

// We added strong tag to Army

// So we see that innerHTML also showed the strong tag also along with the text whereas textContent and innerText didn't

// So anything written inside tag will be given by innerHTML

// Rest 2 give only text inside 


// Now we gave style display : none;

// Now we see that textContent gives the whole text 'Hello Coder Army' whereas the innerText  only gives 'Hello Coder'

// Hence we can say that textContent only shows all the text inside the tag while the innerText only shows the text inside the tag that is visible to user


