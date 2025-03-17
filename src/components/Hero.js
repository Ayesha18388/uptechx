import React from "react";
import "./Hero.css";

const HeroSection = () => {
  const handleExploreClick = () => {
    const mainSection = document.getElementById("mainsection"); // Target the Mainsection
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  return (
    <section className="hero-section">
      
      {/* Main Image */}
      <img src="/assets/her02-Photoroom.png" alt="Hero" className="hero-image" />

      {/* Hero Text Content */}
      <div className="hero-content">
        <h1>A Gateway to your success.</h1>
        <p>
          "Unlock your potential with free tech courses, scholarships, cheatsheets,
          DSA & Aptitude. Stay updated on the latest hackathons, events, and emerging
          technology news. Learn, grow, and kickstart your career—<strong>all in one place!</strong>"
        </p>
        <button className="explore-btn" onClick={handleExploreClick}>Explore</button>
      </div>
    </section>
  );
};

export default HeroSection;
