import connectDB from "../../../utils/db";
import Student from "../../../models/Student";

//routes for admin to view and change roles of students and vendors

const handler = async (req, res) => {
  console.log("handler");
  await connectDB();

  if (req.method === "POST") {
    const { name, location, contact, email } = req.body;
    const student = await Student.create({ name, location, contact, email });
    console.log(student);
    res.status(200).json(student);
  }

  if (req.method === "GET") {
    const students = await Student.find({});
    console.log(students);
    res.status(200).json(students);
  }
};

export default handler;
