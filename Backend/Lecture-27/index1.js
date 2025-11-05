

const express = require('express');

const app = express();

const main = require('./ai_chat');


app.use(express.json());


// Can use DB instead of this 

const chatHistory = {};

// User chat history storage

// key = id & value = array

app.post("/ask/ai", async (req,res)=>{

    try
    {
        const {id, message} = req.body;

        // Use same variable name when sending data from body as that from here as without it was giving undefined


        if(!chatHistory[id]){
            chatHistory[id] = []
        }

        // Extracting user history 

        const History = chatHistory[id];


        // History chat + current message so spread History array then included in new array containing new message also

        const promptMessage = [ ...History, {
            role : 'user',
            parts : [{text : message}]
        }];


        const response = await main(message);


        // Storing new chat in history

        History.push({role : 'user', parts : [{text : message}]});

        History.push({role : 'model', parts : [{text : response}]});


        console.log(History);



        res.send(response);

    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }

})




app.listen(4000,()=>{

    console.log("Listening at port 4000");

})



// For chat history we do it in backend as whenever we close the ChatGPT tab then the chats will again appear by default 

// Even when we didn't message and we also need to show chat history also so we cannot handle it in frontend only 

// Also we cannot know how much big the chat history is as bill might be increased so we won't send whole history also

// So therefore backend is preferable 



// So to handle this what we can do is use another LLM model to summarize the reply given by other model so that we can store in history

// As length or tokens will be less



