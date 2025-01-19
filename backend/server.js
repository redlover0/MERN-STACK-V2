import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from '../models/product.js';
// lsof -i :3000 - check if port is running if so
// kill -9 <PID> - kill the process

dotenv.config();

const app = express();
// its the man in the middle. it allows us to communicate between the front end and the backend

app.use(express.json()); 
// this is middleware that allows us to accepect/ parse json data in the res.body

app.post('/api/products', async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ sucess:false, message: 'All fields are required' });
    }
    const newProduct = new Product(product);
try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
} catch(error){
    console.error("Error in Create Product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
}
}); // this is the route
//route
app.listen(3000, () => { // this is the port were using 
    connectDB();
    console.log('Server is running on http://localhost:3000/products Hello world');
}); // this is the callback function