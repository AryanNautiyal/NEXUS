



*** AI Agents ***

An artificial intelligence (AI) agent is a system that autonomously performs tasks by designing workflows with available tools.

LLM model can only answer to our questions, it cannot call API for any user 

As we have dicussed also why we shouldn't do API calls with our LLM

And also when we make API calls in response the data that is being sent can be malicious data also which can damage our DB or anything 

So our LLM cannot do CRUD operations or anything 

So with our LLM model we will attach tools (part of code) so combination of this we will call it as AI agent

AI agent = LLM model + Tools

Tools are used to interact with APIs

Like for example some user in Whatsapp messages us regarding something so our Tool will get message from our Whatsapp using API then it will forward it to Gemini or our LLM model then LLM model will send us a response and then our Tool will just send this response as an reply in Whatsapp


So what Rohit Negi does to deliver his lectures onto the website

Code + Image --> Compress then Upload --> Website then Recording --> Upload to Google Drive then Whatsapp --> Ping Editor 

So this is daily task that is done by Rohit Negi so he can make a AI agent which does this whole work for him

So what will happen now is we will give this workflow to LLM model then it will tell all the Tools to do this work then it will be done




So what will our AI Agent do in this small project

Simply getting weather 


<!-- const weather_API = http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=${place}&aqi=yes` -->


<!-- this one maybe expired -->

http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=no

