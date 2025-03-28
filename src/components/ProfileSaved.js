import React, { useEffect, useState } from "react";

const ProfileSaved = () => {
  const [savedItems, setSavedItems] = useState([]); // State to store saved items

  // Fetch saved items from the database
  useEffect(() => {
    const fetchSavedItems = async () => {
      try {
        const response = await fetch("http://localhost:3001/savedItems"); // Fetch saved items from the database
        const data = await response.json();
        setSavedItems(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching saved items:", error);
      }
    };

    fetchSavedItems();
  }, []);

  return (
    <div className="profile-saved-container">
      <h1>Saved Items</h1>
      {savedItems.length === 0 ? (
        <p>No items saved yet.</p>
      ) : (
        <ul>
          {savedItems.map((item) => (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileSaved;