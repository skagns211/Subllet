require("dotenv").config();
const IP = process.env.REDIS_IP || "127.0.0.1"
const PORT = process.env.REDIS_PORT || 6379
const PASSWORD = process.env.REDIS_PASSWORD || null

const Redis = require("ioredis");
const redis = new Redis({
  host: IP , 
  port: PORT,
  password: PASSWORD,
  name: "mymaster",
});

module.exports = redis;
