import { unstable_getServerSession } from "next-auth";
import Product from "../../models/Product";
import Student from "../../models/Student";
import connectDB from "../../utils/db";
import { authOptions } from "./auth/[...nextauth]";

const handler = async (req, res) => {
  connectDB();
  const sess = await unstable_getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(401).json({ msg: "Not Authorized" });
  } else {
    if (req.method == "GET") {
      const { id } = sess.user;
      const user = await Student.findById(id).select("cart").populate("cart");
      res.status(200).json(user.cart);
    } else if (req.method == "PUT") {
    } else if (req.method == "POST") {
      const { id } = sess.user;
      const user = await Student.findById(id).select("cart").populate("cart");
      console.log(user);

      const { productId } = req.body;
      user.cart.push(productId);
      await user.save();
      console.log(user);
      res.status(200).json({ msg: "success" });
    }
  }
};

export default handler;
