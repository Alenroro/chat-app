import mongoose from "mongoose";

export async function connectDB() {
  await mongoose
    .connect(
      "mongodb+srv://alenroro321:Alenroro05@projects.zc73cuh.mongodb.net/?retryWrites=true&w=majority&appName=projects"
    )
    .then(() => {
      console.log("db connected");
    });
}
