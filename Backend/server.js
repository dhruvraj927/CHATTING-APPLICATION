import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from 'cors';
import http from "http";

import pool from './src/config/connectdb.js'

import route from './src/routes/routes.js'


import {Server} from "socket.io";

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use('/chatapp',route);

 const server = http.createServer(app);

 const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
 });


 io.on("connection", (socket) => {
    console.log("User connected");

    console.log(socket.id);

    socket.on("send_message",async (message)=>{
       console.log("Message received:", message);

        // SAVE MESSAGE TO postgress
      //   const newMessage = await Message.create({
      //       sender: "Dhruv",
      //       message: message
      //   });

      const { senderId, receiverId, message } = message;

        console.log("Saved in postgress:", newMessage);

        // SEND SAVED MESSAGE TO FRONTEND
        io.emit("receive_message", newMessage);
    })

      socket.on("disconnect", () => {
         console.log("User disconnected:", socket.id);
      });

    

   });

 server.listen(PORT , () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
 })

 



