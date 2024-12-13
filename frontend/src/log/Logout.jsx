import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault(); // Prevent the default anchor link behavior

        // Display a confirmation alert
        const confirmLogout = window.confirm("Are you sure you want to log out?");

        if (confirmLogout) {
            // If the user confirms, clear the token and redirect
            localStorage.removeItem("token");
            localStorage.clear();
            navigate("/"); // Navigate to the login page
        }
    };

    return (
            <a href="#" onClick={handleLogout}>Logout</a>
    );
};

export default Logout;
