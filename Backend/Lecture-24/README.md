


*** Rate Limiter ***



Hacker can damage our API by sending many requests at once 


So in this there will be a token bucket in which there will be fixed amount of tokens 

So whenever user wants to request the server it will take token from token bucket and will then request the server using that token

If many users are requesting then also only fixed amount of user can only request due to token bucket having fixed number of tokens

So then when the request is fulfilled then the user will give back the token to the token bucket so hence stable 

And nobody can try to damage our API in this

So this is our *** token bucket method ***

So this method was a total failure as if our hacker sends 10000 requests and limit is 5000 then all the 5000 requests from hacker

will take the token and go to the server and other users who wants to access or send request to the server cannot send request due to hacker monopolizing the whole server

So our UX is bad in this

So our token bucket solution has failed




*** Next Approach ***



So we can keep track of each users request to solve the problem that was in the token bucket method

like we can do for each users that in 1 hour can do 60 requests

So whenever client requests we store clients information and number of request


So we can keep count of requests for the user that's logged in to our website

But what if someone requests the login page only many times then how can we track as the user hasn't logged in and is sending many requests

So what we will do is we will just use *** IP Address *** to identify user

So how can we take IP of user

You know we have superpower which is req

So with *** req.ip *** we can just easily get user's ip address and keep track of the request count

So here our CN fundamentals comes in handy

So whenever we send message over the internet it will always contain the sender ip and receiver ip address

So whenever someone reuqest the home page or login page of our website they will request it and in that request there will be the sender's ip address


This is the reason why we can access sender's ip through req

So for each user ip address will be different as IP address is unique

So will store ip address then will store the count of request and then will store the time to reset so that the data will be deleted and user can request again (like resetting countdown to 0)

By now I know that it will be stored in Redis DB only

So by this we can safeguard our APIs



*** Extra Protection due to extra constraint ***

So now what if we want user to make 60 requests in 1 hr as max and each request should have 10 sec gap atleast

So what we will do now is store IP , value (count for number of requests), time before reset and time of latest request also

So that if user request at 12:24:05 then we will serve it and save it and then if the user requests again then we will compare the times

let's say it requested after 5 second only so 12:24:10 then the request will be rejected as time gap is 10 sec then when user again requests at 12:24:15 then his request will be served after comparing the time and then checking the value so that it won't exceed the 60/hr limit


So we will get the time in seconds by using Date.now() so will do Date.now()/1000 as Date.now() gives time in milliseconds

So will store our value in Redis like count:time

So how can we split the count and time we can simply use string.split(':'); [str.split()] to be precise (will return strings in an array)

Just then convert to number



*** So this algorithm that we have applied here to apply rate limiter is called fixed window ***

It's called fixed window as request/hr is fixed 



So what problem might occur here as let's take window of 12:00 to 1:00 so if someone sends 59 requests at 12:59 then in just 1 min it can again send 60 request

So a user can do 119 requests in 2 mins which can damage our API or can say it's not healthy for our server


So what we wanted was that if someone requests 59 request at 12:59 then it can only request 1 time till 1:59

So here our sliding window comes in picture


*** So here's our next approach to apply rate limiter that is by sliding window ***



So in this the window slides and increases 

So problem in this one is that it is difficult to implement




(Redis has provided it's solutions so kinda easier)





