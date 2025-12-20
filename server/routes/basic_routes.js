import express from "express";
import {
    leetcode,   
} from "../api_function/leetcode.js";

const router = express.Router();
router.get("/profile/:username", leetcode);

export default router;