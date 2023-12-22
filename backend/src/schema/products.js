import mongoose from "mongoose";
import { configMongoose } from "../configs/mongoose.js";

const Schema = mongoose.Schema;

const products = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      required: true,
      trim: true,
    },
    subcategory: {
      type: Schema.Types.ObjectId,
      ref: "SubCategories",
      required: true,
      trim: true,
    },
    name: { type: String, required: true, trim: true },
    slug: { type: String, slug: "name" },
    attribute: [
      {
        capacity: {
          type: Schema.Types.ObjectId,
          refPath: "onModel",
          required: false,
          trim: true,
          set: (v) => (v === "undefined" ? null : v),
        },
        colors: {
          type: Schema.Types.ObjectId,
          ref: "Colors",
          required: true,
          trim: true,
        },
        price: { type: Number, required: true, trim: true },
        stock: { type: Number, required: true, trim: true },
        price: { type: Number, required: true, trim: true, default: 0 },
        sale: { type: Number, required: true, trim: true, default: 0 },
      },
    ],
    media: [
      {
        colors: {
          type: Schema.Types.ObjectId,
          ref: "Colors",
          required: true,
          trim: true,
        },
        gallery: [{ type: String }],
      },
    ],
    specifications: [
      {
        type: { type: Schema.Types.ObjectId, ref: "Specifications" },
        description: [{ tpye: String }],
      },
    ],
    needbuy: [
      {
        type: Schema.Types.ObjectId,
        ref: "Products",
      },
    ],
    combo: [
      {
        capacity: {
          type: Schema.Types.ObjectId,
          refPath: "onModel",
          required: false,
          trim: true,
          set: (v) => (v === "undefined" ? null : v),
        },
        product: {
          type: Schema.Types.ObjectId,
          ref: "Products",
        },
        sale: { type: Number },
      },
    ],
    description: [{ type: String }],
    reviews: { type: String },
    isActive: { type: Boolean, default: true },
    onModel: {
      type: String,
      required: true,
      enum: ["Capacity", "Version"],
    },
  },
  { timestamps: true }
);

configMongoose();

export const Products = mongoose.model("products", products);
