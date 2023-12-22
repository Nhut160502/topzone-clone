import bodyParser from "body-parser";
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
import { connectDatabase } from "./src/configs/database.js";
import routers from "./src/routers/private/index.js";
import errorHandler from "./src/middlewares/errorHandler.js";

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./public"));

connectDatabase();

app.use("/auth/api", routers);
app.use(errorHandler);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server running on ${process.env.HOST}:${process.env.PORT}`);
});
