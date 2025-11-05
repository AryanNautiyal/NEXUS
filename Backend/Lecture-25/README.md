





*** Rate Limiter using Sliding Window ***


Can use queue here to implement FIFO property 


Now Redis has option of queue so we don't have to make queue

But should we use queue ?

As we will be needed to manually handle push pop operations and will be needed to check manually if someone's time up

And how many times we will have to use await and DB calls 

As if we take an example

let's say client requests at 12, 12:05, 12:25, 12:40, 12:50, 1 so when client requests at 1:50 we will see the window 12:50-1:50

So will remove all one by one that is before 12:50


So we need some kind of automation here


So we will use set here, so in set the values stored will be unique

So we will use sorted set here so that the values are sorted and we can push pop according to the window 

As in set values can be stored randomly also so will use sorted set

And we can insert any element in set like "Rohit" , "a", etc so how will they be sorted now

So they said that as it can store multiple values so it should get score along with each value so that it can sort on the basis of score


Eg : value : "Rohit" | score : 3 

    value : 5 | score : 2

    value : 20 | score : 5

So now it will sort according to score to remove the multiple value sort problem 

value : 5 | score : 2 => value : "Rohit" | score : 3 => value : 20 | score : 5

score can be duplicate as they are used for sorting but values cannot be duplicate


So if we again give value : "Rohit" | score : 6 then it will think that we want to update the score in this so it will just update the score


So speciality of this is that we can use range query for this so if we want to delete values whose score is 3 to 10 we can do that

So we will use IP as the key and the time will be stored (as score) in seconds as we already know (UNIX and 1 Jan 1970) 

So will use range query here to just delete all that have less value than the time in seconds


Eg : 12:40 in seconds is 123445 then 12:56 in seconds is 123566 so we need to delete values before 1:10 in seconds is 123654

So both 12:40 and 12:56 will be deleted

So key : IP address and score : Current time (in seconds)

So now what will be our value, so in value also we will use current time as it will keep on changing and due to this no duplicate value

But in 1 second also we can do many requests so our current time solution will also fail

So we can use Time + count combo to make it unique 

But for time + count we will be needed to make a DB call to get the count value as to how many values are present inside the sorted set in Redis 


So now we will use Math.random() to store random value in it so it will be unqiue

So now we will just use combination of current time + Math.random() value so we will always get unique value so no contradiction in set

Or can do current_time:Math.random()


But it's still not perfect as Math.random() is not random() it uses some initial seed to perform some operations to generate random number and the initial seed is the system clock only

So the probability is high that it might generate same random numbers so value can be repeated here also

So high chance of collision 



So for this reason we will use *** crypto *** library 

As the crypto library random function is really random 








