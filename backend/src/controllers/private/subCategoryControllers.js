import { SubCategories } from "../../schema/index.js";

export const index = async (req, res, next) => {
  try {
    const data = await SubCategories.find();
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const store = async (req, res, next) => {
  try {
    const data = new SubCategories({
      category: req.body.category,
      name: req.body.name,
    });

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Store sub category successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const data = await SubCategories.findOne({ slug: req.params.slug });

    if (!data) throw new Error("Not found sub category");

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const data = await SubCategories.findById(req.body.id);

    if (!data) throw new Error("Not found sub category");

    data.category = req.body.category || data.category;
    data.name = req.body.name;

    await data.save();

    return res.status(200).json({
      success: true,
      message: "Update sub category successfully!",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const data = await SubCategories.findById(req.params.id);

    if (!data) throw new Error("Not found sub category");

    await data.deleteOne();

    return res
      .status(200)
      .json({ success: true, message: "Delete sub category successfully!" });
  } catch (error) {
    return next(error);
  }
};
