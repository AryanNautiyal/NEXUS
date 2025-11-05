



*** SQL ***

SQL DB are not feasible for social media data 

As millions of data is generated per instance

Nested comments, live stream, etc


*** So what all problems can we face by using SQL DB in social media ***

So if we have like some data we are storing for each photo and the photo uploaded by users is also too many

So let's assume we aren't saving the comments for now so if we add new feature let's say dislike button

Then we will be needed to update all the previous photos data also to make or keep tabs on their dislike count

So it's really a pain to add new feature in SQL DB

So photos number will be very high so initially we will have to make each value in column 0 that's very problematic

It will also take up a lot of space also

In SSD (Solid State Drive) our rows (in DB) are not in continuous manner because we don't know the size of each data

So if we added our feature and there is not much gap between current and next one for the current one to take extra bits 

So the memory will be reallocated which is also costly operation

So we add new features everyday therefore it is not really compatible 




*** MongoDB is NoSQL (also called as Not Only SQL) DB ***


Refer to Day12.png

-- Normalization 

                Normalization is the process of organizing a database to reduce data redundancy and improve data integrity by structuring tables to avoid anomalies like insertion, update and deletion errors. 


In MongoDB data is not stored in rows and columns (that's why NoSQL)

<important> So there's no need for us to normalize data and there's no need to join also then </important>

Format of storing data in MongoDB is similar to JSON format just a little bit different 


So in MongoDB we call tables as ***" Collections "*** and rows as ***" Document "*** and a particular line in a document is called as ***" field "***



<Drawback> Doesn't follow ACID property </Drawback>



*** Vertical Scaling And Horizontal Scaling ***


SQL DB are vertically scalable but they aren't horizontally scalable (as discussed adding new feature)

whereas NoSQL DB are both vertically and horizontally scalable



*** Scalability ***

So let's take an example of our phone like our phone generates data and after sometime the storage gets full

So we can either vertically scale it meaning upgrading it's RAM and secondary storage (hard disk) so this is called as vertical scaling

Similarly in server we can just upgrade the server RAM and hard disk to vertically scale it


In horizontal scale it means that we bought another phone to also store data in that

Similarly getting new server to distribute traffic and data storage is more also (sending new data generated to another server only)




Vertical scaling also has it's limitation as there's a limit to how much we can upgrade

After sometime we will be needed to scale horizontally in the end




--- So in SQL DB our 2 tables can be present in different servers and those 2 servers can be present in different zones

--- So if we need to join the 2 tables to give data to user then it will be difficult (it will be time taking but it's possible)



--- So this problem isn't in MongoDB as all the information about a single user is present in a single document

--- So the whole data is present in a single server so no problem in horizontal scaling





*** Sharding ***

It means to store data in multiple servers 

Sharding is a database partitioning technique that divides a large database into smaller, faster, and more manageable databases called "shards". These shards are distributed across multiple servers, allowing for improved performance, scalability, and availability by distributing the data and workload.


So it is used let's say a table is soo big that it doesn't fit in a single server so we can divide it into 2 smaller DB and put it in multiple servers




*** Keeping Replicas of DB to save data from unfortunate scenarios  ***

It is done so that if our server is crashed our data remains safe

In real world they keep 2 extra copies of that data (distributed DB)


So sharding + replica is a tough task as both together will be hard to do


*** Load Balancer *** so that only one DB or server doesn't get too much load 


*** Distributed DB definition ***


A distributed database (DB) is a single logical database that is physically stored across multiple computers (or nodes) at different locations, which are all connected by a network.

Unlike a centralized database, where all data resides on a single server, a distributed DB spreads data across multiple locations to improve reliability, availability, scalability, and performance.



*** Challenges in Distributed DB + Replica ***


Main challenge will be to synchronise the databases so the data is consistent in all the databases during write and update operation

In SQL DB the databases are synchronized



So in an example case of transaction due to distributed DB one person made payment of 1000 to other person then after that due to load balancer other person also wants to give 1000 to that person so he reads his current balance from other server where it is not updated so it shows old balance then it transfers 1000 but here the synchronization is failed as the balance should be +2000 but instead it was +1000 due to failure in synchronization


So to solve this one technique they use is to write or update it should be done only in main server (*** or master server ***)
So the main server will then send message to other DB to stop read request until the updation (locks them), then it sends the updated balance and now the DB is synchronized 



So that was an example for SQL DB as to how they work for bank transactions


So here's an example for MongoDB (NoSQL DB)

MongoDB is used for social media so the DB is stored in multiple servers so for write operation it will go to main server only 

So let's say virat kohli uploaded a photo and the count of comments were updating every second as he's famous so updating other server every second will take some time so let's say main server has record of 1000 comments whereas a user read from other server and saw 500 comments so there is no problem in this 

So in DB we have to decide which thing we are going to follow like in MongoDB case even if user saw less comments it's not bad as it's just comments

So we wanted that in MongoDB case we follow *** Availability *** 



*** CAP Theorem ***


C := Consistency
A := Availability 
P := Partition Tolerance 

The CAP theorem or Brewer's theorem states that a distributed system can only guarantee two of the following three properties at any given time : Consistency, Availability, Partition Tolerance.




[ Consistency ]

Every read receives the most recent write or an error, in other words all nodes in the system reflect the same data at the same time. 
Implication : After an update, every client sees the update immediately. This is similar to the behaviour of a single-node DB.


[ Availability ]

Every request (read or write) receives a response-regardless of whether the response contains the most recent data
Implication : The system is always operational and responsive. However, during certain failures, the data returned might not be up-to-date.


[ Partition Tolerance ]

The system continues to operate even if network partitions (communication breakdowns between nodes) occur.
Implication : Since network failures are inevitable in distributed systems, partition tolerance is generally non-negotiable.






So MongoDB for social media provides Availability and Partition Tolerance as even in case of network failures or server crashes we can provide data to users as it isn't a big problem 

But in SQL DB in transactions we cannot give data that is not up to date so here it prefers Consistency and Partition Tolerance so it says the server is crashed for banking system and reject read requests 


Hence we can see that P in CAP is non-negotiable

We can transfer MongoDB availability to consistency so we can transfer it to SQL also as it's NoSQL (Not only SQL)













