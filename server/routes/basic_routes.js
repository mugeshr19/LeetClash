import express from "express";
import {
    leetcode,   
} from "../api_function/leetcode.js";
import { createContest } from "../api_function/createContest.js";
import {appearenceOfContest} from "../api_function/appearenceOfContest.js";

const router = express.Router();
router.get("/profile/:username", leetcode);
router.post("/createContest", createContest);
router.get("/contest/:contestId",appearenceOfContest);

export default router;