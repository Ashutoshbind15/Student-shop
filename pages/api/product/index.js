import connectDB from "../../../utils/db";

import Product from "../../../models/Product";
import Provider from "../../../models/provider";

const handler = async (req, res) => {
  console.log("handler");
  await connectDB();

  if (req.method === "POST") {
    const { title, price, description, provider } = req.body;
    const product = await Product.create({
      title,
      price,
      description,
      provider,
    });
    console.log(product);
    const providerer = await Provider.findById(provider);
    providerer.products.push(product._id);
    await providerer.save();
    console.log(providerer);
    res.status(200).json(product);
  }

  if (req.method === "GET") {
    const products = await Product.find({});
    console.log(products);
    res.status(200).json(products);
  }
};

export default handler;
