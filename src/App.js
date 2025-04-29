import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Cheatsheets from "./components/Cheatsheets";
import DSAandAptitude from "./components/DSAandAptitude";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Scholarships from "./components/Scholarships"; // Import Scholarships
import Hackathonsandevents from "./components/Hackathonsandevents"; // Import Hackathons and Events
import TechNews from "./components/TechNews"; // Import Tech News
import AdminPage from "./components/AdminPage"; // Import Admin Page

const App = () => {
  const [data, setData] = useState({
    courses: [],
    cheatsheets: [],
    dsaAndAptitude: [],
  }); // State to hold data from the dummy database
  const [savedItems, setSavedItems] = useState([]); // Shared state for saved items

  // Fetch data from the dummy database (db.json)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json"); // Ensure the path to db.json is correct
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData({
          courses: result.courses || [],
          cheatsheets: result.cheatsheets || [],
          dsaAndAptitude: result.dsaAndAptitude || [],
        });
      } catch (error) {
        console.error("Error fetching data from dummy database:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <AppContent data={data} savedItems={savedItems} setSavedItems={setSavedItems} />
    </Router>
  );
};

const AppContent = ({ data, savedItems, setSavedItems }) => {
  const location = useLocation(); // Move useLocation inside Router

  return (
    <>
      {/* Conditionally render Navbar */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={
            <Courses
              data={data.courses}
              savedItems={savedItems}
              setSavedItems={setSavedItems}
            />
          }
        />
        <Route path="/cheatsheets" element={<Cheatsheets data={data.cheatsheets} />} />
        <Route path="/dsa-and-aptitude" element={<DSAandAptitude data={data.dsaAndAptitude} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Scholarships" element={<Scholarships />} /> {/* Scholarships Route */}
        <Route path="/Hackathonsandevents" element={<Hackathonsandevents />} /> {/* Hackathons Route */}
        <Route path="/TechNews" element={<TechNews />} /> {/* Tech News Route */}
        <Route path="/AdminPage" element={<AdminPage />} /> {/* Admin Page Route */}
      </Routes>
      <Footer /> {/* Include Footer */}
    </>
  );
};

export default App;