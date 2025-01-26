import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB host: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
}
