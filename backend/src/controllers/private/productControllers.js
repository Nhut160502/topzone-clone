import { Capacity, Products } from "../../schema/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await Products.find();

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Products.findOne({ slug: req.params.slug });

    if (!data) throw new Error("Product not found");

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const data = new Products({
      category: req.body.category,
      subcategory: req.body.subcategory,
      name: req.body.name,
      attribute: req.body.attribute,
      media: req.body.media,
      specifications: req.body.specifications || [],
      needbuy: req.body.needbuy || [],
      combo: req.body.combo,
      description: req.body.description || [],
      reviews: req.body.reviews || null,
      onModel: Capacity,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Store product successfully",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};
