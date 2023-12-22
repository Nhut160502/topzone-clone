import { Capacity } from "../../schema/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await Capacity.find();

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const data = new Capacity({
      name: req.body.name,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Store capacity successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await Capacity.findOne({ slug: req.params.slug });

    if (!data) throw new Error("Not found capacity");

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await Capacity.findById(req.body.id);

    if (!data) throw new Error("Not found capacity");

    data.name = req.body.name;

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Update capacity successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const data = await Capacity.findById(req.params.id);

    if (!data) throw new Error("Not found capacity");

    await data.deleteOne();

    return res
      .status(200)
      .json({ success: true, message: "Delete capacity successfully!" });
  } catch (error) {
    return next(error);
  }
};
