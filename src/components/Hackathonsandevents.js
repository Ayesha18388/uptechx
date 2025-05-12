import React, { useEffect, useState } from "react";
import "./Hackathonsandevents.css";

const staticHackathons = [
  {
    id: "static1",
    title: "HackIndia 2025",
    dates: "To be announced",
    mode: "Online",
    location: "Remote",
    description: "India’s largest Web3 and AI hackathon.",
    link: "https://www.hackindia.com",
  },
  {
    id: "static2",
    title: "TechFest 2025",
    dates: "March 15-17, 2025",
    mode: "Offline",
    location: "Mumbai",
    description: "A festival of technology and innovation.",
    link: "https://www.techfest.com",
  },
  // Add more static hackathons here if needed
];

const Hackathonsandevents = () => {
  const [hackathons, setHackathons] = useState([]);

  // Fetch hackathons from the backend
  const fetchHackathons = async () => {
    try {
      const res = await fetch("http://localhost:5000/hackathons");
      if (res.ok) {
        const data = await res.json();
        // Combine static hackathons with fetched hackathons
        setHackathons([...staticHackathons, ...data]);
      } else {
        console.error("Failed to fetch hackathons:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching hackathons:", error);
      // If fetching fails, fallback to static hackathons
      setHackathons(staticHackathons);
    }
  };

  useEffect(() => {
    fetchHackathons();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Upcoming Hackathons and Tech Events</h1>
      <div className="event-list">
        {hackathons.map((event, index) => (
          <div key={index} className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p><strong>Dates:</strong> {event.dates}</p>
            <p><strong>Mode:</strong> {event.mode}</p>
            {event.location && <p><strong>Location:</strong> {event.location}</p>}
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Registration:</strong> {event.registration}</p>
            <p>
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                More Information
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathonsandevents;