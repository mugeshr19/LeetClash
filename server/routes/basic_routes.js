const express = require('express');
const {
    leetcode,   
} = require("../api_function/leetcode");

const router = express.Router();
router.get("/profile/:username", leetcode);

module.export = router;