require("dotenv").config();
const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_PORT, process.env.REDIS_IP);

module.exports = redis;
