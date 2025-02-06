import { Router } from "express";
import { signUp, login, logout } from "../controller/auth.js";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
