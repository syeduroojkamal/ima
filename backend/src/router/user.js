import { Router } from "express";
import { deleteUser, allUsers, info } from "../controller/user.js";
import protectRoute from "../middleware/protectRoute.js";

const userRouter = Router();

userRouter.get("/info", protectRoute, info);
userRouter.post("/delete-user", protectRoute, deleteUser);
userRouter.get("/all-users", protectRoute, allUsers);

export default userRouter;
