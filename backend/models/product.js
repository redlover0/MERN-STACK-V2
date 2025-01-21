import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
},{
    timestamps: true // this will create a timestamp for when the product was created and when it was last updated
});

const product = mongoose.model('Product', productSchema);  // this will create a model called product based on the productSchema
// creates another string for it to call the model. its just like pandas

export default product; 
// this exports the product model to be used in other files

// models/Product.js

// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String, required: true },
// });

// const Product = mongoose.model('Product', productSchema);

// export default Product;
