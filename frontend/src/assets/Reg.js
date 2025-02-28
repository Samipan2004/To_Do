import {useState} from 'react';
import "./Reg.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Reg=()=> {
  const [username, setUsername]=useState();
  const [email, setEmail]=useState();
  const [password, setPassword] =useState();
  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/register', {username, email, password})
    .then(result=>{
      console.log(result);
      if(result.data==="Already registerd"){
        alert("Email already Registered");
        navigate('/');
      }
      else{
        alert("Registered Successfully");
        navigate('/');
      }
    })
    .catch(err=> console.log(err));
  }
  
  return (
   <div className="container">
    <h2 className='head'>Register</h2>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Name"
        className="input" 
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        className="input"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input 
        type='password'
        placeholder='Password'
        className="input"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='submit' className="button">Register</button>
      <p className="question">Already have an account? <a href="/">Login</a></p>
    </form>
   </div>
  )
}

export default Reg;
