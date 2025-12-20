import express from "express";
import {
    leetcode,   
} from "../api_function/leetcode.js";
import {leetquestion } from "../api_function/leetquestion.js";

const router = express.Router();
router.get("/profile/:username", leetcode);
router.get("/question/:number", leetquestion);

export default router;