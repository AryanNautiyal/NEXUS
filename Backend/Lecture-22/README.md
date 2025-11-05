

*** JWT is called a "token" because it acts as a bearer token—a digital credential that a user's client can present to a server to prove their identity without the need for repeated logins. It functions like a passport or a digital key, containing a digitally signed JSON object with claims about the user, allowing the server to trust the information inside without needing to look up the user in a database. ***



Even with same payload and all JWT creates different tokens everytime as it additionally by itself adds the field iat 

iat is the time of creation of the token which then in hashcode differs from the original one and hence different token is generated

when encrypted with same secret key


*** Redis ***

So Redis is a DB

Advantage of Redis is that it is very fast 

So let's say MongoDB takes 300-400 milliseconds to answer any query then with Redis we can do it in microseconds 


*** So now we will think how it can do that ? ***

So if we think basically MongoDB stores data in SSD or secondary storage 

And secondary memory is slow so operations are slow in there like to read, write , etc

So MongoDB brings data from secondary memory to RAM and then performs operations on it and then stores it back in secondary memory



Whereas Redis is only using RAM 

So Redis is " In-Memory DB "

So all the data is kept in RAM so that it can answer very quickly 

So in Redis we won't store any data that we need to store permanently (as we already know that RAM is volatile)

So like let's say the token validity is just 30 mins so we need to only store it for 30 mins only in Redis then we can delete it 

So Redis is better as Redis can handle it 

(This doesn't mean MongoDB is not needed, the usecase of Redis is different)

So Redis is only used to hold temporary data

This doens't mean that Redis doesn't have secondary memory (storage system doesn't have secondary memory {not possible})

Redis does have secondary memory as a backup so it stores copy of data in RAM to secondary memory as a backup so that if server fails or anything then the data is not lost that was stored at that instant 

So Redis is a DBMS 



*** People think that in-memory is in Node.js server only but it's not the Redis is separate ***

We can keep Redis in our Node.js server also but a scalability issue rises as for large tokens data the RAM can be full so therefore no backend operations cannot be performed then 


So we will keep Redis in different server and Node.js in different server

So as Redis is using RAM so we can see that to increase storage capacity for Redis the cost will be more than MongoDB


Different usecase of Redis is that if user goes to our website homepage and then again and again refreshes the website so the UX will be bad as for each refresh a DB call will be done to bring data to show to frontend

So we can use Redis here to prevent many DB calls

So when user goes to home page what it does it with Redis backend send requests to DB to get data then data is stored in Redis also as backup and then will show the user the data 

So if the user again refreshes then server won't make a DB call again and it will just take data from Redis and will just show it to user


So we can say that we can use Redis as a " Cache " 

So just like in MongoDB case Redis is similar it will get multiple servers also and they will manage synchronization (as in NoSQL consistency is there after some latency as we don't need consistency instantly in this case)




