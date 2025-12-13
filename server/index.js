const express = require("express");
const cors = require("cors");
const basicRoutes = require("./routes/basic_routes");

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
