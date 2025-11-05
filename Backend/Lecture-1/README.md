

Backend will have Node.js , Express , MongoDB




What is Node.js ?


Ans. Runtime environment that runs JS code 


Node.js has V8 Engine inside it

V8 Engine is just a C++ code which can understand JS code


JS code --> V8 Engine --> Machine code

So we don't directly write in C++ although we can but we don't as the length and time required to code is increased

So in backend we will create our own server that serves the request made by users

And we will also need DB also (MongoDB here) 

We don't give frontend direct access to DataBase so we put an intermediate which is server

Server will see request and according to that request will return data from MongoDB



So why we made server in between frontend and DB as without it frontend can easily acess DB 

This is because we don't directly expose our DB as we know our whole frontend code will be directly visible to users

Similarly if we directly expose DB our DB credentials might get exposed

So everyone can get the credentials and can do bad things so hence we keep the credentials in the server 

And frontend access it from server only 

Server code is hidden and not exposed 

In server we also write business logic

Like for example bank puts limit to how much we can withdraw in a day

So if we keep max_limit logic in frontend someone can manipulate it and can obtain like 1 lakh is the limit they manipulated it to 50 lakh and took 40 lakh rupees

Which is why we also keep this logic also in server

Server and DB is backend part only

Server is a JS file that is hosted in some other computer whereas Frontend is something that is hosted in our computer

Before we used to write server in python , java, c++ code

But a developer made it so that we can write server in JS also 

Then Node.js came and what Node.js does is it took the V8 Engine and added some extra properties and due to this now we can do same work in backend that we were doing in browser

Node.js has some extra powers which is Global object 


So we take servers that already understand C++ as our code of V8 Engine is also written in C++ and JS can be understood or converted into C++ using V8 Engine 

So hence we can use JS in backend

So servers which already understood C++ now can just understand JS as we can just write code to understand JS in C++

So we only need to bring node.js which has V8 Engine due to which we can write in JS code too

So server already understood C++ so we just gave them V8 Engine code so that they can understand JS too



