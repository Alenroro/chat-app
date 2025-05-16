import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("db connected");
  });
}
