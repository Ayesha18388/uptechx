
import React from "react";

// Cheatsheet data
const cheatsheets = [
  {
    category: "Full Stack Development Cheatsheets",
    items: [
      { title: "Python Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Java Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "PHP Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Ruby Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
    ],
  },
];

// CSS styles in JS format
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px auto",
    padding: "20px",
    maxWidth: "600px", // Limiting the max width for better readability
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adding a subtle shadow for depth
  },
  header: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "15px",
    fontWeight: "bold",
    textAlign: "center", // Center the header text
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    margin: "12px 0",
    padding: "8px",
    borderRadius: "5px",
    backgroundColor: "#fff", // Slight background color for each item
    transition: "all 0.3s ease", // Smooth transition for hover effect
  },
  listItemHover: {
    backgroundColor: "#f0f0f0", // Background color change on hover
    transform: "scale(1.05)", // Slight scaling effect on hover
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "18px",
    fontWeight: "500", // Slight bold for better readability
    display: "block", // Make the entire list item clickable
    padding: "10px 15px",
    borderRadius: "5px", // Rounded corners for links
    transition: "color 0.3s, transform 0.3s", // Smooth transition on hover
  },
  linkHover: {
    color: "#0056b3", // Change color on hover
    textDecoration: "underline", // Underline text on hover
  },
};

const FullstackDevelopment = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{cheatsheets[0].category}</h2>
      <ul style={styles.list}>
        {cheatsheets[0].items.map((item, index) => (
          <li
            key={index}
            style={styles.listItem}
            // Hover effect for each list item
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.listItemHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#fff"}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              onMouseEnter={(e) => {
                e.target.style.color = styles.linkHover.color;
                e.target.style.textDecoration = styles.linkHover.textDecoration;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = styles.link.color;
                e.target.style.textDecoration = "none";
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FullstackDevelopment;
