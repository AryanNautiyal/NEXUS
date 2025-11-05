


require('dotenv').config();

const {GoogleGenAI} = require('@google/genai');

const ai = new GoogleGenAI({apiKey : process.env.API_GEMINI});


async function main(message)
{
    const response = await ai.models.generateContent({
        model:'gemini-2.5-flash',
        contents : message,
    })

    return response.text;
}


module.exports = main;