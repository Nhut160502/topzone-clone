import express from "express";
import { categoryControllers } from "../../controllers/private/index.js";
import { upload } from "../../configs/multer.js";

const categories = express.Router();

categories.get("/", categoryControllers.index);

categories.get("/:slug", categoryControllers.show);

categories.delete("/:id", categoryControllers.destroy);

categories.post(
  "/",
  upload("category").single("file"),
  categoryControllers.store
);

categories.put(
  "/",
  upload("category").single("file"),
  categoryControllers.update
);

export default categories;
