import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


import authRoute from './routes/auth.route.js'
import connectToMongoDB from './db/mongoDbConnect.js';
import messageRoute from  './routes/message.route.js'
import userRoute from  './routes/user.route.js'
import {app , server } from './socket/socket.js'




dotenv.config()




app.use(express.json())
app.use(cookieParser())
app.use('/api/auth' , authRoute);
app.use('/api/message', messageRoute)
app.use('/api/users' , userRoute );





app.use((err , req , res , next)=>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || "Internal server error"
    return res.status(statusCode).json({
        success : false , 
        statusCode,
        message,
    })
})
server.listen(3000 , ()=>{
    connectToMongoDB();
    console.log("Server is started at port 3000");
})
