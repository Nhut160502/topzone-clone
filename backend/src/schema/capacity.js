import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const capacity = new Schema(
  {
    name: { type: String, trim: true, required: true, unique: true },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

configMongoose();

export const Capacity = mongoose.model("capacity", capacity);
