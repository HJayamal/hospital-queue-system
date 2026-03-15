require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const queueRoutes = require("./routes/queueRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/queue", queueRoutes);

app.get("/", (req, res) => {
  res.send("Hospital Queue API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});