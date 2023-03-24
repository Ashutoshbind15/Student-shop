import mongoose from "mongoose";
import Provider from "./provider";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  urls: {
    type: [String],
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
  },
});

const Product =
  mongoose.models?.Product || mongoose.model("Product", ProductSchema);

export default Product;
