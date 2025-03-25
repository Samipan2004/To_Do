const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/todos", todoRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);

// MongoDB Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));

app.get("/health", (req, res) => {
  res.status(200).send("Server is alive!");
});