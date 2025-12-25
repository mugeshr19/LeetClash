import mongoose from "mongoose";

const contestSchema = new mongoose.Schema({
    contestId:{
        type:String,
        required: true,
        unique: true,
    },
    questionNumbers: {
      type: [Number], // multiple questions
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one question is required",
      },
    },
    startTime:{
        type: Date,
        required:true,
    },
    endTime:{
        type: Date,
        required: true,
    },
    createdBy:{
        type: String,
        required: true,
    },
});
export default mongoose.model("Contest", contestSchema);