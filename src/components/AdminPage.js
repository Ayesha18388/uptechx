import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const [editMode, setEditMode] = useState({ type: null, id: null });

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const hackathonsRes = await axios.get("http://localhost:5000/hackathons");
      const scholarshipsRes = await axios.get("http://localhost:5000/scholarships");
      const trendsRes = await axios.get("http://localhost:5000/trends");

      setHackathons(hackathonsRes.data);
      setScholarships(scholarshipsRes.data);
      setTrends(trendsRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add or update item and refresh data
  const handleAddOrUpdateItem = async (type, newItem, setItems, resetForm) => {
    if (Object.values(newItem).some((value) => value.trim() === "")) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const endpoint = editMode.id
        ? `http://localhost:5000/${type}/${editMode.id}`
        : `http://localhost:5000/${type}`;
      const method = editMode.id ? "put" : "post";

      const res = await axios[method](endpoint, newItem);

      if (res.status === 201 || res.status === 200) {
        fetchData(); // Refresh data after adding or updating
        resetForm(); // Reset the form fields
        setEditMode({ type: null, id: null }); // Exit edit mode
      } else {
        console.error(`Failed to ${editMode.id ? "update" : "add"} ${type}:`, res.statusText);
        alert(`Failed to ${editMode.id ? "update" : "add"} ${type}. Please try again.`);
      }
    } catch (error) {
      console.error(`Error ${editMode.id ? "updating" : "adding"} ${type}:`, error.response || error.message || error);
      alert(`An error occurred while ${editMode.id ? "updating" : "adding"} the ${type}. Please check the console for details.`);
    }
  };

  // Remove item and refresh data
  const handleRemoveItem = async (type, id) => {
    try {
      const endpoint = `http://localhost:5000/${type}/${id}`;
      await axios.delete(endpoint);
      fetchData(); // Refresh data after deletion
    } catch (error) {
      console.error(`Error removing ${type}:`, error.response || error.message || error);
      alert(`An error occurred while removing the ${type}. Please check the console for details.`);
    }
  };

  // Set item for editing
  const handleEditItem = (type, item) => {
    setEditMode({ type, id: item.id });
    if (type === "hackathons") setNewHackathon(item);
    if (type === "scholarships") setNewScholarship(item);
    if (type === "trends") setNewTrend(item);
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>

      {/* Hackathons Section */}
      <div className="admin-section">
        <h2>Manage Hackathons</h2>
        <input
          type="text"
          placeholder="Title"
          value={newHackathon.title}
          onChange={(e) => setNewHackathon({ ...newHackathon, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Dates"
          value={newHackathon.dates}
          onChange={(e) => setNewHackathon({ ...newHackathon, dates: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mode"
          value={newHackathon.mode}
          onChange={(e) => setNewHackathon({ ...newHackathon, mode: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newHackathon.location}
          onChange={(e) => setNewHackathon({ ...newHackathon, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newHackathon.description}
          onChange={(e) => setNewHackathon({ ...newHackathon, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Registration"
          value={newHackathon.registration}
          onChange={(e) => setNewHackathon({ ...newHackathon, registration: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link"
          value={newHackathon.link}
          onChange={(e) => setNewHackathon({ ...newHackathon, link: e.target.value })}
        />
        <button
          onClick={() =>
            handleAddOrUpdateItem("hackathons", newHackathon, setHackathons, () =>
              setNewHackathon({ title: "", dates: "", mode: "", location: "", description: "", link: "" })
            )
          }
        >
          {editMode.type === "hackathons" ? "Update Hackathon" : "Add Hackathon"}
        </button>

        <div className="item-list">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="item-container">
              <p>{hackathon.title}</p>
              <div className="button-group">
                <button className="edit-button" onClick={() => handleEditItem("hackathons", hackathon)}>
                  Edit
                </button>
                <button className="remove-button" onClick={() => handleRemoveItem("hackathons", hackathon.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scholarships Section */}
      <div className="admin-section">
        <h2>Manage Scholarships</h2>
        <input
          type="text"
          placeholder="Title"
          value={newScholarship.title}
          onChange={(e) => setNewScholarship({ ...newScholarship, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Offered By"
          value={newScholarship.offeredBy}
          onChange={(e) => setNewScholarship({ ...newScholarship, offeredBy: e.target.value })}
        />
        <input
          type="text"
          placeholder="Eligibility"
          value={newScholarship.eligibility}
          onChange={(e) => setNewScholarship({ ...newScholarship, eligibility: e.target.value })}
        />
        <input
          type="text"
          placeholder="Benefits"
          value={newScholarship.benefits}
          onChange={(e) => setNewScholarship({ ...newScholarship, benefits: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link"
          value={newScholarship.link}
          onChange={(e) => setNewScholarship({ ...newScholarship, link: e.target.value })}
        />
        <button
          onClick={() =>
            handleAddOrUpdateItem("scholarships", newScholarship, setScholarships, () =>
              setNewScholarship({ title: "", offeredBy: "", eligibility: "", benefits: "", link: "" })
            )
          }
        >
          {editMode.type === "scholarships" ? "Update Scholarship" : "Add Scholarship"}
        </button>

        <div className="item-list">
          {scholarships.map((scholarship) => (
            <div key={scholarship.id} className="item-container">
              <p>{scholarship.title}</p>
              <div className="button-group">
                <button className="edit-button" onClick={() => handleEditItem("scholarships", scholarship)}>
                  Edit
                </button>
                <button className="remove-button" onClick={() => handleRemoveItem("scholarships", scholarship.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trends Section */}
      <div className="admin-section">
        <h2>Manage Trends</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTrend.title}
          onChange={(e) => setNewTrend({ ...newTrend, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTrend.description}
          onChange={(e) => setNewTrend({ ...newTrend, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Source"
          value={newTrend.source}
          onChange={(e) => setNewTrend({ ...newTrend, source: e.target.value })}
        />
        <input
          type="text"
          placeholder="Published Date"
          value={newTrend.publishedDate}
          onChange={(e) => setNewTrend({ ...newTrend, publishedDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link"
          value={newTrend.link}
          onChange={(e) => setNewTrend({ ...newTrend, link: e.target.value })}
        />
        <button
          onClick={() =>
            handleAddOrUpdateItem("trends", newTrend, setTrends, () =>
              setNewTrend({ title: "", description: "", source: "", link: "" })
            )
          }
        >
          {editMode.type === "trends" ? "Update Trend" : "Add Trend"}
        </button>

        <div className="item-list">
          {trends.map((trend) => (
            <div key={trend.id} className="item-container">
              <p>{trend.title}</p>
              <div className="button-group">
                <button className="edit-button" onClick={() => handleEditItem("trends", trend)}>
                  Edit
                </button>
                <button className="remove-button" onClick={() => handleRemoveItem("trends", trend.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;