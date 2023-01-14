import connectDB from "../../../utils/db";
import Student from "../../../models/Student";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";

const handler = async (req, res) => {
  connectDB();
  const sess = await unstable_getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(401).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    if (req.method == "GET") {
      const student = await Student.findById(id, {
        _id: 0,
        password: 0,
        role: 0,
      });
      res.status(200).json(student);
    } else if (req.method == "PUT") {
      await Student.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({ msg: "Success" });
    }
  }
};

export default handler;
