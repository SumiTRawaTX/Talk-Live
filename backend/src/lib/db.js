// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log("MongoDB connection error:", error);
//   }
// };

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // 🔥 match .env
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
  }
};
