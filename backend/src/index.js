import express from "express";
import helloRouter from "./router/hello.js";
import authRouter from "./router/auth.js";
import { connectDB } from "./lib/db.js";

const app = express();
app.use(express.json());

app.use("/api/hello", helloRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`express port: ${process.env.PORT}`);
  connectDB();
});
