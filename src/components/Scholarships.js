import React, { useEffect, useState } from "react";
import "./Scholarships.css";

const staticScholarships = [
  {
    id: "static1",
    title: "National Merit Scholarship",
    offeredBy: "Government of India",
    eligibility: "Students with 90% or above in 12th grade",
    benefits: "₹50,000 per year",
    link: "https://www.scholarships.gov.in",
  },
  {
    id: "static2",
    title: "AICTE Pragati Scholarship",
    offeredBy: "AICTE",
    eligibility: "Female students pursuing technical education",
    benefits: "₹30,000 per year",
    link: "https://www.aicte-india.org",
  },
  
];

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);

  // Fetch scholarships from the backend
  const fetchScholarships = async () => {
    try {
      const res = await fetch("http://localhost:5000/scholarships");
      if (res.ok) {
        const data = await res.json();
        setScholarships([...staticScholarships, ...data]);
      } else {
        console.error("Failed to fetch scholarships:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching scholarships:", error);
      setScholarships(staticScholarships);
    }
  };

  useEffect(() => {
    fetchScholarships();
  }, []); // Fetch data when the component mounts

  return (
    <div>
      <h1 className="title">Available Scholarships</h1>
      <div className="scholarship-list">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="scholarship-item">
            <h3>{scholarship.title}</h3>
            <p>Offered By: {scholarship.offeredBy}</p>
            <p>Eligibility: {scholarship.eligibility}</p>
            <p>Benefits: {scholarship.benefits}</p>
            <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;