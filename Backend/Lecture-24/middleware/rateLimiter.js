

const redisClient = require('../config/redis');



const rateLimiter = async (req,res,next)=>{

    try{

        const ip = req.ip;

        console.log(ip);

        // Gives ' ::1 ' as ip which is not the ip 

        // So as we are sending request locally to it shows only ::1 of 127.0.0.1 

        // But it's showing IPv6 address (we know due to ':') here so if we send request from somewhere else then it will show proper

        // So from Postman to our own system the message is going so sender is having loopback address (as haven't hosted server also)

        // But error wasn't from this line



        const number_of_request = await redisClient.incr(ip);

        // This will increment the count in ip and if ip doesn't exist in DB then will just insert it with count = 1

        // So it will just set key value pair by itself if it doesn't exist, key as ip and value as count 

        // Can do by also setting and getting also but here done with single command only 

        if(number_of_request>60)
        {
            throw new Error("User Limit Exceeded");
        }

        if(number_of_request==1)
        {
            // await redisClient.expire(3600);

            // 3600 == TTL (time to live)

            // Not sure how the above one works without taking the key 

            await redisClient.expire(ip, 3600);
        }


        // This only saves us from a single client so what if many people just start requesting together

        // So let's say for example during CBSE result the site doesn't have much traffic but when result comes too much traffic
        
        // So for those situations AWS provides AutoScaling which during peak hours scales the system by increasing servers

        // And during hrs when traffic is very low it automatically just reduce the number of servers (than peak hrs)


        console.log(number_of_request);


        next();


        // To add constraint of gap between 2 request use get set method of redisClient instead of incr


    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }

}





module.exports = rateLimiter;