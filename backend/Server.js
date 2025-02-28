const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/todos", todoRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb+srv://{Username}:{Password}@cluster0.qz9yt.mongodb.net/todo_app")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(3001, () => console.log(`Server running on port http://127.0.0.1:3001/`));