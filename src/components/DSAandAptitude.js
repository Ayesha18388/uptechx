import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./DSAandAptitude.css"; // Add a CSS file for styling

const dsaAndAptitudeData = [
  {
    category: "DSA Roadmap",
    items: [
      { title: "DSA Roadmap", link: "https://roadmap.sh/datastructures-and-algorithms" },
    ],
  },
  {
    category: "DSA Problems Sheet",
    items: [
      { title: "DSA sheet by Love Babbar", link: "https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/" },
      { title: "DSA by Nishanth Chahar", link: "https://docs.google.com/spreadsheets/d/1kyHfGGaLTzWspcqMUUS5Httmip7t8LJB0P-uPrRLGos/edit?usp=drivesdk" },
      { title: "DSA by Shraddha Khapra", link: "https://docs.google.com/spreadsheets/u/0/d/1hXserPuxVoWMG9Hs7y8wVdRCJTcj3xMBAEYUOXQ5Xag/htmlview" },
    ],
  },
  {
    category: "Data Structures and Algorithms",
    items: [
      { title: "DSA in JAVA", link: "https://drive.google.com/file/d/1a-Bskv5Ni37-dQoEa-XUitXr9XA0UC6M/view?usp=drivesdk" },
      { title: "DSA in C++", link: "https://drive.google.com/file/d/1a0wGJJTzUM1Kgpua6k_NxYVPW8R5nubN/view?usp=drivesdk" },
    ],
  },
  {
    category: "Aptitude",
    items: [
      { title: "Qualitative Aptitude", link: "https://drive.google.com/file/d/1_w8aO8lG1r-gkBODGjYGVikM8W-dSz9J/view?usp=drivesdk" },
      { title: "Quantitative Aptitude", link: "https://drive.google.com/file/d/1_vA4I6z9I-uCTmicYRhMS_rNgxMiOac3/view?usp=drivesdk" },
    ],
  },
];

const DSAandAptitude = () => {
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
    <div className="dsa-aptitude-container">
      {dsaAndAptitudeData.map((category, index) => (
        <div key={index} className="dsa-category">
          <h2 className="category-title">{category.category}</h2>
          <ul className="dsa-list">
            {category.items.map((item, idx) => (
              <li key={idx} id={item.title} className="dsa-item">
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

export default DSAandAptitude;