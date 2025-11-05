

*** MongoDB is a DBMS and it helps us in handling our Database or talk to our DB ***

There are 2 types with which we can download MongoDB

1. Install MongoDB locally in our system and make part of our secondary memory as DB

2. We make some server a DB

In this course we will follow 2nd approach 


*** What is the cluster? And difference between cluster and server? ***

Cluster is made by many servers.

So many servers combined form cluster

Combination of many servers is called cluster

In MongoDB, the term cluster refers to a group of interconnected MongoDB server instances (called nodes) that work together to provide high availability, fault tolerance, and scalability.

*** So why cluster is being created ? ***

So if we remember we learned earlier that to keep our data safe 2 replicas of original data is created so that data remains safe 

So MongoDB buys many servers and create replicas of our DB himself for protection of data

Hence they called it creating cluster

(When sharding will be involved then it will buy many servers for it so here not talking about it)

In free plan we won't get sharding services

In free plan it says 512MB will be given so 512MB is combined storage of 3 servers (1 original DB + 2 replica DB)

whereas in paid plan it talks about a single server storage


[The region is also important as places near that server region will receive data faster whereas there will be some latency for data to reach far away places]




*** DB Username : coderArmy9 ***

*** DB Password : Hunter@9Bhai ***

*** DB Link : mongodb+srv://coderArmy9:<db_password>@codingadda.ozs5ize.mongodb.net/ ***

<!-- const url = "mongodb+srv://coderArmy9:Hunter@9Bhai@codingadda.ozs5ize.mongodb.net/"; -->


MongoDB compass is a user interface (UI) due to which we can see our database 


_id : ObjectId("68fb64cf07cef06473d9fa79")  

Automatically when we add data and enter data and create it adds it automatically so this is the indexing that we use to find our data in B+ Tree for faster fetch, etc operations 


In MongoDB we have flexibility over schema also 

Schema flexibility means like if we entered data like name, age, city then it doesn't mean that all this data should be present in other documents also in other document we can do like this name, balance, aadhar 


Cluster --> Database Name --> Collection --> Document --> Field 


So MongoDB Compass is UI only but we won't manually generate data our data will come from frontend to backend and then backend will deal with the DB

So we will install MongoDB drivers in our system to talk with the DB

<!-- npm install mongodb -->
