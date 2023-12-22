import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const categories = new Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    thumbnail: { type: String, trim: true },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

configMongoose();

export const Categories = mongoose.model("Categories", categories);
