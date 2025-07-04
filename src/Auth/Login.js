import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [adminDetails, setAdminDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch admin details from db.json
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setAdminDetails(data.admin))
      .catch((err) => console.error("Failed to fetch admin details:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (adminDetails && formData.email === adminDetails.email && formData.password === adminDetails.password) {
      alert("Welcome Admin!");
      navigate("/AdminPage"); // Redirect to AdminPage
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (!user) {
      setError("Invalid email or password!");
      return;
    }

    alert(`Welcome back, ${user.firstName} ${user.lastName}!`);
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="login-footer">
          Don't have an account? <a href="/signup" className="signup-link">Sign Up Here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;