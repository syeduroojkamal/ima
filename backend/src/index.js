import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./router/auth.js";
import userRouter from "./router/user.js";
import messageRouter from "./router/message.js";
import { connectDB } from "./lib/db.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Allow only your frontend
    credentials: true, // Allow cookies and credentials
  })
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

app.listen(process.env.PORT, () => {
  console.log(`express port: ${process.env.PORT}`);
  connectDB();
});
