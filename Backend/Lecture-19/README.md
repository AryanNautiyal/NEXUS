

*** JWT Tokens ***

JWT Tokens are stored in cookies

<!-- Add Cookie-Editor (add to chrome) -->

So click on the puzzle like symbol on top right 

Then select cookie editor 

The account in which you have bought the course export the data using JSON 

Then use account that isn't having the course and import the copied data 

Then refresh and you can see that in coderarmy website I can bypass the payment and access the course for free



*** JWT = JSON Web Token ***

<!-- Rev up digital signature -->

        -- 1. Content - Hashcode
        -- 2. Encrypt the hashcode
        Result => Digital signature


So that client doesn't have to again and again send id and password so whenever client send request the server just gives the client a JWT token

So whenever client requests something it will also send JWT token also


*** JWT token is nothing but just a string ***

JWT token is stateless so we won't be needed to store anything regarding JWT token in DB

<!-- Official website for JWT Token jwt.io -->


so we have this


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

So from starting to first ' . ' we call this part as header part 

        In above example it's this 

            - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

Then from first ' . ' to second ' . ' the field is called as payload (so this is payload part)

        In above example it's this 

            - eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0

Then from second ' . ' till the end is the digital signature 

       In above example it's this 

            - KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30


So we don't want user to send id and password again and again 

So we will store the id in JWT Token (won't store password as it's sensitive)

So we will store id in JWT token so that we will know who's requesting 

*** Don't put sensitive information in JWT token ***


*** JWT structure ***

JWT : Header.Payload.DigitalSignature


*** Payload ***

API endpoint === app.get() {For getting data}

So we have set different API endpoints so that user can interact

So let's for say in instagram a user says that it wants to see the chat 

So who's chat should we display or if user asks to open profile so whose profile should we open

So we will send GET request in the form of cookie

We can also do localhost:4000/chat_user_name="rohit_negi9" but the cookie one is better

So inside payload in JWT token we will store the username 

    eg: Payload : {
        user_name : rohit_negi9,
        emailId : rohit@gmail.com
    }

Payload is nothing but an object so like this will store information in payload

So when user sends get request to see chat so it will send request with JWT token and by seeing JWT token payload the server will respond by sending chat data of user_name : rohit_negi9

So in GET request we don't send body so we will send cookie instead

*** Cookie : Cookies are small text files that websites save on your computer to remember information about your visit, like login credentials, site preferences, and shopping cart items. ***



*** Digital signature ***

So what digital signature does in this is that the content from header to payload is converted to hashcode and kept in digital signature

To verify the integrity and authenticity of the message

(Header + Payload) => Hashcode => Hashcode (encrypted)

So Server has a key using which the Server encrypts the hashcode

Contains secret key using which we digitally sign the document


*** Header ***

Header contains the algorithm type with which the message is converted into hashcode and type of the message like JWT


So since the hacker or someone else can only decrypt the message and cannot change and encrypt the message to copy the digital signature hence JWT token is very secure

So hacker cannot encrypt as the key is with server only


So now when user sends request to the server the server receives the JWT token and then the server combines the header and payload and convert it to hashcode

Then using the key server has the server encrypts the hashcode and then compares with the digital signature in the JWT token

If it matches then the user is ok, if not then user is fraud and JWT token is rejected by server


*** Hence therefore JWT token is stateless as we weren't needed to store anything regarding it in DB or anywhere ***


There are 2 types of token

    - Stateless token

        like JWT token

            No need to store anything regarding token here

            No need to manage state of token == stateless

            Can validate the token on our own

    - Stateful token

        like Session ID

            We were required to store the session ID of user in DB to refer to it everytime user sends request

            But it was just increasing DB calls which results in increased costs

            Validate the token by checking the DB





So even if our JWT token goes to other server then also it will be validated as all the servers will have the same key


*** Why shouldn't we store sensitive data in JWT token ? ***

The Header and Payload part is not in encrypted form and also not in hashed form  in JWT token 

Only Digital signature is encrypted in JWT token

So it's not wise to send sensitive information in JWT token


*** People think that it's encrypted because if we see in jwt.io we cannot understand anything from JWT Token ***

But this is not the case

The Header and Payload are just encoded to Base 64 only use Base 64 decoder to unravel the info

Took payload from jwt.io

eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0

Decoded 

{"sub":"1234567890","name":"John Doe","admin":true,"iat":1516239022}

Hence not safe

As digital signature only tells that the data is not manipulated



Hashing is not reversible so if someone says header and payload are hashed they are dumb

Hashing is not reversible because it uses complex, one-way mathematical functions that are designed to be easy to compute in one direction but computationally infeasible to reverse.



If it was reversable then let's say we convert 2 crore bit vid to hash code by using SHA256 which gives hash code in 256 bits

So here we have just achieved ultimate compression algorithm if it was reversible 

But it's not reversible neither it is used for compression as hashing algos are just one way


*** Hash Collision ***

In Hashing hash collision is possible as in SHA256 the bits are limited so max and min bits are 256 only

So 2 input can have same hash code so this is called as hash collision

So 2 inputs can just have same hash code due to limited bits

Good algorithm = minimum hash collision

There are less chances for hash collision but if it occurs then scenario like below can occur

Rohit@123 is our account password and hacker finds password Mohan@321 whose hash is same as Rohit@123 so due to this hacker can log into our account using password Mohan@321


*** Should JWT token have expiry date ***

JWT token also called as access token 

It totally depends on us if we want expiry date for our JWT token or not 

