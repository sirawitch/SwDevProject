const express= require('express');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser')
dotenv.config({path:'./config/config.env'});
connectDB();
console.log("test");
const app=express();
app.use(express.json());
app.use(cookieParser())
const PORT=process.env.PORT||5001;
const server=app.listen(PORT,console.log('Server running in',process.env.NODE_ENV,'mode on port',PORT))
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    server.close(()=>process.exit(1));
});