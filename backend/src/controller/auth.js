import User from "../model/user.js";
import bcrypt from "bcryptjs";

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ name, email, hashedPassword });
  const savedUser = await newUser.save();

  res.status(200).json({ message: "Signup" });
}
