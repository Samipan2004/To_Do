const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Register user
router.post("/", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

module.exports = router;