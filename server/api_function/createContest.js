import contestSchema from "../models/contestSchema.js";
import mongoose from "mongoose";

const createContest=async(req,res)=>{
    const {contestId,questionNumbers,startTime,endTime,createdBy} = req.body;
    if(
        !contestId||
        !Array.isArray(questionNumbers)||
        !questionNumbers.length===0||
        !startTime||
        !endTime||
        !createdBy
    ){
        return res.status(400).json({message:"All fields are required"});
    }
    if(new Date(startTime)>=new Date(endTime)){
        return res.status(400).json({message:"Start time cannot be greater than end time"});
    }
    try{
        const contest = await Connect.create({
            contestId,
            questionNumbers,
            startTime,
            endTime,
            createdBy,
        });
        res.status(201).json({
            message: "Contest created successfully",
            contest,
        });

    }
    catch(error){
        console.error("Create contest error:", error.message);
        if (error.code === 11000) {
            return res.status(409).json({
                error: "Contest with this ID already exists",
             });
        }

        res.status(500).json({ error: "Failed to create contest" });
    }

};

export {createContest};