import { Router } from "express";
import { hello } from "../controller/hello.js";

const helloRouter = Router();

helloRouter.get("/", hello);

export default helloRouter;
