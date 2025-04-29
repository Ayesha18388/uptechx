import React, { useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [hackathons, setHackathons] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [trends, setTrends] = useState([]);

  const [newHackathon, setNewHackathon] = useState({
    title: "",
    dates: "",
    mode: "",
    location: "",
    description: "",
    link: "",
  });

  const [newScholarship, setNewScholarship] = useState({
    title: "",
    offeredBy: "",
    eligibility: "",
    benefits: "",
    link: "",
  });

  const [newTrend, setNewTrend] = useState({
    title: "",
    description: "",
    source: "",
    link: "",
  });

  const handleAddItem = (type, newItem, setItems, items) => {
    if (Object.values(newItem).some((value) => value === "")) {
      alert("Please fill out all fields.");
      return;
    }
    setItems([...items, { ...newItem, id: Date.now() }]);
    if (type === "Hackathon") setNewHackathon({ title: "", dates: "", mode: "", location: "", description: "", link: "" });
    if (type === "Scholarships") setNewScholarship({ title: "", offeredBy: "", eligibility: "", benefits: "", link: "" });
    if (type === "TechNews") setNewTrend ({ title: "", description: "", source: "", link: "" });
  };

  const handleRemoveItem = (id, setItems, items) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>

      {/* Hackathons Section */}
      <div className="admin-section">
        <h2>Manage Hackathons</h2>
        <input type="text" placeholder="Title" value={newHackathon.title} onChange={(e) => setNewHackathon({ ...newHackathon, title: e.target.value })} />
        <input type="text" placeholder="Dates" value={newHackathon.dates} onChange={(e) => setNewHackathon({ ...newHackathon, dates: e.target.value })} />
        <input type="text" placeholder="Mode" value={newHackathon.mode} onChange={(e) => setNewHackathon({ ...newHackathon, mode: e.target.value })} />
        <input type="text" placeholder="Location" value={newHackathon.location} onChange={(e) => setNewHackathon({ ...newHackathon, location: e.target.value })} />
        <input type="text" placeholder="Description" value={newHackathon.description} onChange={(e) => setNewHackathon({ ...newHackathon, description: e.target.value })} />
        <input type="text" placeholder="Link" value={newHackathon.link} onChange={(e) => setNewHackathon({ ...newHackathon, link: e.target.value })} />
        <button onClick={() => handleAddItem("hackathon", newHackathon, setHackathons, hackathons)}>Add Hackathon</button>
        <div className="item-list">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="item-container">
              <p>{hackathon.title}</p>
              <button onClick={() => handleRemoveItem(hackathon.id, setHackathons, hackathons)}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      {/* Scholarships Section */}
      <div className="admin-section">
        <h2>Manage Scholarships</h2>
        <input type="text" placeholder="Title" value={newScholarship.title} onChange={(e) => setNewScholarship({ ...newScholarship, title: e.target.value })} />
        <input type="text" placeholder="Offered By" value={newScholarship.offeredBy} onChange={(e) => setNewScholarship({ ...newScholarship, offeredBy: e.target.value })} />
        <input type="text" placeholder="Eligibility" value={newScholarship.eligibility} onChange={(e) => setNewScholarship({ ...newScholarship, eligibility: e.target.value })} />
        <input type="text" placeholder="Benefits" value={newScholarship.benefits} onChange={(e) => setNewScholarship({ ...newScholarship, benefits: e.target.value })} />
        <input type="text" placeholder="Link" value={newScholarship.link} onChange={(e) => setNewScholarship({ ...newScholarship, link: e.target.value })} />
        <button onClick={() => handleAddItem("scholarship", newScholarship, setScholarships, scholarships)}>Add Scholarship</button>
        <div className="item-list">
          {scholarships.map((scholarship) => (
            <div key={scholarship.id} className="item-container">
              <p>{scholarship.title}</p>
              <button onClick={() => handleRemoveItem(scholarship.id, setScholarships, scholarships)}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      {/* Trends Section */}
      <div className="admin-section">
        <h2>Manage Trends</h2>
        <input type="text" placeholder="Title" value={newTrend.title} onChange={(e) => setNewTrend({ ...newTrend, title: e.target.value })} />
        <input type="text" placeholder="Description" value={newTrend.description} onChange={(e) => setNewTrend({ ...newTrend, description: e.target.value })} />
        <input type="text" placeholder="Source" value={newTrend.source} onChange={(e) => setNewTrend({ ...newTrend, source: e.target.value })} />
        <input type="text" placeholder="Link" value={newTrend.link} onChange={(e) => setNewTrend({ ...newTrend, link: e.target.value })} />
        <button onClick={() => handleAddItem("trend", newTrend, setTrends, trends)}>Add Trend</button>
        <div className="item-list">
          {trends.map((trend) => (
            <div key={trend.id} className="item-container">
              <p>{trend.title}</p>
              <button onClick={() => handleRemoveItem(trend.id, setTrends, trends)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;