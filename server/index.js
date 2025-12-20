import express from "express";
import cors from "cors";
import basicRoutes from "./routes/basic_routes.js";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);  
app.use(express.json());
app.use("/api", basicRoutes);


const port = 3500;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
