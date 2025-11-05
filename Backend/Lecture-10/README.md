


*** DB      vs          FS (File System) ***

DB is used to store data in organized manner so data can be retrieved, updated and deleted easily whereas same can be there in file system but in DB we can use queries to filter out data whereas in FS we will be needed to either write program for each filter or we cannot


We can select data in bulk in DB using queries but we cannot do that in FS 

In FS we will be needed to do it manually 

So in DB we store data in structured format (in organized way)


*** DB      vs      DBMS ***

DB is used to physically store data in hard disk whereas it's the DBMS that performs the queries

We will tell DBMS (application) to perform CRUD operations on DB 

So our MongoDB is just DBMS as we can take DB from AWS or anyone else



*** Why Excel Sheet cannot be referred to as DB ? ***

Excel sheet has it's limit (max number of rows)

If many users are accessing Excel sheet and are updating data so there are chances that someone's update opeartion might be overwrited

In Excel sheet there is no filter operation as in NAME field we can also enter numbers but in DB we can put constraints to avoid that and can specify column datatype 

So we can call excel sheet as mini DB



*** Structured Data vs Unstructured Data ***


We can store video only in binary format in DB 

But we don't do that as one thing we can say is that video in binary format will have large data 

So we have put videos and images in the category of unstructured data whereas the text, number, etc are put in the category of structured data

As we cannot do any query on videos (if we try to select on those videos or show those videos only that contains dog)

Hence we have put videos in the category of unstructured data

So we will keep it somewhere else as our SQL queries are executed by bringing some data to RAM and there will be max limit 

As to how much can be processed at a single time so if we store videos also then instead of processing 5 rows at a time it will process 2 rows at a time 

So videos is just taking space and increasing time also 

Hence we store videos separately in File Storage System and can just use it's link in DB

As we have studied CDN (Content Delivery Network) also so it's basically file storage system only


*** Semi Structured Data ***

Whenever we have a video so we have some metadata about the video

Metadata like length of the video , format of the video , etc

So the metadata is structured data and the video is unstructured data 

So we can store metadata about the video in our DB as we can use queries on them and video in file system




 
*** SQL (Structured Query Language) ***

MongoDB is NoSQL DB

So why we took MongoDB instead of SQL DB as we used to use SQL DB


*** Problems in SQL DB ***

SQL DB are most important and they are used for transactions

But SQL DB are bad for transactions as we need to keep many constraints and logs also 


*** ACID Property ***

In SQL DB ACID property is followed 

A := Atomicity 
C := Consistency
I := Isolation
D := Durability 

So our SQL DB should follow these properties 

Only due to ACID property the bank has hope in SQL DB for transactions data 

*** A := Atomicity *** 

It states that if we have performed any transaction it should either be completed or should be rollback

A transaction is treated as a single, indivisible unit. It either completes all its operations or none at all; there is no partial execution.

Eg : For trnasaction of A (balance : 5000) and B (balance : 3000) of 1000

1. First we read if A has enough balance to transfer 1000 to B
2. Then we deduct 1000 from A's balance
3. Then we check B's balance
4. Then we add 1000 in B's balance

Atomicity states that all these 4 steps will be considered as 1 which means either all 4 steps gets executed or none of them get executed

So if our transaction due to some reason stops at step 3 then it should rollback to initial state (A's balance won't be deducted then)


*** C := Consistency ***

Our DB should remain consistent before the transaction and after the transaction 

A transaction brings the database from one valid state to another, ensuring data integrity and that all rules and constraints are followed.


Eg : 

Before transaction

                    Balance
A                   5000
B                   3000
Total               8000


After transaction

                    Balance
A                   4000
B                   4000
Total               8000


So it should remain consistent it shouldn't be like this 

After transaction

                    Balance
A                   4000
B                   3500
Total               7500

So here data is inconsistent as 500 is gone somewhere


*** I := Isolation ***

Concurrent transactions do not interfere with each other. Each transaction appears to run as if it were the only one running, which helps maintain data integrity.



Eg :


Before transaction

                    Balance
A                   3000
B                   5000
D                   10000


So A wants to send B 2000 and D wants to send B 5000 so both transactions are occurring concurrent (difference is in milliseconds)

So both transaction shouldn't interfere with each other and both should be isolated from each other 

So A will think that he's the only one sending B money whereas D will think that he's the only sending B money

So if both A and D interfere then scenario will be like this A will read B's balace as 5000 and same will be done by D 

So A will complete transaction and B's final balance will be 7000 then D as it has also read balance as 5000
so it will also send money and B's final balance will be 10000 whereas it should be 12000 

So data is not consistent as there is 2000 difference



One technique to solve this is by using locks


*** D := Durability ***

Once a transaction is committed, it is permanent and survives system failures, such as power outages. 

So if B's balance is 12000 then a power outage occurs then also the B's balance will be 12000 it will be saved so the transaction committed should be permanent 

So our DB should be durable

Even if our server is destroyed due to a bomb still our DB should be maintained and data shouldn't be lost

So to do this we create replicas of DB and keep it in different zones like one in US, one in India , etc

So even in case of natural disaster data is not lost




Therefore Banking people use SQL DB due to it's reliability (ACID properties)




