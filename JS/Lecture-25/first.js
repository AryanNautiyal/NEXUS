


const form = document.querySelector('form');

// form.addEventListener('input',(event)=>{

//     // console.log(event);
//     // console.log(event.target);                          // To see bubbling
//     // console.log(event.target.id);    
    
    
//     console.log(event.target.value);                    // Every letter we enter it triggers the event due to input


// });



// form.addEventListener('change',(event)=>{
    
    
//     console.log(event.target.value);                        // This event is triggered when there is change in input box 

//                         // like when we enter details it doesn't trigger anything as soon as our input box is deselected it triggers the event


//         // Only triggers if there is change

// });



// form.addEventListener('focus',(event)=>{
    
    
//     console.log(event.target.value);                                // focus doesn't use bubbling so we need to implement it to element directly         


//                                                                     // or we can use focusin as focusin follows bubbling
// });


// form.addEventListener('focusin',(event)=>{
    
    
//     console.log(event.target.value);                // when we focus on something then it triggers the event 


//   // Not sure about it's use as we first need to enter text focus to another input and then again click the input box to focus on it so that it takes the input text

// });



// form.addEventListener('focusout',(event)=>{
    
    
//     console.log(event.target.value);                // Triggers event when we focus out or select something other than the input box we selected                   


// });



// form.addEventListener('click',(event)=>{
    
    
//     console.log(event.target.value);                                // Triggers event whenever we click on forms

// });


// form.addEventListener('dbclick',(event)=>{
    
    
//     console.log(event.target.value);                                // Triggers event whenever we click on forms

                    // Will explain this later not working for now
// });


// form.addEventListener('submit',(event)=>{
    
    
//     console.log(event.target.value);                                // Triggered when form is submitted & everytime we submit the page is refreshed

//     console.log("Form is submitted");                               // In settings enable preserve log to see this as page is refreshed so it disappears fast without it

// });


// form.addEventListener('reset',(event)=>{
    
    
//     console.log(event.target.value);                                // It resets all the values in the form so therefore we need to make a button whose type = "reset"

// });


// form.addEventListener('submit',(event)=>{

//     event.preventDefault();                             // So that page doesn't refresh everytime we submit the form (or do not follow his default behaviour)

//     const first = document.getElementById('first');

//     console.log(first.value);


//     const second = document.getElementById('second');

//     console.log(second.value);


//     const third = document.getElementById('third');

//     console.log(third.value);


//     // Now we can print result according to our own

//     const result = document.getElementById("result");

//     result.innerText = `${first.value} ${second.value} is a good boy`;

//     document.body.append(result);

// });













// Optimized method (if we have 100 input fields)




form.addEventListener('submit',(event)=>{

    event.preventDefault();                             // So that page doesn't refresh everytime we submit the form (or do not follow his default behaviour)

    
    const data = new FormData(form);                // Stores data in key value pair

    console.log(data);

    console.log(data.keys());                            // With this we get iterator to iterate over keys

    console.log(data.values());                         // Same for values

    // Can use for of loop or can convert it to Array then iterate over it

    // Can use entries also 

    console.log(data.entries);          // Just destructure it then use key and values


    // Now we can print result according to our own

    const result = document.getElementById("result");

    result.innerText = `${first.value} ${second.value} is a good boy`;

    document.body.append(result);

});




