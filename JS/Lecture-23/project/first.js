

const button = document.querySelector('button');

button.addEventListener('click', ()=>{

    // Read the data

    const input1 = document.getElementById('first');

    const number1 = Number(input1.value);                               // Data from html page is given in string so will be needed to convert it into number

    const input2 = document.getElementById('second');

    const number2 = Number(input2.value);


    // Output the result

    if(isNaN(number1) || isNaN(number2))
    {
        return "Error has occurred";                                    // Done this like if in case from our backend the string couldn't be converted into number then we display this
    }

    const res = number1 + number2;

    // document.getElementById('result').innerHTML += String(res);             // Didn't use it as then the previous result was also staying in the screen

    document.getElementById('result').innerHTML = "Result: " + String(res);



});


// Extra on my own as tired to click submit

document.addEventListener('keydown', (event)=>{

    if(event.key == 'Enter')
    {

        // Read the data

        const input1 = document.getElementById('first');

        const number1 = Number(input1.value);                               

        const input2 = document.getElementById('second');

        const number2 = Number(input2.value);


        // Output the result

        const res = number1 + number2;          

        document.getElementById('result').innerHTML = "Result: " + String(res);

        // Can use textContent here also as innerHTML also shows the tags

    }

});
