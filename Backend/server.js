
import dotenv from 'dotenv';
import connectDB from "./config/connectdb.js"
import express from "express";
import http from "http";
import {Server} from "socket.io";

const app = express();
app.use(express.json());
dotenv.config();

 connectDB();

 const server = http.createServer(app);

 const io = new Server(server,{
    cors:{
        origin:"http://localhost:5000",
        methods:["GET","POST"]
    }
 });

 io.on("connection", (socket) => {
    console.log("User connected");

    console.log(socket.id);

    socket.on("send_message",async (message)=>{
       console.log("Message received:", message);

        // SAVE MESSAGE TO MONGODB
      //   const newMessage = await Message.create({
      //       sender: "Dhruv",
      //       message: message
      //   });

      const { senderId, receiverId, message } = message;

        console.log("Saved in MongoDB:", newMessage);

        // SEND SAVED MESSAGE TO FRONTEND
        io.emit("receive_message", newMessage);
    })

      socket.on("disconnect", () => {
         console.log("User disconnected:", socket.id);
      });

    

   });

 server.listen(process.env.PORT , () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
 })

 



