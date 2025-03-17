import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Cheatsheets.css"; // Add a CSS file for styling

const cheatsheets = [
  {
    category: "Web Development Cheatsheets",
    items: [
      { title: "HTML Cheat Sheet", link: "https://drive.google.com/file/d/1ZSE9-sMpz3t63C1kYsbt6JIf1SR2o3w1/view?usp=drivesdk" },
      { title: "CSS Cheat Sheet", link: "https://drive.google.com/file/d/1ZSV-bA18TpWmsU6Ofv5AhequD6_6oc70/view?usp=drivesdk" },
      { title: "JavaScript Cheat Sheet", link: "https://drive.google.com/file/d/1ZTVt1_cF1NgxdeYEMvzkYtZwAb0CX9Sn/view?usp=drivesdk" },
      { title: "React.js Cheat Sheet", link: "https://drive.google.com/file/d/1ZU4znQ1ivEA0QK74wrb7opiHdMpE92aU/view?usp=drivesdk" },
      { title: "Node.js Cheat Sheet", link: "https://drive.google.com/file/d/1ZXcfrqeSz9ZlisAhv3aqitkZ7ZiNxGZv/view?usp=drivesdk" },
      { title: "Tailwind CSS Cheat Sheet", link: "https://drive.google.com/file/d/1ZWt3ec6hXy-WT0dKyHYszJoBidsTKZzB/view?usp=drivesdk" },
      { title: "Next.js Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
    ],
  },
  {
    category: "Full Stack Development Cheatsheets",
    items: [
      { title: "Python Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Java Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "PHP Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Ruby Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
    ],
  },
  {
    category: "Security and Deployment Cheatsheets",
    items: [
      { title: "User Authentication Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Security Practices Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Docker Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "CI/CD Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Cloud Deployment Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
    ],
  },
  {
    category: "Advanced Topics Cheatsheets",
    items: [
      { title: "System Design Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Performance Optimization Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Cyber Security Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "Blockchain Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "NoSQL Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
      { title: "MongoDB Cheat Sheet", link: "https://drive.google.com/file/d/1ZXZpjO4Tq8mDfuPeUwVTb93E8Lk0mVg8/view?usp=drivesdk" },
    ],
  },
];

const Cheatsheets = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    if (query) {
      const element = document.getElementById(query);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [query]);

  return (
    <div className="cheatsheets-container">
      {cheatsheets.map((category, index) => (
        <div key={index} className="cheatsheet-category">
          <h2 className="category-title">{category.category}</h2>
          <ul className="cheatsheet-list">
            {category.items.map((item, idx) => (
              <li key={idx} id={item.title} className="cheatsheet-item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Cheatsheets;