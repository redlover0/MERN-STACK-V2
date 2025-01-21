import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import getRoutes from "../backend/routes/product.routes.js";

const router = express.Router();
// lsof -i :3000 - check if port is running if so
// kill -9 <PID> - kill the process

//netstat -ano | findstr :3000 - check if port is running if so on windows
// taskkill /PID <PID> /F - kill the process on window

dotenv.config();

const app = express();
// its the man in the middle. it allows us to communicate between the front end and the backend

app.use(express.json()); 
// this is middleware that allows us to accepect/ parse json data in the res.body

app.use("/api/products", getRoutes);

app.listen(3000, () => { // this is the port were using 
    connectDB();
    console.log('Server is running on http://localhost:3000/products Hello world');
}); // this is the callback function