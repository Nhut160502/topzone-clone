import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const subCategories = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
      trim: true,
    },
    name: { type: String, trim: true, required: true, unique: true },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

configMongoose();

export const SubCategories = mongoose.model("SubCategories", subCategories);
