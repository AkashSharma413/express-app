import mongoose from "mongoose";

export const connectDb = async () => {
  const MONGODB_URI =
    "mongodb+srv://aakashsharma413:aakashsharma413@express.2zdtu.mongodb.net/express";
  await mongoose.connect(MONGODB_URI).then(() => {
    console.log("Database connected");
  });
};
