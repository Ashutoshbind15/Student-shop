import mongoose from "mongoose";
import { CartSchema } from "./Cart";
import Product from "./Product";

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  contact: {
    type: Number,
  },
  email: {
    type: String,
  },
  location: {
    type: String,
  },
  urls: {
    type: [String],
  },
  cart: [
    {
      type: CartSchema,
    },
  ],
});

const Student =
  mongoose.models?.Student || mongoose.model("Student", StudentSchema);

export default Student;
