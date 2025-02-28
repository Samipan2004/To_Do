import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

const NotFound = () => {
  return (
    <div className="n-container">
      <h1 className="n-heading">404</h1>
      <p className="n-text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="n-button">Go to Login</Link>
    </div>
  );
};

export default NotFound;
