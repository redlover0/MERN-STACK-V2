import Product from '../models/product.js'; // Ensure this path is correct
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "server error" });
    }
};

export const createProduct =  async (req, res) => {
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
};

export const updateProduct = async (req, res) =>{
    const { id } = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message: "Invalid Product ID"});
    }

    try {
        const Updatedproduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success:true, data: Updatedproduct});
    } catch (error) {
        res.status(500).json({success:false, message: "server error"});
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await product.findByIdAndDelete(id);
        res.status(success).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error("Error in Delete Product", error.message);
        res.status(500).json({ success: false, message: "Production not founf" });
    }
};