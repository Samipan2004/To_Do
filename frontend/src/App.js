import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reg from './assets/Reg.js';
import Login from './assets/Login.js';
import Todo from './assets/Todo.js';
import NotFound from './assets/Notfound.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Reg />} />
        <Route path="/" element={<Login />} />
        <Route path="/todo/:userId" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
