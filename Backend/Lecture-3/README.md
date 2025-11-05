



<!-- Node.js has V8 Engine inside it and also has Libuv inside it too -->

<!-- Node.js alone cannot do setTimeout(), setInterval(), etc {We got these from Web API} -->




<!--

 For everthing like Network call like sending data, etc will have TCP/IP protocol included, on which port it will be received  and from which port it is send all of this so in this hardware is also included so whenever we require access of system things this is handled by OS only 
 
-->


In JS we current don't have anything to access OS directly 

So in different OS there will be different commands to access or do things that can be done by Node.js

Node.js can be used for everyone of them

Node.js has a global object 

So all the OS work is done like putting in queue , setTimeout() , getting global clock for timer, etc.

So to interact with the system we need some programming language that can directly talk to the system like C++, C, Python, Java

So here our Libuv is introduced 

Libuv is nothing but just C program code which helps in doing the things that require OS



Libuv is a cross-platform C library designed for asynchronous I/O operations, primarily known for providing the underlying event loop mechanism in Node.js. It enables software to perform non-blocking tasks by abstracting platform-specific details, providing a consistent API for network sockets, file system operations, child processes, and more.


To fetch data we write it in JS code then it gives it to Libuv as JS is synchronous and while fetching we need asynchronous behavior

So Libuv then gives it to OS

Libuv handles the setTimeout() , etc.

So Libuv has different codes for different OS

So while doing frontend we can use all those functions due to Web API only 

So Libuv has actual implementation of setTimeout() and other functions

Global object only has functions but we also need to implement those functions also somewhere so they are implemented inside Libuv

In browser also it doesn't directly access the OS in browser there is code written (Browser Web API) only to use setTimeout() , etc.

When we install browser it by default brings all the code like V8 Engine and also Web APIs (specific for different OS)

Functions inside Global object are all implemented inside Libuv

