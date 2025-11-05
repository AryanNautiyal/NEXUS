




*** Need of MCP Server ***



MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems.

Using MCP, AI applications like Claude or ChatGPT can connect to data sources (e.g. local files, databases), tools (e.g. search engines, calculators) and workflows (e.g. specialized prompts)—enabling them to access key information and perform tasks.

Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems.


MCP is nothing but is there just to provide context to Gemini or any other AI

MCP only says that how the context is provided to our AI 

It's protocol as like before we saw that to give history to Gemini we need to give it in a proper structure 

Protocol = Rules (that in particular format only we can send history)

So the model fetches data from other sources to get context based on which it generates and gives the output 

As we might see that if we try to fetch weather data it will look from other sources and then will give output 

So if our LLM only searches the web for data then the original code will just be waiting for response from that code and then when the response will be given it will then process and give user the response which might be slower 

And our RAM memory will also be occupied because we have stopped the code which is too big as they have code in GBs 

We cannot daily train our LLM models also as we will be needed to deploy it daily then and during deployment LLM won't answer

So it fetches data from other sources so we won't update in the code as the main code will be paused then 

And if our code stays in RAM forever then it costs us money

So we won't touch LLM code as it's risky




So next what we might think is that to handle it all in backend but it's not possible as user can just ask anything , in any language, with wrong spellings also so not possible


So here comes our MCP in picture 



*** MCP (Model Context Protocol) Server ***

So in MCP server we will be needed to create MCP server and will be needed to code what to do at what point (to search in other sources)

So what we can do is we will use one small LLM to give the user question in a structured format 

Like we will give what user gives us to LLM and then will define it to give it in JSON format like below

{intent:"weather",data:"Delhi"} or {intent:"Google Search",data:"Rohit Negi"} or {intent:"Wikipedia",data:"Narendra Modi"}

So now we can just by looking at the intent and data we can know which API to call and execute 


So now we will give user's question and the data fetched from API both to LLM so the LLM gets the whole context 

So now LLM can respond to questions like what is the weather today in Delhi , etc.


New LLM = New API Key

So if all the API calls to other sources is done in Node.js only then readability will be over and it will be much harder to debug the bug in our code 

So we will just delegate all this work to other server (even talking to our model to get the response we won't put in backend)

As we want clean backend code 

So we will write all the talking to LLM and other sources API calls will be done in MCP server

So we will just delegate all the chatbot related tasks to MCP server

So MCP server will do the same work we did in last lecture

So if we want to keep our MCP server code also clean then we can just make multiple MCP servers

So then in our main MCP server we will have all the function calls like getWeather(), getGoogleSearch(), etc

So if we want to in future change the weather API key we can do that then if we want to switch from google search to Yahoo we can do that as Google Search might be asking more money

So can say we are following Single Responsibility Principle (SRP) and Dependency Inversion Principle (DIP) to make it easier to switch


So sometimes people say the main MCP server is the " MCP Client " as other MCP server are serving the requests made by MCP client 

User can also ask 2 questions or more at once which might require to call 2 or more API




