import React, { useState } from "react";
import "./Profile.css"; // Import the CSS for styling

const Profile = ({ savedItems, setSavedItems, isSidebarOpen, toggleSidebar }) => {
 // eslint-disable-next-line
  const [user, setUser] = useState({
   
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const removeItem = (id) => {
    const updatedSavedItems = savedItems.filter((item) => item.id !== id);
    setSavedItems(updatedSavedItems);
    localStorage.setItem("savedItems", JSON.stringify(updatedSavedItems)); // Persist updated saved items in local storage
  };

  return (
    <div className={`profile-sidebar ${isSidebarOpen ? "open" : ""}`}>
      <button className="close-button" onClick={toggleSidebar}>
        &times;
      </button>
      <section className="profile-section">
        <h1>Profile</h1>
        <div className="profile-container">
          <div className="profile-card user-info">
            <h2>User Information</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          <div className="profile-card saved-items">
            <h2>Saved Items</h2>
            <div className="saved-list">
              {savedItems.length > 0 ? (
                savedItems.map((item) => (
                  <div key={item.id} className="saved-card">
                    <h3 className="saved-title">{item.title}</h3>
                    <p><strong>Offered By:</strong> {item.offeredBy}</p>
                    <p><strong>Eligibility:</strong> {item.eligibility}</p>
                    <p><strong>Benefits:</strong> {item.benefits}</p>
                    <button
                      className="start-learning-button"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      More Information
                    </button>
                    <button
                      className="remove-button"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <p>No saved items.</p>
              )}
            </div>
          </div>
          <div className="profile-card settings">
            <h2>Settings</h2>
            <p>Settings content goes here...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;