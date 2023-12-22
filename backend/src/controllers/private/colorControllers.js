import { Colors } from "../../schema/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await Colors.find();

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const data = new Colors({
      name: req.body.name,
      code: req.body.code,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Store color successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Colors.findOne({ slug: req.params.slug });

    if (!data) throw new Error("Not found color");

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await Colors.findById(req.body.id);

    if (!data) throw new Error("Not found color");

    data.name = req.body.name;
    data.code = req.body.code;

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Update color successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const data = await Colors.findById(req.params.id);

    if (!data) throw new Error("Not found color");

    await data.deleteOne();

    return res
      .status(200)
      .json({ success: true, message: "Delete color successfully!" });
  } catch (error) {
    return next(error);
  }
};
