const axios = require("axios");

export const leetcode = async(req,res)=>{
    try{
        restatus(200).json({ message: "LeetCode API is working!" });
    }
    catch{
        res.status(500).json({ error: "Internal Server Error" });
    }
};