import React from "react";
import CourseCard from "./CourseCard";

const CourseCategory = ({ category, courses }) => {
  return (
    <div className="course-category">
      {/* Category title */}
      <h2>{category}</h2>
      <div className="course-list">
        {/* Render each course using the CourseCard component */}
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            level={course.level}
            link={course.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;