


const element = React.createElement('h1',{},"Hello Coder Army");

// ReactDOM.render(element, document.getElementById('root'));

/*

        It gives this warning:

            react-dom.development.js:73 Warning: ReactDOM.render is no longer supported in React 18
        
            Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17
        
            Learn more: https://reactjs.org/link/switch-to-createroot

*/


const Reactroot = ReactDOM.createRoot(document.getElementById('root'));      // Created Root first

Reactroot.render(element);           // Then rendered or added the element


/*
        Why was this change done?

        Ans:    In Netflix whenever we clicked on a button to load movies or my list it will take time to render the cards

                So until all the cards are rendered we cannot click another button in between rendering due to which 

                user experience was becoming worse as JS is single threaded language therefore it can only execute

                a single task so it executes task which is rendering cards hence we cannot click any button 

                so this was happening in ReactDOM therefore we changed it

                So in new one React takes control of the element 

                createRoot creates a root container in which document.getElementById('root') is kept

                root container name here is Reactroot so Reactroot now controls the document.getElementById('root')

                So if like in above case if we click another button while rendering cards the Reactroot has 

                power to stop this process and respond to current event

                At the end React is single threaded only (eventlistener and all belongs to Web API)




*/







// CDN = Content Delivery Network

/*

    In old times like for example yt data is in server in US

    So for me to access the data and many other users will also access the data

    So on a single server there are billions of users so a single server cannot solve all the problems

    And second problem is that there will be latency in obtaining data from server as data will first go to server 

    and then to us

    So they made copy servers and placed them in different locations so traffic will be distributed between server

    But still this doesn't solve the problem as (copied server have all the data in main server)

    If we upload a yt vid then it will go to main server and then it will be copied to other servers

    So this is another headache for us 

    So at that time this was done manually 

    Then CDN came 

    They made many small servers and made it in very large amount 

    So if we want to watch any yt vid then our request will go to closest server then if vid is not present

    in that server then it will go to main server and main server will send that yt vid to this small server

    Then small server will send this to us and will copy is also

    So if anyone else wants to watch this yt vid and this small server is closest to him also then this small
    
    server can fulfill this request

    (Not compulsory that small server will have all the data that is in main server)

    {So this small server only is called CDN}

    If our closest server has too many requests then it redirects it to another server closest to it

*/


/*

    A CDN, or Content Delivery Network, is a geographically distributed network of servers that speeds up web content 
    
    delivery by storing copies of files on servers near users, reducing latency and load times

*/



/*
    A server is a computer or software that provides data, resources, and services to other computers or devices, 
    
    called clients, over a network

*/




/*

    If we reload zomato website we see all the cards layout and text comes first but the images takes some time to load

    So these photos come through CDN

    https:\/\/b.zmtcdn.com\/data\/pictures\/9\/21940089\/efc499af827cd27f69c0d2bf7fd59b59_featured_v2.jpg

    In this image link also we can see CDN

    So all the static data like cards layout and texts are all stored in small servers

    While the dynamic data like subscribing channel, liking vid all this is stored in main server

    As dynamic data keeps on changing 

    So like if we store dynamic data also in small server then when we move from one small server to another small

    server located near us after liking a vid it won't have that data of liking the vid

    Hence we fetch this data from main server only 

    And also to maintain data consistency we save it in main server (as dynamic data)

    So all the images and all are stored in CDN only in zomato due to this photo takes time

    It saves all vids and images in CDN so make it's work less


*/