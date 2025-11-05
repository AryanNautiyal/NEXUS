

*** Http Method ***

 --> GET method (like we were getting data using fetch from backend)

                CRUD -- Create Read Update Delete

 --> POST method (getting or saving data from frontend)

 --> UPDATE method (updating data)  [this method also called as Patch or Put] {there is difference between patch and put}

 --> DELETE method (deleting data)


*** Patch vs Put ***

    --> If we need to update only 1 field then we use " patch " 

    --> If we need to update every single field in presence then we use " put "


        Eg : name, username, age, DOB, password is used as data so if we only need to change only the name or name, age field we
             use patch and if we want to change every single field then we use put


*** Rest API ***

  --> We also call these methods as REST APIs (Get, Post, Put, Delete)

        



*** We want to access nodemon in our whole project use this ***

            <!-- npm i -g nodemon -->

So as we can see we install it globally then (here didn't do that)              

[ *** Install globally as without it not responding to command *** ]

Executing this command will give error as for global access it expects sudo

So our updated command is : 

                <!-- sudo npm i -g nodemon -->


Then start file using nodemon       *** nodemon index.js ***