import { Version } from "../../schema/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await Version.find();

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const data = new Version({
      name: req.body.name,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Store version successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Version.findOne({ slug: req.params.slug });

    if (!data) throw new Error("Not found version");

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await Version.findById(req.body.id);

    if (!data) throw new Error("Not found version");

    data.name = req.body.name;

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Update version successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const data = await Version.findById(req.params.id);

    if (!data) throw new Error("Not found version");

    await data.deleteOne();

    return res
      .status(200)
      .json({ success: true, message: "Delete version successfully!" });
  } catch (error) {
    return next(error);
  }
};
