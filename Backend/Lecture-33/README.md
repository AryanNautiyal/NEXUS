

STUN server returns the IP address and client shares it with other person

Then let's say when other person tried to connect to client it was seen that the port number is still busy with STUN server

So in this case when other person tried to connect it couldn't so in this case also we will fall back to TURN server 

So through socket we will send the ICE candidate

ICE Candidate = Public IP + Port

Or

ICE Candidate = Private IP + Port

Or

ICE Candidate = TURN Server + Port


<!-- https://www.twilio.com/login?iss=https%3A%2F%2Flogin.twilio.com%2F -->

Create account on this for STUN and TURN server url 

Use twil.js to get creds using your keys


Recovery code : <!-- X3UFJHHSMJ915BRLHTBQ6PS9 -->