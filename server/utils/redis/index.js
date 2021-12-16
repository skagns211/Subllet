require("dotenv").config();
const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_PORT, process.env.REDIS_IP);

module.exports = redis;

// require("dotenv").config();
// const Redis = require("ioredis");
// const redis = new Redis({
//   host: process.env.REDIS_PORT, 
//   port: process.env.REDIS_IP,
//   password: process.env.REDIS_PASSWORD,
//   name: "mymaster",
// });

// module.exports = redis;
