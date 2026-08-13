
import dotenv from 'dotenv';
import connectDB from "./config/connectdb.js"
import express from "express";
import http from "http";
import {Server} from "socket.io";

const app = express();

dotenv.config();

 connectDB();

 const server = http.createServer(app);

 const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
 });

 server.listen(process.env.PORT , () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
 })

 



