require("dotenv").config();
import connectDB from "./config/connectdb.js"
import express from "express";
import http from "http";
import {Server} from "socket.io";
const app = express();
connectDB();
