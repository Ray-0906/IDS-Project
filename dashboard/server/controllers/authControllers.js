import User from "../models/user.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const cookieOptions = {
  httpOnly: true,
  secure: true, // Required for SameSite: 'none' and HTTPS
  sameSite: "none",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};


export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
     const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: "Email already in use" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, cookieOptions)
       .status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, cookieOptions)
      .status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Error logging in user",
      error: error.message || String(error)
    });
  }
};
