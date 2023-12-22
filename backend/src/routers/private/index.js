import express from "express";
import categories from "./categories.js";
import subCategories from "./subCategories.js";
import products from "./products.js";

const routers = express.Router();

routers.use("/category", categories);
routers.use("/sub", subCategories);
routers.use("/product", products);

export default routers;
