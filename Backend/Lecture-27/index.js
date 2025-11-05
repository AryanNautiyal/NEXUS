
// require('dotenv').config();

// const {GoogleGenAI} = require('@google/genai');

// const ai = new GoogleGenAI({apiKey: process.env.API_GEMINI});

// // GoogleGenAI is class as new is used to create an instance of this class

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "How are you",
//   });
//   console.log(response.text);
// }

// main();






// Inside contents we can send history of our chat inside array with 2 roles user means us and model means the reply model gave


/*


    [
        {
            role : "user",
            parts : [{"Hello, How are you"}]
        },
        {
            role : "model",
            parts: [{"I'm doing well, thank you for asking! How can I help you today?"}]
        },
        {
            role : "user",
            parts : "So tell me about AI now"
        }
    ]

*/



require('dotenv').config();

const {GoogleGenAI} = require('@google/genai');

const ai = new GoogleGenAI({apiKey: process.env.API_GEMINI});



async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
        {
            role : "user",
            parts : [{text : "Hello, How are you"}]
        },
        {
            role : "model",
            parts: [{text : "I'm doing well, thank you for asking! How can I help you today?"}]
        },
        {
            role : "user",
            parts : [{text : "So tell me about AI now"}]
        }
    ],
  });
  console.log(response.text);
}

main();