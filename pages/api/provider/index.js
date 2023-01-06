import connectDB from "../../../utils/db";

import Provider from "../../../models/provider";

const handler = async (req, res) => {
  console.log("handler");
  connectDB();

  if (req.method === "POST") {
    const { name, type, location } = req.body;
    const user = await Provider.create({ name, type, location });
    console.log(user);
    res.status(200).json(user);
  }

  if (req.method === "GET") {
    const users = await Provider.find({});
    console.log(users);
    res.status(200).json(users);
  }
};

export default handler;
