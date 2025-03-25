import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1InYgn934zsK-zVYHbeSkwn3PcrpcbLY",
  authDomain: "http://uptechx-d31a8.firebaseapp.com",
  projectId: "uptechx-d31a8",
  storageBucket: "http://uptechx-d31a8.firebasestorage.app",
  messagingSenderId: "811608436000",
  appId: "1:811608436000:web:38f3f67f4717ff40673b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    await handleSignup();
  };

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify({ email: user.email, password: formData.password, name: `${formData.firstName} ${formData.lastName}` }));
      alert(`Welcome, ${formData.firstName} ${formData.lastName}!`);
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error during signup:", error);
      setError(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Join us and start your journey</p>
        <div className="divider">or</div>
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

