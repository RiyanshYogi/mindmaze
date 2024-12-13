import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // For success or error messages

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevents page reload
        setMessage(""); // Clear any previous messages

        try {
            const response = await axios.post("http://localhost:3000/users", { 
                username, 
                password 
            });

            console.log(response)

            if (response.data.success) {
                setMessage("Signup successful! You can now login.");
            } else {
                setMessage(response.data.message || "Something went wrong!");
            }
        } catch (err) {
            setMessage(err.response?.data?.message || "Server error!");
        }
    };

    return (
        <div className="login_container">
            <div className="header_login">
                <h1>MindMaze</h1>
                <p>Signup to MindMaze</p>
            </div>
            <div>
                <form onSubmit={handleSignup} className="form_login" >
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder="Type username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />

                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Type password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />

                    {message && <p className="message">{message}</p>} {/* Show messages */}
                    
                    <div className="form_button">
                        <button type="submit">Sign up</button>
                    </div>
                    <div>
                        <p>Already have an account? <a href="/login">Login here</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};
