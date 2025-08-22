


// const answers = ["Sachin Tendulkar", "West Indies" , "Sachin Tendulkar" , "264", "Muttiah Muralitharan"];

const answers = {
    answer1: "Sachin Tendulkar",
    answer2: "West Indies" ,
    answer3: "Sachin Tendulkar" ,
    answer4: "264",
    answer5: "Muttiah Muralitharan"};

const form = document.querySelector('form');


form.addEventListener('submit',(event)=>{

    event.preventDefault();

    const data = new FormData(form);

    // const answer = Array.from(data.values());                   // Converted to Array as data.values() give iterator

    // console.log(answer);

    // let result = 0;

    // for(let i=0;i<answers.length;i++)
    // {
    //     if(answers[i] == answer[i])
    //     {
    //         result+=1;
    //     }
    // }






    // New code added -------

    let result = 0;

    for(let [key,value] of data.entries())
    {
        if(value === answers[key])
        {
            result+=1;
        }
    }


    // ------------------------------


    const res = document.getElementById('result');

    res.innerText = `Result: ${result}/5`;

    // form.insertAdjacentElement("afterend", res);                     // No need as already is inside container

    // Can use reset button here


    // If someone doesn't attempt any question then it's problem

    // As it only returns 3 values in backend

    // Therefore we make our original answers in object

});





// Now with this can make any random question in DB and random 5 questions will be display in it





// This is the same code we write in backend as any user can inspect and see our code in frontend i.e html, css and js codes hence we do this in backend

// As a person only needs to debug our code and then they can use it

