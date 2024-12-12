import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // React Router hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        setError(""); // Clear any previous errors

        try {
            const response = await axios.post("http://localhost:3000/login", {
                username,
                password,
            });

            if (response.status === 200 && response.data.token) {
                localStorage.setItem("token", response.data.token);
                // alert("Login Successful");
                navigate("/home"); // Programmatically navigate to /home
            } else {
                setError(response.data.message || "Unexpected error occurred.");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Server error! Please try again later.");
        }
    };

    return (
        <>
            <div className="login_container">
                <div className="header_login">
                    <h1>MindMaze</h1>
                    <p>Login to MindMaze</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Type username"
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Type password"
                        />

                        {error && <p className="error">{error}</p>} {/* Show error messages */}

                        <div className="form_button">
                            <button type="submit">Sign In</button>
                        </div>
                        <div>
                            <p>
                                {`If you don't have an account,`}{" "}
                                <a href="/signup">sign up here</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
