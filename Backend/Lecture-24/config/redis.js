

const redis = require('redis');

const redisClient = redis.createClient({
    username: 'default',
    password: '21MeJk15RFeWyIiBAbz4nQVOSmLuYxEk',
    socket: {
        host: 'redis-14126.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 14126
    }
});

// const connectRedis = async ()=>{

//     await redisClient.connect();

//     console.log("Connected to Redis");
    
// }

// Doing this in index.js only as need redisclient here

module.exports = redisClient;