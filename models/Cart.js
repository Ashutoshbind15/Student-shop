import mongoose from "mongoose";

export const CartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  amount: {
    type: Number,
  },
  _id: false,
});

const Cart = mongoose.models?.Cart || mongoose.model("Cart", CartSchema);

export default Cart;
