import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

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
import { Home } from "./Home";
import { Todo } from "./projects/todo/Todo";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />

                {/* Protected routes */}
                <Route 
                    path="/home" 
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/todo" 
                    element={
                        <PrivateRoute>
                            <Todo />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/computer" 
                    element={
                        <PrivateRoute>
                            <Quiz data={computer} />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/database" 
                    element={
                        <PrivateRoute>
                            <Quiz data={database} />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/web" 
                    element={
                        <PrivateRoute>
                            <Quiz data={web} />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/dsa" 
                    element={
                        <PrivateRoute>
                            <Quiz data={dsa} />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/cn" 
                    element={
                        <PrivateRoute>
                            <Quiz data={cn} />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/os" 
                    element={
                        <PrivateRoute>
                            <Quiz data={os} />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/corejava" 
                    element={
                        <PrivateRoute>
                            <Quiz data={corejava} />
                        </PrivateRoute>
                    } 
                />
            </Routes>
        </Router>
    );
};

export default App;
