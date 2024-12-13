import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // Check for token in localStorage

    if (!token) {
        // If no token, redirect to login ("/")
        return <Navigate to="/" replace />;
    }

    // If token exists, render the child component
    return children;
};

export default PrivateRoute;
