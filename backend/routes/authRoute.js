import express from "express";
import { register , login } from "../authControl.js";
import { Router } from "express";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
// router.post("/logout", logout)

export default router;