import { Home } from "./Home";
import { Todo } from "./projects/todo/Todo";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Quiz from './projects/mindmaze/Quiz'
import { database } from "./assets/database";
import { computer } from "./assets/computer";
import { web } from "./assets/web";
import { dsa } from "./assets/dsa";
import { cn } from "./assets/cn";
import { os } from "./assets/os";
import { corejava } from "./assets/corejava";
import { Login } from "./log/Login";
import { Welcome } from "./Welcome";
import { Signup } from "./log/Signup";


const App = () => {

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />

        
        <Route path="/computer" element={<Quiz data={computer} />} />
        <Route path="/database" element={<Quiz data={database} />} />
        <Route path="/web" element={<Quiz data={web} />} />
        <Route path="/dsa" element={<Quiz data={dsa} />} />
        <Route path="/cn" element={<Quiz data={cn} />} />
        <Route path="/os" element={<Quiz data={os} />} />
        <Route path="/corejava" element={<Quiz data={corejava} />} />
        
      </Routes>
    </Router>
  )
}

export default App;
