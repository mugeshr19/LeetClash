import Contest from "../models/Contest.js";
import { leetquestion } from "./leetquestion.js";

const appearenceOfContest = async(req,res)=>{
    const {contestId} = req.params;

    try{
        const contest = await Contest.findOne({contestId});
        if(!contest){
            return res.status(404).json({error:"Contest not found"});
        }
        const now = new Date();

        if(now<contest.startTime){
            return res.status(400).json({message:"Contest has not started yet"});
        }
        if (now > contest.endTime) {
            return res.status(403).json({ message: "Contest ended" });
        }
        const questions = await Promise.all(
            contest.questionNumbers.map((qn) =>
            leetquestion(qn)
            )
        );
        res.status(200).json({
            contestId,
            startTime: contest.startTime,
            endTime: contest.endTime,
            questions, 
        });
    }
    catch(error){
        console.error("Error fetching contest:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export {appearenceOfContest};