import exporess from "express";
import { productControllers } from "../../controllers/private/index.js";

const products = exporess.Router();

products.get("/", productControllers.index);

export default products;
