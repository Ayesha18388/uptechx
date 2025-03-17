import React from "react";

const ProfileSaved = ({ savedItems }) => {
  return (
    <div className="profile-saved-container">
      <h1>Saved Items</h1>
      {savedItems.length === 0 ? (
        <p>No items saved yet.</p>
      ) : (
        <ul>
          {savedItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileSaved;