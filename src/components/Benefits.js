import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benefits-section">
      <h2>Benefits</h2>
      <div className="benefit-item animate" style={{ left: "115px", top: "138px" }}>
        <img src="/image/tech.jpg" alt="Hands on resources" className="fade-in" />
        <p className="text-fade">Hands on resources</p>
      </div>
      <div className="benefit-item animate" style={{ left: "450px", top: "138px" }}>
        <img src="/image/per.jpg" alt="Career growth" className="fade-in" />
        <p className="text-fade">Career growth</p>
      </div>
      <div className="benefit-item animate" style={{ left: "843px", top: "90px" }}>
        <img src="/image/safever.jpg" alt="Safe and verified" className="fade-in" />
        <p className="text-fade">Safe and verified</p>
      </div>
      <div className="benefit-item animate" style={{ left: "1200px", top: "90px" }}>
        <img src="/image/certification.jpg" alt="Certification" className="fade-in" />
        <p className="text-fade">Certification</p>
      </div>
    </div>
  );
};

export default Benefits;
