import product from "../models/product";

export const getProducts = async (req, res) => {
    try {
        // if pass an empty object you fetnch all products in database 
        const products = await product.find({})
        res.status(200).json({success:true, data:products});
    } catch (error) {
        // for debugging purposes
        console.log("Error in fetching products:", error.message)
        res.status(500).json({success: false, message: "server error"});
    }
};
