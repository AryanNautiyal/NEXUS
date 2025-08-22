

const grandParent = document.getElementById('grandParent');

const parent = document.getElementById('parent');

const child = document.getElementById('child');



// Event bubbling and event capturing



// child.addEventListener('click',()=>{
//     console.log("Child is clicked");
// },false);


// parent.addEventListener('click',()=>{
//     console.log("Parent is clicked");
// },false);


// grandParent.addEventListener('click',()=>{
//     console.log("GrandParent is clicked");
// },false);


// By default our event bubbling is applied

// To change to event capturing

// addEventListener(first_event or operation, callback function, capture {true or false})


// event capturing

// child.addEventListener('click',()=>{
//     console.log("Child is clicked");
// },true);


// parent.addEventListener('click',()=>{
//     console.log("Parent is clicked");
// },true);


// grandParent.addEventListener('click',()=>{
//     console.log("GrandParent is clicked");
// },true);







// Mixing true and false


//  1

// child.addEventListener('click',()=>{
//     console.log("Child is clicked");
// },true);


// parent.addEventListener('click',()=>{
//     console.log("Parent is clicked");
// },false);


// grandParent.addEventListener('click',()=>{
//     console.log("GrandParent is clicked");
// },true);


// In this first child is clicked so it follows capturing so it will wait for it to propagate from outside so grandParent is executed first as it also follows capturing

// Then child is executed as parent is following bubbling so it will wait for event to propagate from inside to child is executed then parent is executed




    //  2

// child.addEventListener('click',()=>{
//     console.log("Child is clicked");
// },false);


// parent.addEventListener('click',()=>{
//     console.log("Parent is clicked");
// },true);


// grandParent.addEventListener('click',()=>{
//     console.log("GrandParent is clicked");
// },false);


// In this when child is clicked as parent has capture so it is executed first then child is executed then grandparent as they have bubble



    // 3

child.addEventListener('click',()=>{
    console.log("Child is clicked");
},false);


parent.addEventListener('click',()=>{
    console.log("Parent is clicked");
},false);


grandParent.addEventListener('click',()=>{
    console.log("GrandParent is clicked");
},true);



// In this grandparent is using capturing so it gets executed first then bubble is formed from child and then parent



// Capture is used in really rare cases mostly bubbling is used



// We can also check who triggered it by doing event.target to check 


// currentTarget returns the event it is from (like if placed in grandparent will return grandparent only)






// Event delegation


// (continued in first.js)