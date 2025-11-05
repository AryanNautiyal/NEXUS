

const redisClient = require('../config/redis');

// Total time (60 min)

const windowSize = 3600; 

const MaxRequest = 60;

const crypto = require('crypto');   // Built in package


const rateLimiter = async (req,res,next)=>{

    try{

        // const key = req.ip;

        // Not accepting this as sended ::1 so key starting with number only

        const key = `IP${req.ip}`;

        

        const current_time = Date.now()/1000;

        // To get time before which we need to remove the all the requests (window_Time)

        const window_Time = current_time - windowSize;

        await redisClient.zRemRangeByScore(key, 0, window_Time);

        // So zRemRangeByScore means remove elements ranged by score so between 0 to window_Time all the elements whose score

        // lies between them will be removed

        const numberOfRequest = await redisClient.zCard(key);

        // Will return the number of values that are present inside the sorted set corresponding to the key

        if(numberOfRequest>=MaxRequest)
        {
            throw new Error("Number of Request Exceeded");
        }

        const unique = crypto.randomBytes(16).toString('hex');

        // Gets 16 secure random bytes and convert it to a hex string for the value

        // console.log(unique);

        await redisClient.zAdd(key, [{score:current_time, value:`${current_time}:${unique}`}])



        // key TTL to be increased now
        
        await redisClient.expire(key,windowSize);

        // Did this to retain all the request data as the 1hr window ones should stay in the DB as the before ones will be removed 

        // By the function used above so if user makes request after 30 mins then after 20 mins so that we don't lose the data of prev records
    
        // As we didn't give any time to expire to key added above so used this to keep key in DB


        next();



    }
    catch(err)
    {
        res.send("Error : "+err.message);
    }

}





module.exports = rateLimiter;