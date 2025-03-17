import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the "X" icon
import "./Profile.css"; // Add a CSS file for styling

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest User",
    email: "guest@example.com",
  };

  // Example saved items (you can replace this with dynamic data)
  const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [
    "Item 1",
    "Item 2",
    "Item 3",
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [showSavedItems, setShowSavedItems] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="profile-container">
      {isSidebarOpen && (
        <div className="profile-sidebar">
          <div className="sidebar-header">
            <h2>User Profile</h2>
            <FaTimes className="close-icon" onClick={toggleSidebar} />
          </div>

          {/* User Profile Section */}
          <div className="profile-card">
            <h3
              className="collapsible-header"
              onClick={() => setShowProfileDetails(!showProfileDetails)}
            >
              Profile Details
            </h3>
            {showProfileDetails && (
              <div className="collapsible-content">
                <p><strong>Name:</strong> {user.name || `${user.firstName} ${user.lastName}`}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
            )}
          </div>

          {/* Saved Items Section */}
          <div className="profile-card">
            <h3
              className="collapsible-header"
              onClick={() => setShowSavedItems(!showSavedItems)}
            >
              Saved
            </h3>
            {showSavedItems && (
              <div className="collapsible-content">
                {savedItems.length > 0 ? (
                  <ul>
                    {savedItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No saved items.</p>
                )}
              </div>
            )}
          </div>

          {/* Settings Section */}
          <div className="profile-card">
            <h3
              className="collapsible-header"
              onClick={() => setShowSettings(!showSettings)}
            >
              Settings
            </h3>
            {showSettings && (
              <div className="collapsible-content">
                <ul>
                  <li>Change Password</li>
                  <li>Privacy Settings</li>
                  <li>Notification Preferences</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;