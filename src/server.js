import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 5000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello from LeetClash backend!');
});

app.listen(5000, () => {
  console.log('✅ Server is running on port 5000');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));