import express from "express";
import { subCategoryControllers } from "../../controllers/private/index.js";

const subCategories = express.Router();

subCategories.get("/", subCategoryControllers.index);
subCategories.post("/", subCategoryControllers.store);
subCategories.put("/", subCategoryControllers.update);
subCategories.get("/:slug", subCategoryControllers.show);
subCategories.delete("/:id", subCategoryControllers.destroy);

export default subCategories;
