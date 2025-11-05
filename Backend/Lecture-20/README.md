



*** Why Refresh token was needed when he already had JWT token ***

Using Refresh token is choice or can say optional some do and some don't

If we don't give any expiry date to JWT token then it will be valid forever

So writing that expiry date of JWT token is not expired forever is a security threat 

As if someone steals the token then he can use our token to access our information 


So if by chance client knows that someone has hacked their instagram account 

So even if client has changed their password then also this token will be valid which is the biggest security concern


As what the server sees that is the token created by the server only using the digital signature it just sees that only

So there's no way we can invalidate the token that is stolen as even when the client changes the password it will just generate new token

So hence this is the problem 


So no way to invalidate token if we didn't mention the expiry date


*** So what if we set token expiry to 30 mins ***

This will also lead to problem as user will use the platform and after 30 mins will get the message that token has expired

Then will ask again to enter the user id and password again due to which the User Experience (UX) is getting bad



So this is where the refresh token comes in the picture


*** Refresh token ***

Access token create and invalidate property also


So now when we login it generates 2 tokens :

        -- Access token

        -- Refresh token


So refresh token will just store information due to which we can again generate the access token

So now our access token will be valid for 30 mins and refresh token will be valid for 7 days

Now for every request we make we can use access token then after 30 mins when we send request only refresh token goes and the access token is invalid

So server sees the refresh token and knows that it needs to generate another access token whose expiry is 30 mins only 

So server now will generate new access token and then will give us the new access token



So after 7 days refresh token will also be invalid so server will see that validity of refresh token is also ending so it can also create new refresh token and send it to us


*** So what if our refresh token is also stolen along with access token then ? ***

So when someone steals both the tokens and the user or client knows that someone has hacked their account

and the user or client changes the password then due to this the refresh token will be invalidated

So this is the major advantage of the refresh token


Password Change --> Refresh token (invalidated)

So as access token cannot be invalidated as it's stateless so after 30 mins the access token will automatically expire so safe


*** So how does our Refresh token looks like ***

So refresh token is like a session ID only 

It just generates a random string

Then this random string is stored in DB and then will store the user is belongs to 

Then when someone sends request it can see the refresh token and see the user who's accessing and can generate new access token

Then when the user changes the password then due to this the refresh token will automatically will be invalidated and a new refresh token will be created

So then when the hacker requests with invalid refresh token then it will check DB and it sees that it's not there so it will reject the request

So information about refresh token will be needed to be stored in the database


So refresh token is nothing but just random string 

So with this random string the data is stored in DB so using the reference of random string we can use the data stored to generate new access token

So no information is present in the refresh token


So we cannot store the refresh token in plain text in DB so we will be needed to encode it (as DB leak can cause problems)

So we will store our refresh token as hashcode only

So whenever our refresh token comes to our server so first it will convert it to hashcode and then it will compare from the one in the DB



*** So no solutoin is perfect we will be needed to compromise something ***

So here we compromised UX and DB calls and DB storage to safeguard user 

And even if we try to design a new architecture where we just invalidate the access token also when the password is changed then also we will be needed to store access token info in DB so that whenever access token comes and it's not in DB we will tell client that it's not valid



[These things are discussed in companies]









So in banks they use session ID concept only they don't generate any tokens 

So they validate session id for 15 mins as information there is very sensitive




*** We don't generate OTP using random function in JS as random function is not random it takes system clock and then using it tries to generate random number ***

