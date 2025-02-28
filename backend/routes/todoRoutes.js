const express = require("express");
const Todo = require("../models/Todo"); // Import Todo model

const router = express.Router();

// Get all todos for a user
router.get("/:userId", async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.params.userId });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

// Add a new todo
router.post("/:userId", async (req, res) => {
  try {
    const newTodo = new Todo({
      userId: req.params.userId,
      text: req.body.text,
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to add todo" });
  }
});

// Update todo
router.patch("/:userId/:todoId", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.todoId,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
});

// Delete todo
router.delete("/:userId/:todoId", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.todoId);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

module.exports = router;
