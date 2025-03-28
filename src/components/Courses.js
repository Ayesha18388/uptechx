import React, {  useState } from "react";
// eslint-disable-next-line
import {useParams, useLocation } from "react-router-dom";
// eslint-disable-next-line
import CourseCategory from "./CourseCategory";// eslint-disable-next-line
import "./Courses.css"; // Import the CSS for styling
import { FaBookmark, FaRegBookmark } from "react-icons/fa"; // Import save icons
import { FaSearch } from "react-icons/fa"; // Import the search icon

// Data for all course categories and their respective courses
const courseData = [
  {
    category: "Artificial Intelligence (AI)",
    courses: [
      {
        id: 1,
        title: "AI for Everyone by Andrew Ng",
        level: "Beginner",
        link: "https://www.coursera.org/learn/ai-for-everyone",
      },
      {
        id: 2,
        title: "Elements of AI",
        level: "Beginner",
        link: "https://www.elementsofai.com/",
      },
      {
        id: 3,
        title: "Introduction to AI",
        level: "Beginner",
        link: "https://www.coursera.org/learn/introduction-to-ai",
      },
      {
        id: 4,
        title: "AI For Business Specialization",
        level: "Intermediate",
        link: "https://www.coursera.org/specializations/ai-for-business-wharton",
      },
      {
        id: 5,
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
        id: 6,
        title: "Data Science Specialization by Johns Hopkins University",
        level: "Intermediate",
        link: "https://www.coursera.org/specializations/jhu-data-science",
      },
      {
        id: 7,
        title: "Python for Data Science, AI & Development",
        level: "Beginner",
        link: "https://www.coursera.org/learn/python-for-applied-data-science-ai",
      },
      {
        id: 8,
        title: "Introduction to Data Science Specialization",
        level: "Beginner",
        link: "https://www.coursera.org/specializations/introduction-data-science",
      },
      {
        id: 9,
        title: "Python for Data Science, AI & Development",
        level: "Intermediate",
        link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
      },
      {
        id: 10,
        title: "Data Science: Foundations using R Specialization",
        level: "Intermediate",
        link: "https://www.coursera.org/specializations/data-science-foundations-r",
      },
    ],
  },
  {
    category: "React.js, Next.js, Tailwind CSS, TypeScript",
    courses: [
      {
        id: 11,
        title: "React - FreeCodeCamp",
        level: "Beginner",
        link: "https://www.freecodecamp.org/learn/front-end-libraries/react/",
      },
      {
        id: 12,
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        level: "Intermediate",
        link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      },
      {
        id: 13,
        title: "Next.js & React - The Complete Guide",
        level: "Intermediate",
        link: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
      },
      {
        id: 14,
        title: "Introduction to Next.js",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/introduction-to-next-js",
      },
      {
        id: 15,
        title: "Tailwind CSS From Scratch",
        level: "Beginner",
        link: "https://www.coursera.org/learn/packt-tailwind-css-from-scratch-learn-by-building-projects-1xy4y",
      },
      {
        id: 16,
        title: "Tailwind CSS Practice Projects",
        level: "Beginner",
        link: "https://www.coursera.org/learn/tailwind-css-practice-project",
      },
      {
        id: 17,
        title: "Understanding TypeScript",
        level: "Beginner",
        link: "https://www.udemy.com/course/understanding-typescript/",
      },
      {
        id: 18,
        title: "TypeScript String Properties and Methods",
        level: "Beginner",
        link: "https://www.coursera.org/projects/typescript-string-properties-and-methods",
      },
    ],
  },
  {
    category: "ChatGPT",
    courses: [
      {
        id: 19,
        title: "Prompt Engineering for ChatGPT",
        level: "Beginner",
        link: "https://www.coursera.org/learn/prompt-engineering",
      },
      {
        id: 20,
        title: "ChatGPT Prompt Engineering for Developers",
        level: "Beginner",
        link: "https://www.coursera.org/projects/chatgpt-prompt-engineering-for-developers-project",
      },
      {
        id: 21,
        title: "GPT (Generative Pre-trained Transformers)",
        level: "Beginner",
        link: "https://www.coursera.org/learn/chatgpt",
      },
      {
        id: 22,
        title: "ChatGPT for Project Management",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/chatgpt-project-management-execution",
      },
      {
        id: 23,
        title: "ChatGPT & Generative AI for Data Analytics",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/chatgpt-for-data-analytics",
      },
    ],
  },
  {
    category: "Generative AI",
    courses: [
      {
        id: 24,
        title: "Generative Adversarial Networks (GANs) Specialization",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/generative-adversarial-networks",
      },
      {
        id: 25,
        title: "Generative AI: Impact, Considerations, and Ethical Issues",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/generative-ai-ethical-considerations-and-implications",
      },
      {
        id: 26,
        title: "Generative Models for Deep Learning",
        level: "Advanced",
        link: "https://www.udacity.com/course/generative-models-for-deep-learning--ud741",
      },
      {
        id: 27,
        title: "IBM Deep Learning with PyTorch, Keras and Tensorflow",
        level: "Intermediate",
        link: "https://www.coursera.org/professional-certificates/ibm-deep-learning-with-pytorch-keras-tensorflow",
      },
      {
        id: 28,
        title: "Introduction to Generative AI",
        level: "Beginner",
        link: "https://www.coursera.org/learn/introduction-to-generative-ai",
      },
    ],
  },
  {
    category: "Data Analysis",
    courses: [
      {
        id: 29,
        title: "Data Analysis with Python",
        level: "Beginner",
        link: "https://www.coursera.org/learn/data-analysis-with-python",
      },
      {
        id: 30,
        title: "Microsoft Power BI Data Analyst Professional Certificate",
        level: "Beginner",
        link: "https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst",
      },
      {
        id: 31,
        title: "Data Analysis and Visualization with Python",
        level: "Beginner",
        link: "https://www.coursera.org/learn/microsoft-data-analysis-visualization-with-python",
      },
      {
        id: 32,
        title: "Google Data Analytics",
        level: "Intermediate",
        link: "https://www.coursera.org/professional-certificates/google-data-analytics",
      },
    ],
  },
  {
    category: "Programming Languages",
    courses: [
      {
        id: 33,
        title: "Learn Python Programming",
        level: "Beginner",
        link: "https://www.coursera.org/learn/python-crash-course",
      },
      {
        id: 34,
        title: "Learn C++ Programming",
        level: "Beginner",
        link: "https://www.codecademy.com/learn/learn-c-plus-plus",
      },
      {
        id: 35,
        title: "Java Programming for Beginners",
        level: "Beginner",
        link: "https://www.coursera.org/learn/fundamentals-of-java-programming",
      },
      {
        id: 36,
        title: "Learn PHP Programming",
        level: "Beginner",
        link: "https://www.codecademy.com/learn/learn-php",
      },
      {
        id: 37,
        title: "Learn R Programming",
        level: "Beginner",
        link: "https://www.coursera.org/learn/r-programming",
      },
    ],
  },
  {
    category: "Cloud Computing",
    courses: [
      {
        id: 38,
        title: "Introduction to Cloud Computing",
        level: "Beginner",
        link: "https://www.coursera.org/learn/cloud-computing",
      },
      {
        id: 39,
        title: "AWS Certified Solutions Architect - Associate",
        level: "Intermediate",
        link: "https://www.coursera.org/professional-certificates/aws-cloud-solutions-architect",
      },
      {
        id: 40,
        title: "Google Cloud Fundamentals: Core Infrastructure",
        level: "Beginner",
        link: "https://www.coursera.org/learn/gcp-fundamentals",
      },
      {
        id: 41,
        title: "Google Cloud Database Engineer Specialization",
        level: "Intermediate",
        link: "https://www.coursera.org/specializations/google-cloud-database-engineer",
      },
      {
        id: 42,
        title: "Azure Cloud Services",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/microsoft-azure-cloud-services",
      },
    ],
  },
  {
    category: "Web Development",
    courses: [
      {
        id: 43,
        title: "Responsive Web Design",
        level: "Beginner",
        link: "https://www.freecodecamp.org/learn/responsive-web-design/",
      },
      {
        id: 44,
        title: "Introduction to Web Development",
        level: "Beginner",
        link: "https://www.coursera.org/learn/web-development",
      },
      {
        id: 45,
        title: "Web Design for Everybody",
        level: "Beginner",
        link: "https://www.coursera.org/specializations/web-design",
      },
      {
        id: 46,
        title: "Introduction to CSS3",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/introcss",
      },
      {
        id: 47,
        title: "IBM Front-End Developer Professional Certificate",
        level: "Intermediate",
        link: "https://www.coursera.org/professional-certificates/ibm-frontend-developer",
      },
    ],
  },
  {
    category: "Full Stack Development",
    courses: [
      {
        id: 48,
        title: "IBM Full Stack Software Developer",
        level: "Beginner",
        link: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
      },
      {
        id: 49,
        title: "IBM Full-Stack JavaScript Developer",
        level: "Beginner",
        link: "https://www.coursera.org/professional-certificates/ibm-full-stack-javascript-developer",
      },
      {
        id: 50,
        title: "Full-Stack DApp Development with React and Web3",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/packt-full-stack-dapp-development-with-react-and-web3-605x4",
      },
      {
        id: 51,
        title: "Java FullStack Developer Specialization",
        level: "Intermediate",
        link: "https://www.coursera.org/specializations/java-fullstack",
      },
      {
        id: 52,
        title: "Meta Front-End Developer",
        level: "Advanced",
        link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      },
    ],
  },
  {
    category: "AWS (Amazon Web Services)",
    courses: [
      {
        id: 53,
        title: "AWS Skill Builder Learner Guide",
        level: "Beginner",
        link: "https://explore.skillbuilder.aws/learn/courses/18443/aws-skill-builder-learner-guide",
      },
      {
        id: 54,
        title: "Foundations of Prompt Engineering",
        level: "Beginner",
        link: "https://explore.skillbuilder.aws/learn/courses/17763/foundations-of-prompt-engineering",
      },
      {
        id: 55,
        title: "Building Language Models on AWS",
        level: "Intermediate",
        link: "https://explore.skillbuilder.aws/learn/courses/17556/building-language-models-on-aws",
      },
      {
        id: 56,
        title: "Amazon Bedrock Getting Started",
        level: "Intermediate",
        link: "https://explore.skillbuilder.aws/learn/courses/17508/amazon-bedrock-getting-started",
      },
      {
        id: 57,
        title: "AWS for Games: Cloud Game Development",
        level: "Advanced",
        link: "https://explore.skillbuilder.aws/learn/learning-plans/1570/aws-for-games-cloud-game-development-knowledge-badge-readiness-path",
      },
    ],
  },
  {
    category: "DevOps",
    courses: [
      {
        id: 58,
        title: "Introduction to DevOps",
        level: "Beginner",
        link: "https://www.coursera.org/learn/intro-to-devops",
      },
      {
        id: 59,
        title: "DevOps on AWS Specialization",
        level: "Intermediate",
        link: "https://www.coursera.org/specializations/aws-devops",
      },
      {
        id: 60,
        title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/ibm-containers-docker-kubernetes-openshift",
      },
      {
        id: 61,
        title: "DevOps, Cloud, and Agile Foundations Specialization",
        level: "Beginner",
        link: "https://www.coursera.org/learn/devops-aws-code-build-test",
      },
      {
        id: 62,
        title: "DevOps on AWS: Code, Build, and Test",
        level: "Advanced",
        link: "https://www.coursera.org/specializations/devops-cloud-and-agile-foundations",
      },
    ],
  },
  {
    category: "Data Structures and Algorithms (DSA)",
    courses: [
      {
        id: 88,
        title: "Data Structures and Algorithm Specialization",
        level: "Beginner",
        link: "https://www.coursera.org/learn/data-structures",
      },
      {
        id: 89,
        title: "Python Data Structures",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/python-data",
      },
      {
        id: 90,
        title: "Data Structures - GeeksforGeeks",
        level: "Beginner",
        link: "https://www.geeksforgeeks.org/data-structures/",
      },
      {
        id: 91,
        title: "Data Structures and Algorithms Nanodegree",
        level: "Intermediate",
        link: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
      },
      {
        id: 92,
        title: "FreeCodeCamp Data Structures & Algorithms",
        level: "Beginner",
        link: "https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/",
      },
    ],
  },
];

const Courses = () => {
  const [savedItems, setSavedItems] = useState([]); // State to track saved courses
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredCourses, setFilteredCourses] = useState(courseData); // State for filtered courses

  // Handle search functionality
  const handleSearchSubmit = () => {
    if (!searchTerm.trim()) {
      setFilteredCourses(courseData); // Reset to all courses if search term is empty
      return;
    }

    const filtered = courseData.map((category) => ({
      ...category,
      courses: category.courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })).filter((category) => category.courses.length > 0); // Remove empty categories

    setFilteredCourses(filtered);
  };
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

  // Function to handle button click (open link in a new tab)
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="courses-section">
      <h1>Free Courses on Various Topics</h1>

      {/* Search Bar */}
      <div className="flex-grow-1 d-flex justify-content-center">
        <div className="search-box">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSearchSubmit();
            }}
          />
          <FaSearch className="search-icon" onClick={handleSearchSubmit} />

          {/* Clear Button */}
          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm("")}>
              ✖
            </button>
          )}
        </div>
      </div>

      {/* Course List */}
      <div className="course-list">
        {filteredCourses.map((category) => (
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
                  <button
                    className="course-button"
                    onClick={() => handleButtonClick(course.link)}
                  >
                    Start Learning
                  </button>
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