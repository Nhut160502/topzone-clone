import { Categories } from "../../schema/index.js";
import fs from "fs";
import { urlImage } from "../../configs/urlImage.js";

export const index = async (req, res, next) => {
  try {
    const data = await Categories.find();

    data.map((item) => (item.thumbnail = urlImage("category", item.thumbnail)));

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    let thumbnail = null;

    if (req.file) thumbnail = req.file.filename;

    const data = new Categories({
      name: req.body.name,
      thumbnail: thumbnail,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      data: data,
      message: "Store category successfully!",
    });
  } catch (error) {
    if (req.file) {
      const filePath = `public/category/${req.file.filename}`;
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
    }
    console.log(error);
    return next(error);
  }
};

export const show = async (req, res, next) => {
  console.log(req.params);
  try {
    const data = await Categories.findOne({ slug: req.params.slug });
    if (!data) {
      throw new Error("Not found!");
    }
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await Categories.findById(req.body.id);

    data.name = req.body.name;

    if (req.file) {
      const filePath = `public/category/${data.thumbnail}`;
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
      data.thumbnail = req.file.filename;
    }

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Update category successfully!",
      data: data,
    });
  } catch (error) {
    if (req.file) {
      const filePath = `public/category/${req.file.filename}`;
      console.log(filePath);
      fs.existsSync(filePath) && fs.unlinkSync(filePath);
    }
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const data = await Categories.findById(req.params.id);

    if (!data) throw new Error("Not found category!");

    const filePath = `public/category/${data.thumbnail}`;

    fs.existsSync(filePath) && fs.unlinkSync(filePath);

    await data.deleteOne();

    return res
      .status(200)
      .json({ success: true, message: "Delete category successfully!" });
  } catch (error) {
    return next(error);
  }
};
