import { unstable_getServerSession } from "next-auth";
import Student from "../../models/Student";
import connectDB from "../../utils/db";
import { authOptions } from "./auth/[...nextauth]";

const handler = async (req, res) => {
  connectDB();
  const sess = await unstable_getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(401).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    const user = await Student.findById(id)
      .select("cart")
      .populate({
        path: "cart",
        model: "Cart",
        populate: {
          path: "product",
          model: "Product",
        },
      });
    if (req.method == "GET") {
      return res.status(200).json(user.cart);
    } else if (req.method == "PUT") {
      user.cart = user.cart.filter((el) => el !== id);
      await user.save();
      return;
    } else if (req.method == "POST") {
      const { productId } = req.body;
      user.cart.push({ product: productId, amount: 1 });
      await user.save();
      return res.status(200).json({ msg: "success" });
    } else if (req.method == "DELETE") {
      const { productId } = req.body;
      console.log(productId);
      user.cart = user.cart.filter((el) => {
        return JSON.parse(JSON.stringify(el.product._id)) !== productId;
      });
      console.log(user.cart);
      await user.save();
      return res.status(200).json({ msg: "success" });
    }
  }
};

export default handler;
