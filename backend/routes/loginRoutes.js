const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Login user (basic authentication)
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;