import Student from "../../models/Student";
import connectDB from "../../utils/db";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  console.log("handler");
  connectDB();

  if (req.method === "POST") {
    const { name, email, contact, location, password } = req.body;
    const student = new Student({
      name,
      email,
      contact,
      location,
    });

    console.log(student);
    student.role = "admin";
    const hashed = await bcrypt.hash(password, 12);
    student.password = hashed;

    await student.save();
    console.log(student);
    res.status(200).json(student);
  }
};

export default handler;
