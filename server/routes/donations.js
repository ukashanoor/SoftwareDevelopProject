import express from "express";
import { getDonations, createDonation } from "../controllers/donations.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getDonations);
router.post("/add", verifyToken, createDonation);

export default router;
