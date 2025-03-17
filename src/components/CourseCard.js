import React from "react";

// The CourseCard component accepts props for title, level, and link
const CourseCard = ({ title, level, link }) => {
  return (
    <div className="course-card">
      {/* The course card is wrapped in an anchor tag to make it clickable */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        {/* Course title */}
        <h3>{title}</h3>
        {/* Course level */}
        <p>Level: {level}</p>
        {/* Button to start learning */}
        <button className="start-btn">Start Learning</button>
        {/* Free label */}
        <p className="free-text">Free</p>
      </a>
    </div>
  );
};

export default CourseCard;