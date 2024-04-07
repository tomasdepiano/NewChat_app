//all routes related to the user

import express from "express";
import { registerUser } from "../controllers/userControllers.js";
import { authUser } from "../controllers/userControllers.js";
import { allUsers } from "../controllers/userControllers.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

export default router;
