import express from "express";
import {
    leetcode,   
} from "../api_function/leetcode.js";
import {leetquestion } from "../api_function/leetquestion.js";
import { createContest } from "../api_function/createContest.js";

const router = express.Router();
router.get("/profile/:username", leetcode);
router.get("/question/:number", leetquestion);
r
export default router;