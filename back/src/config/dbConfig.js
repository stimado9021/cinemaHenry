const mongoose = require('mongoose');
const dotenv = require("dotenv")
const env = dotenv.config()
console.log(process.env.MONGODB_URI)
const dbConfig = async ()=>{
   await mongoose.connect(process.env.MONGODB_URI)
}

module.exports = dbConfig;