import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const colors = new Schema(
  {
    name: { type: String, trim: true, required: true, unique: true },
    code: { type: String, required: true },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

configMongoose();

export const Colors = mongoose.model("colors", colors);
