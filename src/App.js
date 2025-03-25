import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Courses from "./components/Courses";
import Hackathonsandevents from "./components/Hackathonsandevents";
import TechNews from "./components/TechNews";
import Scholarships from "./components/Scholarships";
import Cheatsheets from "./components/Cheatsheets";
import DSAandAptitude from "./components/DSAandAptitude";
import { searchData } from "./components/searchData"; // Import searchData
import ProfileSaved from "./components/ProfileSaved";
import WebDevelopmentCheatsheets from "./components/WebDevelopmentCheatsheets"; // Import the new component
import FullstackDevelopment from "./components/FullstackDevelopment"; // Import the new component


const App = () => {
  const [savedItems, setSavedItems] = useState([]); // Shared state for saved items

  useEffect(() => {
    // Store searchData in localStorage if not already present
    if (!localStorage.getItem("searchData")) {
      localStorage.setItem("searchData", JSON.stringify(searchData));
    }
  }, []);

  return (
    <Router>
      <Navbar /> {/* Include Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses savedItems={savedItems} setSavedItems={setSavedItems} />} />
        <Route path="/Hackathonsandevents" element={<Hackathonsandevents />} />
        <Route path="/technews" element={<TechNews />} />
        <Route path="/scholarships" element={<Scholarships savedItems={savedItems} setSavedItems={setSavedItems} />} />
        <Route path="/cheatsheets" element={<Cheatsheets />} />
        <Route path="/dsa-and-aptitude" element={<DSAandAptitude />} />
        <Route path="/profile-saved" element={<ProfileSaved savedItems={savedItems} />} />
        <Route path="/cheatsheets/web-development" element={<WebDevelopmentCheatsheets />} /> {/* Add this line */}
        <Route path="/cheatsheets/full-stack-development" element={<FullstackDevelopment />} /> {/* Add this line */}

      </Routes>
      <Footer /> {/* Include Footer */}
    </Router>
  );
};

export default App;
