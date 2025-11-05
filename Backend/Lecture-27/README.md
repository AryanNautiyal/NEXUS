

*** For our own LLM model we need these things ***

        -- Frontend

        -- Backend

        -- API (LLM model)


So we need to learn communication between Backend and LLM model

API key is paid for others but Gemini gives some API for free with limited number of calls




<!-- Copied this code after create project and create API key -->

curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'X-goog-api-key: AIzaSyDJYJbcnX57hrmahTQaiKpeqsXQhyZTv8I' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }'


<!-- AIzaSyDJYJbcnX57hrmahTQaiKpeqsXQhyZTv8I <= API Key -->


Always ask any query you want to ask about API you have bought from someone to that someone's chatbot only

As they know their APIs better than other chat bots




*** So solve long chat history problem ***

There is a DB called Vector DB which stores the data from history in DB and gives summary of history 

In Vector DB data is stored in the form of vector 

