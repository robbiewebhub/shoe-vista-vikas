import mongoose from "mongoose";
import dotenv from "dotenv";
import Products from "../models/productModel.js";
import productsData from "./products.seed.js";

dotenv.config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await Products.deleteMany();
    console.log("Existing products cleared");

    await Products.insertMany(productsData);
    console.log("Dummy products inserted");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();
