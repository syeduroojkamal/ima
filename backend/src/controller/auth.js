import User from "../model/user.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/jwt.js";

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  // Server-side validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 4) {
    return res
      .status(400)
      .json({ message: "Password must be at least 4 characters long" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    // end Server-side validiation

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, hashedPassword });
    const savedUser = await newUser.save();
    generateToken(savedUser._id, res);

    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error, please try again later" });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  // Server-side validation
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 4) {
    return res
      .status(400)
      .json({ message: "Password must be at least 4 characters long" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // password check
    if (!(await bcrypt.compare(password, user.hashedPassword))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // end Server-side validiation
    generateToken(user._id, res);
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error, please try again later" });
  }
}

export async function logout(req, res) {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "Logout successful" });
}
