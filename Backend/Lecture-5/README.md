

Monolithic architecture means keeping everything in a single server

whereas in microservices we keep each component in other server like Front end code in one , backend in other, DB in other , etc.



Server will have RAM, processor , storage 

*** So what is the problem with monolithic structure ? ***

Ans.    So to run front end code we will require RAM and processor if we run it on server side. Same is with backend, it requires
        RAM and processor also. 

        Same for DB it will require SSD (Solid State Drive [Secondary Storage]) , RAM and processor

        So as all RAM , etc are all present in same space so it might not be able to fulfill requirements of everything

        So we might think to increase RAM so we can either upgrade our RAM or change our server to one with bigger RAM 

        So with other server it will have more storage also with bigger RAM as according to server RAM and secondary storage is given 

        So our application was fine with previous storage capacity but due to RAM upgrade we got extra space which we don't want

        So those extra 10GB will also have cost that we will be needed to pay 

        we cannot just physically change RAM as we are getting the services of server from another company and the company won't specifically just do that for us as there's also a risk there 


Hence we use micro services so we can easily scale one resource

Disadvantage of micro services is that cost will be more as for each server we have to pay

Micro services allows us to divide the work and each part is assigned to teams in big companies and they decide which tech stack to use instead of using common they can use any they want according to their problem or work and as all are on different servers, all can communicate 


*** Eg : ***  Front end is divided into 2 parts one is user dashboard and other is admin panel , user dashboard made from react and admin dashboard from angular 

Same can be take case as for machine learning different servers are there and all that


*** Making a service means that their codebase is different ***

So to communicate between these 2 different codebase they can do it by API



So when to use what

Use monolith when smaller application (not many users are there)

Use microservice when many users or large application

Scalability is easier in microservice though 



