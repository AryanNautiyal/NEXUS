


require('dotenv').config();

const readlineSync = require('readline-sync');




const {GoogleGenAI} = require('@google/genai');


const ConversationHistory = [];


const ai = new GoogleGenAI({apiKey: process.env.API_GEMINI});


async function main(){

    const response = await ai.models.generateContent({
        model : 'gemini-2.5-flash',
        contents : ConversationHistory
    })

    return response.text;
}



// Weather data Tool

async function getWeather(location) {

    const weatherInfo = [];

    for(const {city,date} of location)
    {

        if(date.toLowerCase() === 'today')
        {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4d74c5add83d448a96d90106250111&q=${city}&aqi=no`);

            const data = await response.json();

            weatherInfo.push(data);
        }
        else
        {

            const response = await fetch(`http://api.weatherapi.com/v1/future.json?key=4d74c5add83d448a96d90106250111&q=${city}&dt=${date}`);

            const data = await response.json();

            weatherInfo.push(data);

        }
    }

    return weatherInfo;
    
}



async function chatting() {


// To take input from terminal used readlineSync

const question = readlineSync.question("How can I assist you today ? \n");


//  To tell LLM that in return of this question we want location array in JS Object format or just send in JSON format

// Then will give weather data to LLM and will ask it to send it in response 



    const prompt = `

    You are an AI Agent, who will respond to me in JSON format only.
    Analyze the user query and try to fetch city and date details from it .
    Date format should be in (yyyy-month-date) if user ask for future weather.
    If user ask for today weather, mark date as 'today'.
    To fetch weather details, I already have some function which can fetch the weather details for me,


    if you need weather information, use the below format

    JSON format should look like below example 

    {
    "weather_details_needed" : true,
    "location" : [{"city" : "mumbai", "date" : "today"}, {"city" : "noida", "date" : "2025-12-01"}]
    }

    Only give the JSON data don't give ''' and json in start and end in the return

    Once you have the weather report details, respond me in JSON format only.

    {
    "weather_details_needed" : false,
    "weather_report" : "Bhai Delhi ka mausam toh badiya hai, 18 degree temperature hai, ghar pe pakode bana lo 
    }

    User asked this question : ${question}

    Strictly follow JSON format, respond only in JSON format

    `

    ConversationHistory.push({
        role:"user",
        parts:[{text : prompt}]
    })


    while(true)
    {
        const response = await main();

        // console.log(response);

        const data = JSON.parse(response);

        // console.log(data)

        ConversationHistory.push({
            role:"model",
            parts:[{text : response}]
        })


        if(!data.weather_details_needed)
        {
            console.log(data.weather_report);
            break;
        }

        const weatherInformation = await getWeather(data.location);

        // console.log(weatherInformation);

        const weatherInfo = JSON.stringify(weatherInformation);

        ConversationHistory.push({
            role : "user",
            parts : [{text : `This is the weather report I have fetched for you return me the weather report for this in the format specified above with some extra details and suggestions ${weatherInfo}`}]     // In text it always expect text or something so don't send JS Object in this 
        })
        

    }

}



chatting();



/*

```json
{
  "weather_details_needed": true,
  "location": [
    {
      "city": "delhi",
      "date": "today"
    },
    {
      "city": "mumbai",
      "date": "today"
    },
    {
      "city": "noida",
      "date": "today"
    }
  ]
}
```

So it returns this which is not in JSON so we will be needed to convert this 

So to remove use this

response = response.trim();             // Because at the end of the output blank space was coming due to which the below line was not working

response = response.replace(/^```json\s*|```$/g, '').trim();




*/



// Will be needed to tell LLM current date to get 20 din baad waali date as they take the date on which they were trained