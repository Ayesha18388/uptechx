import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Why choose us?</h2>
      <div className="content">
        <div className="image-container">
          <img src="/assets/images/safe-removebg-preview.png" alt="Why Choose Us" className="question-img" />
        </div>
        <div className="floating-boxes">
          <div className="floating-box box1">
            <strong>100% Free Learning –</strong> Access high-quality courses, cheatsheets, and resources at no cost.
          </div>
          <div className="floating-box box2">
            <strong>Industry-Relevant Skills –</strong> Learn the latest technologies with hands-on projects.
          </div>
          <div className="floating-box box3">
            <strong>Career Growth Opportunities –</strong> Get access to cheatsheets, scholarships, DSA & aptitude hackathons, and event updates.
          </div>
          <div className="floating-box box4">
            <strong>Stay Updated –</strong> Explore the latest tech news and emerging trends.
          </div>
          <div className="floating-box box5">
            <strong>One-Stop Platform –</strong> Everything you need to kickstart your tech career in one place.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
