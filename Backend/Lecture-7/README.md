

*** JSON vs JS Object ***


Our JSON data is in string format but our JS Object is object 

Or can say our JSON data is in text based format 

So not everyone can understand our JS Object and also our backend might be in different language like python, java, etc.

So if we send JS Object to our backend it won't understand it so we need some universal format that everyone can understand like XML, JSON, etc


So our JSON data

{
    name : "Rohit",
    age : 30
}

This is invalid in JSON whereas it is valid in JS Object as it by default makes them string

So it should only be like this in JSON

{
    "name" : "Rohit",
    "age" : 30
}



We also cannot put extra comma in JSON whereas in JS Object we can 

{
    "name" : "Rohit",
    "age" : 30,
}

We can also send array in JSON data also

[10,20,30]


Can use string array, number, null, object in JSON

{
    key : value
}

key should be string type and value can be anything but cannot be function or undefined

Whereas in JS Object can be anything


So in JSON we can send data in 2 formats only either in array format '[]' or in object format '{}'


So our data goes in string format in JSON as every language can understand string 

So {"name":"Rohit", "age":30}   -->     '{"name":"Rohit", "age":30}'

Now every language can understand this 

So now the data can be easily converted to bits (0/1 form) so that it can send whereas it is difficult  to convert JS Object to bits

JS Object has many properties attached to it so it is difficult to convert JS Object


*** Parser ***

So we need something that converts JSON to either JS Object or something in python or java or c++

So the thing that converts the JSON to respective thing we need is parser

Like here the parser converts the JSON to JS Object

body : JSON.stringify({name : 'John', age : 30})

Hence here the JSON.stringify is used to convert the JS Object to JSON


*** Parser only converts JSON --> Usable Object ***

So app.use(express.json());

Here we have used express.json() as a parser to convert JSON to Usable Object

*** So parser converts the number also to string as to avoid the confusion as to if the user has given number or string ***


'{name : 'John', age : 30}' So here for safety it converts the 30 to '30' as it doesn't have information about whether the age is given in number or string


<!-- Switched to index.js -->


So we can see in our frontend.js file we have used headers so the headers contain Content-Type which helps us to determine that the data we are receiving is in which format 

So can say headers contain metadata 



But in the end postman helps in api testing if we haven't build the frontend yet so when we are building frontend too then in frontend we will use frontend.js code to send api request to our server


