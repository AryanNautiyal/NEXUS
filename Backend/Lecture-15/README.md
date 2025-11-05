


*** Why Mongoose ? ***

In previous lecture we saw that commands are kinda complex of MongoDB and we cannot perform checks for validation in that also

So without schema we were just inserting things in our DB randomly 

So we will try to build a schema due to which we can prevent people from populating our DB with junk data

So what is schema ?

So schema is nothing but just the fields that are mandatory to be present in our document 

A database schema in a DBMS is the logical blueprint for how data is organized and stored, defining tables, fields, relationships, and constraints. 


Schema is necessary to protect our DB from hackers as hackers can send any data they want to our DB

Mongoose helps in validation and proper sanitization of data so that we can then store our data in DB (as data is safe)

We can also do all this by MongoDB also but there we will be too much coding there so we can think that we are writing very low level code there 

Similar to how we were using Express instead of require('http')

So Mongoose is made on top of MongoDB




                                        -----------------------------------------
                                        |               Express                  |
                                        |                                        |
                                        -----------------------------------------
                                                            |
                                                            |
                                                            |
                                                            |
                                                            |
                                                            V
                                        -----------------------------------------
                                        |               Mongoose                 |
                                        |                                        |
                                        -----------------------------------------
                                                            |
                                                            |
                                                            |
                                                            |
                                                            |
                                                            V
                                        -----------------------------------------
                                        |               MongoDB                  |
                                        |                                        |
                                        -----------------------------------------
                                                            |
                                                            |
                                                            |
                                                            |
                                                            |
                                                            |
                                                            V
                                        -----------------------------------------
                                        |                  DB                    |
                                        |                                        |
                                        -----------------------------------------




Express will communicate to Mongoose then Mongoose will communicate to MongoDB then MongoDB will communicate to DB

So interacting with Mongoose is very easy and Mongoose provide us with high level abstraction

Interaction with Mongoose is like we are interacting with JS Object


*** Mongoose is also called as ODM (Object Data Modeling) library for MongoDB ***


ODM or ORM (Object Relational Mapping)

Mongoose makes it easier for us to give schema to MongoDB and all that 

So like during JS we learnt that DOM in which we treated HTML document as a JS Object similarly here we will treat it as a object only

and using that object we will perform operations on DB


Just as the DOM allows JavaScript to interact with the web page structure using familiar object properties and methods, Mongoose allows JavaScript/Node.js to interact with MongoDB documents using familiar object properties and methods.