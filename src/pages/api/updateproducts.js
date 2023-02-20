import Product from "../../../Models/Product";
import connectDb from "../../../Middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body)
    for(let i=0;i<req.body.length;i++)
    {
        let p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i]);
    }
    res.status(200).json({ sucess: "data added sucessfully" });
  } else {
    res.status(400).json({ error: "Can not add products" });
  }
};
export default connectDb(handler);
