import jwt from "jsonwebtoken";
import User from "../model/user.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    // ✅ Check if token is missing
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // ✅ Verify the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // ✅ Check if token is valid
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // ✅ Find user by ID from the decoded token
    const user = await User.findById(decoded.userId).select("-hashedPassword");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Attach user data to request for further use
    req.user = user; // This allows other routes to access `req.user`

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // ✅ Improved error handling
    console.error("Error in protectRoute middleware:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default protectRoute;
