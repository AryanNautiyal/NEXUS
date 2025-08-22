const questionBank = [
  {
    question: "Who is the only cricketer to score 100 international centuries?",
    options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Jacques Kallis"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the ICC Cricket World Cup in 2019?",
    options: ["India", "Australia", "England", "New Zealand"],
    answer: "England"
  },
  {
    question: "Who holds the record for the fastest century in ODIs?",
    options: ["AB de Villiers", "Chris Gayle", "Shahid Afridi", "Virender Sehwag"],
    answer: "AB de Villiers"
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "What is the maximum number of overs allowed per bowler in a standard ODI match?",
    options: ["5", "10", "15", "20"],
    answer: "10"
  },
  {
    question: "Who was the captain of India when they won the 2011 World Cup?",
    options: ["Virat Kohli", "MS Dhoni", "Rahul Dravid", "Sourav Ganguly"],
    answer: "MS Dhoni"
  },
  {
    question: "Which cricketer is known as 'The Wall'?",
    options: ["MS Dhoni", "Rahul Dravid", "Sourav Ganguly", "Sunil Gavaskar"],
    answer: "Rahul Dravid"
  },
  {
    question: "Who was the first cricketer to take 10 wickets in a Test match innings?",
    options: ["Anil Kumble", "Jim Laker", "Shane Warne", "Muttiah Muralitharan"],
    answer: "Jim Laker"
  },
  {
    question: "Which country has won the most ICC Cricket World Cups (50 overs)?",
    options: ["India", "Australia", "West Indies", "England"],
    answer: "Australia"
  },
  {
    question: "In which year was the first T20 World Cup played?",
    options: ["2005", "2007", "2009", "2010"],
    answer: "2007"
  },
  {
    question: "Who hit six sixes in an over in the 2007 T20 World Cup?",
    options: ["MS Dhoni", "Yuvraj Singh", "Chris Gayle", "Kevin Pietersen"],
    answer: "Yuvraj Singh"
  },
  {
    question: "Which Indian bowler took a hat-trick in a World Cup match?",
    options: ["Zaheer Khan", "Jasprit Bumrah", "Mohammed Shami", "Chetan Sharma"],
    answer: "Chetan Sharma"
  },
  {
    question: "Who is the leading run-scorer in T20 Internationals as of 2024?",
    options: ["Rohit Sharma", "Virat Kohli", "Babar Azam", "David Warner"],
    answer: "Virat Kohli"
  },
  {
    question: "Which cricketer has hit the most sixes in international cricket?",
    options: ["Rohit Sharma", "Chris Gayle", "MS Dhoni", "AB de Villiers"],
    answer: "Rohit Sharma"
  },
  {
    question: "Which stadium is known as the 'Home of Cricket'?",
    options: ["MCG", "Lords", "Eden Gardens", "Old Trafford"],
    answer: "Lords"
  },
  {
    question: "Who is the only Indian to score a triple century in Test cricket?",
    options: ["Virender Sehwag", "Sachin Tendulkar", "Sunil Gavaskar", "VVS Laxman"],
    answer: "Virender Sehwag"
  },
  {
    question: "What is the term for a score of zero in cricket?",
    options: ["Duck", "Goose", "Blob", "Dot"],
    answer: "Duck"
  },
  {
    question: "Which team did India defeat in the final of the 2007 T20 World Cup?",
    options: ["Pakistan", "Australia", "South Africa", "Sri Lanka"],
    answer: "Pakistan"
  },
  {
    question: "Who was the first captain to win all three ICC trophies (T20, ODI, Champions Trophy)?",
    options: ["MS Dhoni", "Ricky Ponting", "Eoin Morgan", "Kumar Sangakkara"],
    answer: "MS Dhoni"
  },
  {
    question: "Which country hosted the 2023 ICC ODI World Cup?",
    options: ["India", "England", "Australia", "South Africa"],
    answer: "India"
  }
];



// This is not an optimized approach to it as we have small dataset here but what if the dataset was large then we would be needed to select random again and again and website might become slow


// function RandomQuestion(){

//     const answer = [];

//     const data = new Set();                                 // To make sure there's no repetition 

//     while(data.size != 5)
//     {
//         const index = Math.floor((Math.random()*20)+0);

//         data.add(questionBank[index]);
//     }


//     // convert set into array

//     return [...data];
// }













// Then if we use arr.sort() in JS it doesn't work properly as for arr = [10,20,100] it returns [10,100,20]

// So in sort function there's a comparator operator if we don't enter comparator function then it converts all to strings and then compares it

// So for example '20' is compared with '100' it sees 1st element of string as 2>1 therefore it assumes '20' > '100' therefore it sorts it like that

// Then to solve this we will use (Dsa is applied here discussed in next lecture)


// Next lecture starts here -----------------------------------------


// Need to give callback function inside sort()

// sort(()=>{})                                     So it passes 2 elements in () as 2 elements are compared at a time


// If we return any negative value inside the {} then it means that a will come first then b 

// If we return positive value then it means b will come first then a

// And if we return 0 then it means the order will the remain the same


// So according to us we can apply logic here (here we used a-b as if it's positive a>b and if it's negative then b>a)

// Example 10-20 where a = 10 and b = 20 it return negative value so a will come first then b

// If we assume b=10 & a = 20 then it returns positive value (a-b) so b will come first then a



// Time complexity is nlogn here which is worse than above one so to improve it

function RandomQuestion(){

    // So instead of selecting random we will just randomly sort the array

    questionBank.sort(()=>Math.random()-0.5);                   // Subtracted -0.5 as Math.random() gives 0-1 values so if we subtract -0.5 then it returns positive values and negative values

    // we only need Math.random() to randomly sort it to make it 50-50 between positive and negative values we subtracted -0.5

    return questionBank.splice(0,5);
    
};





// ***************************** Fishe algorithm (browse on net for it) [O(n) time complexity] *************************************************




// ********************************************** Another approach *************************************************




/*

        First we select any random using Math.random() then we replace it with the last element in the array

        So that we don't pick it again

        Then we will subtract 1 from the total number of elements so that like in above case it's 20 so will make it 19

        Then we will repeat this process until we get 5 questions (in this case we need 5 only)

*/


// Here time complexity depends on number of questions we want to select

function RandomQuestion(){

    const arr = [];

    let length = questionBank.length;

    for(let i=0;i<5;i++)
    {
      const index = Math.floor(Math.random()*length);

      arr.push(questionBank[index]);


      // swap

      [questionBank[index],questionBank[length-1]] = [questionBank[length-1], questionBank[index]];

      length -= 1;
    }

    return arr;
}






// ---------------------------------------------------------------------- The end of this project





// select the form and insert all the elements into it

const form = document.querySelector('form');

const problem = RandomQuestion();


const original_answers = {};


problem.forEach((obj,index)=>{

    const div_element = document.createElement('div');

    div_element.className = "question";

    const para = document.createElement('p');

    para.textContent = `${index+1}. ${obj['question']}`;

    div_element.appendChild(para);

    // Storing correct answers too for calculating result

    original_answers[`q${index+1}`] = obj['answer'];

    // create 4 options

    obj['options'].forEach((data)=>{

        const label = document.createElement('label');

        const input = document.createElement('input');

        input.type = 'radio';

        input.name = `q${index+1}`;

        input.value = data;

        label.appendChild(input);

        label.appendChild(document.createTextNode(data));

        div_element.appendChild(label);

        div_element.appendChild(document.createElement('br'));

    });

    form.appendChild(div_element);

});



const button = document.createElement('button');

button.type = 'submit';

button.className = 'submit-btn';

button.textContent = "Submit";


form.append(button);









// Used this so that even if we want to display 30 or 100 questions we can just do by this and there's no need to create 100 html tags for it




form.addEventListener('submit',(event)=>{

    event.preventDefault();

    const data = new FormData(form);

    let result = 0;

    for(let [key,value] of data.entries())
    {
        if(value === original_answers[key])
        {
            result+=1;
        }
    }


    const res = document.getElementById('result');

    res.innerText = `Result: ${result}/5`;

});



