import { Specific } from "../../schema/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await Specific.find();

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const data = new Specific({
      name: req.body.name,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Store specific successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Specific.findOne({ slug: req.params.slug });

    if (!data) throw new Error("Not found specific");

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await Specific.findById(req.body.id);

    if (!data) throw new Error("Not found specific");

    data.name = req.body.name;

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Update specific successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const data = await Specific.findById(req.params.id);

    if (!data) throw new Error("Not found specific");

    await data.deleteOne();

    return res
      .status(200)
      .json({ success: true, message: "Delete specific successfully!" });
  } catch (error) {
    return next(error);
  }
};
