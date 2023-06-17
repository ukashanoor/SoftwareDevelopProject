import express from "express";
import { getEvents, createEvent } from "../controllers/events.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getEvents);
router.post("/add", verifyToken, createEvent);

export default router;
