import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,  // This will be a hashed password
    required: true
  },

  // Skill Sheet data
  leetcodeSkillSheet: {
    rating: Number,
    contestsAttempted: Number,
    NumberOfProblemSolved: Number,
    successRate: Number,
  },
  codeforcesSkillSheet: {
    rating: Number,
    contestsAttempted: Number,
    streak: Number,
    successRate: Number,
  }
});

export default mongoose.model('User', userSchema);
