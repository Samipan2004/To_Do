import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Todo.css";
import axios from "axios";

const Todo = () => {
  const { userId } = useParams();
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/todos/${userId}`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    try {
      const response = await axios.post(`http://localhost:3001/todos/${userId}`, { text: task });
      setTodos([...todos, response.data]);
      setTask("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((t) => t._id === id);
    if (!todo) return;

    try {
      const response = await axios.patch(`http://localhost:3001/todos/${userId}/${id}`, {
        completed: !todo.completed,
      });
      setTodos(todos.map((t) => (t._id === id ? response.data : t)));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${userId}/${id}`);
      setTodos(todos.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="head">Your To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task here"
          className="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="button">Add</button>
      </form>
      <ul className="list">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <span onClick={() => toggleComplete(todo._id)}>{todo.text}</span>
            <button className="button" onClick={() => deleteTodo(todo._id)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
