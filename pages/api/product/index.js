import connectDB from "../../../utils/db";

import Product from "../../../models/Product";

const handler = async (req, res) => {
  console.log("handler");
  connectDB();

  if (req.method === "POST") {
    const { title, price, description } = req.body;
    const product = await Product.create({ title, price, description });
    console.log(product);
    res.status(200).json(product);
  }

  if (req.method === "GET") {
    const products = await Product.find({});
    console.log(products);
    res.status(200).json(products);
  }
};

export default handler;
