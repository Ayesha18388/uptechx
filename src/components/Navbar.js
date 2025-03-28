import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; // Import profile icon
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import custom CSS for styling
import logo from "./logo.png"; // Import the logo into Navbar.js

const Navbar = ({ toggleSidebar }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();

  // Check login status on page load
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    localStorage.removeItem("loggedIn"); // Clear logged-in status
    setIsLoggedIn(false); // Update state
    alert("You have been logged out."); // Notify the user
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid d-flex align-items-center">
        {/* Logo on the left */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="UpTechX Logo" className="logo" />
        </a>

        {/* Navigation Links */}
        <div className="navbar-nav mx-auto">
          <a href="/" className="nav-link text-dark mx-3">
            Home
          </a>
          <a href="/about.html" className="nav-link text-dark mx-3">
            About Us
          </a>
          <a href="/contact-us.html" className="nav-link text-dark mx-3">
            Contact Us
          </a>
        </div>

        {/* Login & Sign Up / Logout */}
        <div className="d-flex align-items-center">
          {isLoggedIn ? (
            <>
              <button className="btn btn-danger mx-3" onClick={handleLogout}>
                Logout
              </button>
              <FaUserCircle
                className="profile-icon mx-3"
                onClick={toggleSidebar}
              />
            </>
          ) : (
            <>
              <a href="/login" className="text-dark mx-3 text-decoration-none">
                Login
              </a>
              <a href="/signup" className="btn btn-primary sign-up-btn">
                Sign Up
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Navbar />}
      {/* Other components and routes */}
    </>
  );
};

export default App;