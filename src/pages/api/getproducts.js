import Product from "../../../Models/Product";
import connectDb from "../../../Middleware/mongoose";

const handler= async (req,res)=>{
    let products= await Product.find();
    res.status(200).json({ products})
}
export default connectDb(handler);
