import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CourseCategory from "./CourseCategory"; // Import the CourseCategory component
import "./Courses.css"; // Import the CSS for styling
import { FaBookmark, FaRegBookmark } from "react-icons/fa"; // Import save icons

// Data for all course categories and their respective courses
const courseData = [
  {
    category: "AI (Artificial Intelligence)",
    courses: [
      {
        title: "AI for Everyone by Andrew Ng",
        level: "Beginner",
        link: "https://www.coursera.org/learn/ai-for-everyone",
      },
      {
        title: "Elements of AI",
        level: "Beginner",
        link: "https://www.elementsofai.com/",
      },
      {
        title: "Introduction to AI by Microsoft",
        level: "Beginner",
        link: "https://learn.microsoft.com/en-us/training/paths/introduction-to-ai/",
      },
      {
        title: "AI and Machine Learning for Business",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/ai-for-business-leaders",
      },
      {
        title: "AI in Practice: Machine Learning & Deep Learning",
        level: "Intermediate",
        link: "https://www.udemy.com/course/ai-in-practice/",
      },
    ],
  },
  {
    category: "Data Science",
    courses: [
      {
        title: "Data Science Specialization by Johns Hopkins University",
        level: "Intermediate",
        link: "https://www.coursera.org/specializations/jhu-data-science",
      },
      {
        title: "Introduction to Data Science with Python by IBM",
        level: "Beginner",
        link: "https://www.coursera.org/learn/python-for-data-science-ai",
      },
      {
        title: "Data Science for Everyone",
        level: "Beginner",
        link: "https://www.udacity.com/course/data-science-for-everyone--ud507",
      },
      {
        title: "Python for Data Science and Machine Learning Bootcamp",
        level: "Intermediate",
        link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
      },
      {
        title: "Data Science and Machine Learning Bootcamp with R",
        level: "Intermediate",
        link: "https://www.udemy.com/course/data-science-and-machine-learning-bootcamp-with-r/",
      },
    ],
  },
  {
    category: "React.js, Next.js, Tailwind CSS, TypeScript",
    courses: [
      {
        title: "React - FreeCodeCamp",
        level: "Beginner",
        link: "https://www.freecodecamp.org/learn/front-end-libraries/react/",
      },
      {
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        level: "Intermediate",
        link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      },
      {
        title: "Next.js & React - The Complete Guide",
        level: "Intermediate",
        link: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
      },
      {
        title: "Learn Next.js - FreeCodeCamp",
        level: "Intermediate",
        link: "https://www.freecodecamp.org/news/learn-nextjs/",
      },
      {
        title: "Tailwind CSS From Scratch",
        level: "Beginner",
        link: "https://www.udemy.com/course/tailwindcss-from-scratch/",
      },
      {
        title: "Tailwind CSS Tutorial for Beginners",
        level: "Beginner",
        link: "https://www.freecodecamp.org/news/tailwind-css-tutorial-for-beginners/",
      },
      {
        title: "Understanding TypeScript",
        level: "Beginner",
        link: "https://www.udemy.com/course/understanding-typescript/",
      },
      {
        title: "Learn TypeScript - FreeCodeCamp",
        level: "Beginner",
        link: "https://www.freecodecamp.org/news/learn-typescript/",
      },
    ],
  },
  {
    category: "ChatGPT",
    courses: [
      {
        title: "ChatGPT Ultimate Guide",
        level: "Beginner",
        link: "https://www.udemy.com/course/chatgpt-ultimate-guide/",
      },
      {
        title: "ChatGPT for Beginners",
        level: "Beginner",
        link: "https://www.udemy.com/course/chatgpt-for-beginners/",
      },
      {
        title: "Mastering ChatGPT",
        level: "Beginner",
        link: "https://www.coursera.org/learn/chatgpt",
      },
      {
        title: "ChatGPT for Business",
        level: "Intermediate",
        link: "https://www.udemy.com/course/chatgpt-business-masterclass/",
      },
      {
        title: "ChatGPT 101 for Entrepreneurs",
        level: "Intermediate",
        link: "https://www.udemy.com/course/chatgpt-101-for-entrepreneurs/",
      },
    ],
},
{
  category: "Generative AI",
  courses: [
    {
      title: "Generative Adversarial Networks (GANs) Specialization",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/generative-adversarial-networks",
    },
    {
      title: "Generative AI with GANs",
      level: "Intermediate",
      link: "https://www.udemy.com/course/generative-ai-with-gans/",
    },
    {
      title: "Generative Models for Deep Learning",
      level: "Advanced",
      link: "https://www.udacity.com/course/generative-models-for-deep-learning--ud741",
    },
    {
      title: "Creative Applications of Deep Learning with TensorFlow",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/creative-application-of-deep-learning",
    },
    {
        title: "Introduction to Generative AI",
        level: "Beginner",
        link: "https://www.udemy.com/course/introduction-to-generative-ai/",
      },
    ],
  },
  {
    category: "Data Analysis",
    courses: [
      {
        title: "Data Analysis with Python",
        level: "Beginner",
        link: "https://www.udemy.com/course/data-analysis-with-python/",
      },
      {
        title: "Data Analysis with Python",
        level: "Beginner",
        link: "https://www.coursera.org/learn/data-analysis-with-python",
      },
      {
        title: "Data Analysis in Python",
        level: "Beginner",
        link: "https://www.datacamp.com/courses/data-analysis-in-python",
      },
      {
        title: "Data Analysis and Visualization with Python",
        level: "Intermediate",
        link: "https://www.edx.org/course/data-analysis-and-visualization-with-python",
      },
      {
        title: "Data Analysis Nanodegree",
        level: "Intermediate",
        link: "https://www.udacity.com/course/data-analysis-nanodegree--nd003",
      },
    ],
},
{
  category: "Programming Languages",
  courses: [
    {
      title: "Learn Python Programming",
      level: "Beginner",
      link: "https://www.udemy.com/course/learn-python/",
    },
    {
      title: "Learn C++ Programming",
      level: "Beginner",
      link: "https://www.codecademy.com/learn/learn-c-plus-plus",
    },
    {
      title: "Java Programming for Beginners",
      level: "Beginner",
      link: "https://www.udemy.com/course/java-programming/",
    },
    {
      title: "Learn PHP Programming",
      level: "Beginner",
      link: "https://www.codecademy.com/learn/learn-php",
    },
    {
        title: "Learn R Programming",
        level: "Beginner",
        link: "https://www.udemy.com/course/learn-r-programming/",
      },
    ],
  },
  {
    category: "Cloud Computing",
    courses: [
      {
        title: "Introduction to Cloud Computing",
        level: "Beginner",
        link: "https://www.coursera.org/learn/cloud-computing",
      },
      {
        title: "AWS Certified Solutions Architect - Associate",
        level: "Intermediate",
        link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/",
      },
      {
        title: "IBM Cloud Essentials",
        level: "Beginner",
        link: "https://www.coursera.org/learn/ibm-cloud",
      },
      {
        title: "Cloud Developer Nanodegree",
        level: "Intermediate",
        link: "https://www.udacity.com/course/cloud-developer-nanodegree--nd9990",
      },
      {
        title: "Azure Cloud Services",
        level: "Intermediate",
        link: "https://www.edx.org/course/azure-cloud-services",
      },
    ],
},
{
  category: "Web Development",
    courses: [
    {
      title: "Responsive Web Design",
      level: "Beginner",
      link: "https://www.freecodecamp.org/learn/responsive-web-design/",
    },
    {
      title: "The Web Developer Bootcamp",
      level: "Beginner",
      link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    },
    {
      title: "Web Design for Everybody",
      level: "Beginner",
      link: "https://www.coursera.org/specializations/web-design",
    },
    {
      title: "CSS - The Complete Guide",
      level: "Intermediate",
      link: "https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",
    },
    {
      title: "Front End Libraries",
      level: "Intermediate",
      link: "https://www.freecodecamp.org/learn/front-end-libraries/",
      },
    ],
  },
  {
    category: "Full Stack Development",
    courses: [
      {
        title: "Full Stack Development Certification",
        level: "Beginner",
        link: "https://www.freecodecamp.org/learn/full-stack/",
      },
      {
        title: "The Complete Web Development Bootcamp",
        level: "Beginner",
        link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      },
      {
        title: "Full Stack Web Development with React",
        level: "Intermediate",
        link: "https://www.coursera.org/specializations/full-stack",
      },
      {
        title: "Full Stack Web Development",
        level: "Intermediate",
        link: "https://www.edx.org/course/full-stack-web-development",
      },
      {
        title: "Full Stack Web Developer Nanodegree",
        level: "Advanced",
        link: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004",
      },
    ],
  },
  {
    category: "AWS (Amazon Web Services)",
    courses: [
      {
        title: "AWS Cloud Practitioner Essentials",
        level: "Beginner",
        link: "https://www.aws.training/Details/Curriculum?id=20685",
      },
      {
        title: "AWS Fundamentals: Going Cloud-Native",
        level: "Beginner",
        link: "https://www.coursera.org/learn/aws-fundamentals",
      },
      {
        title: "AWS Certified Solutions Architect - Associate",
        level: "Intermediate",
        link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/",
      },
      {
        title: "AWS Certified Developer - Associate",
        level: "Intermediate",
        link: "https://www.udemy.com/course/aws-certified-developer-associate/",
      },
      {
        title: "AWS Developer Series",
        level: "Advanced",
        link: "https://www.edx.org/course/aws-developer-series",
      },
    ],
  },
  {
    category: "DevOps",
    courses: [
      {
        title: "Introduction to DevOps",
        level: "Beginner",
        link: "https://www.edx.org/course/introduction-to-devops",
      },
      {
        title: "DevOps on AWS",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/devops-cloud",
      },
      {
        title: "Learn DevOps with Docker, Kubernetes, and Terraform",
        level: "Intermediate",
        link: "https://www.udemy.com/course/learn-devops-the-complete-kubernetes-terraform-docker/",
      },
      {
        title: "DevOps for Beginners",
        level: "Beginner",
        link: "https://www.freecodecamp.org/news/devops-for-beginners/",
      },
      {
        title: "The Complete DevOps Bootcamp",
        level: "Advanced",
        link: "https://www.udemy.com/course/the-complete-devops-bootcamp/",
      },
    ],
  },
  {
    category: "UI/UX Design",
    courses: [
      {
        title: "Interaction Design Specialization",
        level: "Beginner",
        link: "https://www.coursera.org/learn/interaction-design",
      },
      {
        title: "UX Design Fundamentals",
        level: "Beginner",
        link: "https://www.udemy.com/course/ux-design-fundamentals/",
      },
      {
        title: "Learn UX Design",
        level: "Beginner",
        link: "https://www.freecodecamp.org/news/learn-ux-design/",
      },
      {
        title: "UX Design: Complete Guide to Creating User Interfaces",
        level: "Intermediate",
        link: "https://www.skillshare.com/classes/UX-Design-Complete-Guide-to-Creating-User-Interfaces/1264483563",
      },
      {
        title: "User Experience Design",
        level: "Intermediate",
        link: "https://www.edx.org/course/user-experience-design",
      },
      {
        title: "Learn Figma: User Interface Design",
        level: "Beginner",
        link: "https://www.coursera.org/learn/figma",
      },
      {
        title: "Figma for Beginners",
        level: "Beginner",
        link: "https://www.udemy.com/course/figma-for-beginners/",
      },
      {
        title: "Figma for Designers",
        level: "Intermediate",
        link: "https://www.edx.org/course/figma-for-designers",
      },
      {
        title: "Canva Design Masterclass",
        level: "Beginner",
        link: "https://www.udemy.com/course/canva-design-masterclass/",
      },
      {
        title: "Adobe Photoshop for Beginners",
        level: "Beginner",
        link: "https://www.coursera.org/learn/adobe-photoshop",
      },
    ],
  },
  {
    category: "Cybersecurity",
    courses: [
      {
        title: "Introduction to Cyber Security",
        level: "Beginner",
        link: "https://www.coursera.org/learn/intro-cyber-security",
      },
      {
        title: "The Complete Cyber Security Course",
        level: "Beginner",
        link: "https://www.udemy.com/course/the-complete-cyber-security-course/",
      },
      {
        title: "Cybersecurity Fundamentals",
        level: "Beginner",
        link: "https://www.edx.org/course/cybersecurity-fundamentals",
      },
      {
        title: "Cyber Security for Beginners",
        level: "Beginner",
        link: "https://www.udemy.com/course/cyber-security-for-beginners/",
      },
      {
        title: "Cybersecurity Specialization",
        level: "Advanced",
        link: "https://www.coursera.org/specializations/cyber-security",
      },
    ],
  },
  {
    category: "Big Data",
    courses: [
      {
        title: "Big Data Specialization",
        level: "Beginner",
        link: "https://www.coursera.org/learn/big-data",
      },
      {
        title: "Data Science for Executives: Big Data",
        level: "Intermediate",
        link: "https://www.edx.org/course/data-science-for-executives-big-data",
      },
      {
        title: "The Complete Big Data Bootcamp",
        level: "Beginner",
        link: "https://www.udemy.com/course/the-complete-big-data-bootcamp/",
      },
      {
        title: "Introduction to Big Data",
        level: "Beginner",
        link: "https://www.coursera.org/learn/intro-to-big-data",
      },
      {
        title: "Understanding Big Data",
        level: "Beginner",
        link: "https://www.freecodecamp.org/news/what-is-big-data/",
      },
    ],
  },
  {
    category: "Software Development",
    courses: [
      {
        title: "Software Development Specialization",
        level: "Beginner",
        link: "https://www.coursera.org/specializations/software-development",
      },
      {
        title: "Software Development for Beginners",
        level: "Beginner",
        link: "https://www.udemy.com/course/software-development-for-beginners/",
      },
      {
        title: "Introduction to Software Development",
        level: "Beginner",
        link: "https://www.edx.org/course/introduction-to-software-development",
      },
      {
        title: "Software Development Process",
        level: "Intermediate",
        link: "https://www.udacity.com/course/software-development-process--ud805",
      },
      {
        title: "Learn Software Engineering",
        level: "Intermediate",
        link: "https://www.freecodecamp.org/news/learn-software-engineering/",
      },
    ],
  },
  
        
  {
    category: "Data Structures and Algorithms (DSA)",
    courses: [
      {
        title: "Data Structures and Algorithm Specialization",
        level: "Beginner",
        link: "https://www.coursera.org/learn/data-structures",
      },
      {
        title: "Mastering Data Structures & Algorithms",
        level: "Intermediate",
        link: "https://www.udemy.com/course/datastructures/",
      },
      {
        title: "Data Structures - GeeksforGeeks",
        level: "Beginner",
        link: "https://www.geeksforgeeks.org/data-structures/",
      },
      {
        title: "Data Structures and Algorithms Nanodegree",
        level: "Intermediate",
        link: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
      },
      {
        title: "FreeCodeCamp Data Structures & Algorithms",
        level: "Beginner",
        link: "https://www.freecodecamp.org/learn/data-structures-and-algorithms/",
      },
    ],
  },
];

const Courses = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [savedItems, setSavedItems] = useState([]); // State to track saved courses

  useEffect(() => {
    if (query) {
      // Perform logic to highlight or scroll to the relevant course
      console.log("Search query:", query);
    }
  }, [query]);

  // Handle save functionality
  const toggleSave = (item) => {
    if (savedItems.some((saved) => saved.id === item.id)) {
      // Remove item if already saved
      setSavedItems(savedItems.filter((saved) => saved.id !== item.id));
    } else {
      // Add item to saved list
      setSavedItems([...savedItems, item]);
    }
  };

  return (
    <section className="courses-section">
      \<h1>Free Courses on Various Topics</h1>
      <div className="course-list">
        {courseData.map((category) => (
          <div key={category.category} className="course-category">
            <h2>{category.category}</h2>
            <div className="course-items">
              {category.courses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <h3 className="course-title">{course.title}</h3>
                    <button
                      className="save-icon"
                      onClick={() => toggleSave(course)}
                      aria-label="Save Course"
                    >
                      {savedItems.some((saved) => saved.id === course.id) ? (
                        <FaBookmark color="#007bff" />
                      ) : (
                        <FaRegBookmark color="#555" />
                      )}
                    </button>
                  </div>
                  <p>{course.level}</p>
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    {course.link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;