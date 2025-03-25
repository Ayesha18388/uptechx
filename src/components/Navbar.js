import React, { useState, useEffect } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa"; // Import search and profile icons
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import custom CSS for styling
import logo from "./logo.png"; // Import the logo into Navbar.js

const Navbar = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [searchResults, setSearchResults] = useState([]); // Stores matched search results
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();

  // Check login status on page load
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle input change
 // eslint-disable-next-line
  const handleSearchChange = (event) => {
    // eslint-disable-next-line
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]); // Clear results if input is empty
      return;
    }

    const storedData = JSON.parse(localStorage.getItem("searchData")) || [];

    // Filter results safely
    const filteredResults = storedData.filter(
      (item) => item.name && item.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log("Search Term:", searchTerm);
    console.log("Stored Data:", storedData);
    console.log("Filtered Results:", filteredResults);

    setSearchResults(filteredResults.length > 0 ? filteredResults : ["No results found"]);
  };

  // Handle search action
  const handleSearchSubmit = () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); // Clear results if search term is empty
      return;
    }

    const storedData = JSON.parse(localStorage.getItem("searchData")) || [];

    // Filter matches safely
    const filteredResults = storedData.filter(
      (item) => item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("Filtered Results:", filteredResults); // Debugging

    setSearchResults(filteredResults.length > 0 ? filteredResults : ["No results found"]);
  };

  // Function to navigate when clicking a search result
  const handleResultClick = (result) => {
    if (typeof result === "string" && result === "No results found") {
      return; // Do nothing if "No results found" is clicked
    }

    if (result.category === "Courses") {
      navigate(`/courses?query=${encodeURIComponent(result.name)}`);
    } else if (result.category === "Cheatsheets") {
      navigate(`/cheatsheets?query=${encodeURIComponent(result.name)}`);
    } else if (result.category === "DSAandAptitude") {
      navigate(`/dsa-and-aptitude?query=${encodeURIComponent(result.name)}`);
    } else {
      console.error("Unknown category:", result.category);
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    localStorage.removeItem("loggedIn"); // Clear logged-in status
    setIsLoggedIn(false); // Update state
    alert("You have been logged out."); // Notify the user
    navigate("/login"); // Redirect to login page
  };

  // Helper function to highlight the matching part of the search term
  const highlightMatch = (text, query) => {
    if (typeof text !== "string" || !query) {
      return text; // Return the original text if it's not a string or query is empty
    }
  
    const regex = new RegExp(`(${query})`, "gi"); // Case-insensitive match
    return text.replace(regex, `<span class="highlight">$1</span>`); // Wrap the match in a span with a highlight class
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid d-flex align-items-center">
        {/* Logo on the left */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="UpTechX Logo" className="logo" />
        </a>

        {/* Search Bar in the center */}
        <div className="flex-grow-1 d-flex justify-content-center">
          <div className="search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSearchSubmit();
              }}
            />
            <FaSearch className="search-icon" onClick={handleSearchSubmit} />

            {/* Clear Button */}
            {searchTerm && (
              <button className="clear-btn" onClick={() => setSearchTerm("")}>
                ✖
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {searchTerm && (
            <div className={`search-results ${searchResults.length > 0 ? "show" : ""}`}>
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="search-item"
                  onClick={() => handleResultClick(result)}
                >
                  {typeof result === "string" ? (
                    <span>{result}</span> // Display plain text for "No results found"
                  ) : (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightMatch(result.name, searchTerm),
                      }}
                    ></span>
                  )}
                </div>
              ))}
            </div>
          )}
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

export default Navbar;




