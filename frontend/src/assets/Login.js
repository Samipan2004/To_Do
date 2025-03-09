import { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      if (response.data && response.data.user._id) {
        console.log(response.data);
        alert('Login Success');
        navigate(`/todo/${response.data.user._id}`);
      } else {
        alert("Incorrect email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2 className='head'>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          className="input" 
          id="exampleInputEmail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          className="input"
          id="exampleInputPassword1"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type='submit' className="button">Login</button>
      </form>
      <p className="question">Don't have an account? <span onClick={() => navigate('/register')} style={{ cursor: "pointer", color: "blue" }}>Register</span></p>
    </div>
  );
};

export default Login;
