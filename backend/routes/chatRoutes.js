import express from "express";
import protect from "../middleware/authMiddleware.js";
import { accessChat } from "../controllers/chatControllers.js";
import { fetchChats } from "../controllers/chatControllers.js";
import { createGroupChat } from "../controllers/chatControllers.js";
import { renameGroup } from "../controllers/chatControllers.js";
import { addToGroup } from "../controllers/chatControllers.js";
import { removeFromGroup } from "../controllers/chatControllers.js";

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

export default router;
