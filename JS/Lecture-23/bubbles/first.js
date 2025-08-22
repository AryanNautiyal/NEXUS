
// Same can do on document or body

document.body.addEventListener('click',(event)=>{


    const circle = document.createElement('div');

    // circle.className('circle');              // Can use both methods 

    circle.classList.add('circle');

    const msg = [
        "Hi",       // English
        "Hola",     // Spanish
        "Salut",    // French
        "Hallo",    // German
        "Ciao",     // Italian
        "Oi",       // Portuguese
        "Hoi",      // Dutch
        "Hej",      // Swedish
        "Hei",      // Finnish
        "Merhaba"   // Turkish
    ];

    let index = Math.floor((Math.random()*10)+0);

    circle.textContent = msg[index];

    let idx1 = Math.floor((Math.random()*266)+0);

    let idx2 = Math.floor((Math.random()*266)+0);

    let idx3 = Math.floor((Math.random()*266)+0);

    circle.style.backgroundColor = `rgb(${idx1},${idx2},${idx3})`;

    // To make circle at the position where the click is done

    const x = event.clientX;

    const y = event.clientY;

    circle.style.left = `${x-25}px`;                           // This is giving problems as wherever we click it comes kinda below it

    circle.style.top = `${y-25}px`                             // So to solve this problem we subtract 25 px from both as our circle is 50px 

    document.body.appendChild(circle);              // It's creating many div elements so after their use we need to remove them so we use below line

    setTimeout(()=>{
        circle.remove();
    },5000);

});



// We subtracted 25px as box was starting to create from where we click this means that corner of the box was starting from where we clicked 

// So we shifted it 25px up and left to make it centered around the mouse