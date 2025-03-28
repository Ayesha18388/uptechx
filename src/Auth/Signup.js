import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    // Store user data in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === formData.email);

    if (userExists) {
      setError("User with this email already exists!");
      return;
    }

    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert(`Welcome, ${formData.firstName} ${formData.lastName}!`);
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Join us and start your journey</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
            className="signup-input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
            className="signup-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="signup-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="signup-input"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="signup-input"
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="signup-footer">
          Already have an account? <a href="/login" className="login-link">Login Here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

