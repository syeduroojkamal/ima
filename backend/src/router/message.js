import { Router } from "express";
import protectRoute from "../middleware/protectRoute.js";
import { send, allMessages } from "../controller/message.js";

const messageRouter = Router();

messageRouter.post("/send", protectRoute, send);
messageRouter.post("/all-messages", protectRoute, allMessages);

export default messageRouter;
