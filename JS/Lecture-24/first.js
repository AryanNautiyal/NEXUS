


// const red = document.getElementById('red');

// const blue = document.getElementById('blue');

// const orange = document.getElementById('orange');

// const green = document.getElementById('green');

// const purple = document.getElementById('purple');

// const body = document.body;

// red.addEventListener('click',()=>{

//     body.style.backgroundColor = 'red';

// })

// blue.addEventListener('click',()=>{

//     body.style.backgroundColor = 'blue';

// })

// green.addEventListener('click',()=>{

//     body.style.backgroundColor = 'green';

// })

// orange.addEventListener('click',()=>{

//     body.style.backgroundColor = 'orange';

// })

// purple.addEventListener('click',()=>{

//     body.style.backgroundColor = 'purple';

// })
















// Optimizing above code




// const button = document.querySelectorAll('button');

// const body = document.body;

// console.log(button);

// button.forEach((button) => {

//     button.addEventListener('click', ()=>{
//         body.style.backgroundColor = button.id;
//     });
    
// });

// But in this also there's problem of optimization as many eventlistener will be created there and they will occupy memory

// Task becomes slow and memory consumption is high in case there are too many buttons




// How to make this fast (event bubbling & event capturing is used)






// Event bubbling

/*

    If we have 3 buttons grand parent button is outermost button, inside it is parent button and inside parent button is child button

    So if we add EventListener to all 3 buttons then if we click child button then child button event is activated but parent and grandparent event is also activated

    As child button is inside them so due to this although we thought only child event will be activated but all 3 were activated

    EventListener actives if someone clicks somewhere inside them (given operation is click)

    So who will be executed first in this and order of execution in this?

    So here first child will be executed then parent will be executed and then at last grandparent will be executed as 

    EventListener propagates towards outside (from child element to root element)


    This is called as event bubbling


    Opposite to this is event capturing 

    In event capturing if child is clicked then first grandparent is executed then after that parent is executed then at last child is executed



*/


/*

    This was because before some browser used to follow event bubbling and some followed event capturing 

    So due to this they kept both the methods


    So how will we decide when to use which one?

            -- This is decided by the property given in our eventlistener only


*/







// Event delegation



// Instead of making many event listener we will addEventLinstener to root which is their parent




// const root = document.getElementById('root');

// root.addEventListener('click',(event)=>{

//     document.body.style.backgroundColor = event.target.id;

// });

// Now when any button is clicked it goes to parent also due to event bubbling due to this by target we can find who triggered them and just use them

// This is called as event delegation

// Instead of giving every button an event we delegated it to their parent as due to bubbling their parent will know who triggered it and it will reach parent also

// Due to this too optimized code




// Addition added h1


// Due to h1 it makes it see like if h1 is clicked it resets it to black 


// To solve this we use this



const root = document.getElementById('root');

root.addEventListener('click',(event)=>{

    if(event.target.tagName == 'BUTTON')                    // Check spelling using console by console.log(event.target.tagName);
    {
        document.body.style.backgroundColor = event.target.id;
    }

});





// event.stopPropagation() is used to stop the bubbling and capturing (you know naming makes sense too as stopPropagation = stop propagation of event)



// Read freecodecamp.org documents for this (if revising)


