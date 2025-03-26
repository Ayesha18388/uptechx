import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import {useParams, useLocation } from "react-router-dom";
// eslint-disable-next-line
import CourseCategory from "./CourseCategory";// eslint-disable-next-line
import "./Courses.css"; // Import the CSS for styling
import { FaBookmark, FaRegBookmark } from "react-icons/fa"; // Import save icons

// Data for all course categories and their respective courses
const courseData = [
  {
    category: "Artificial Intelligence (AI)", 
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
        
        title: "Introduction to AI ",
        level: "Beginner",
        link: "https://www.coursera.org/learn/introduction-to-ai",
      },
      {
        
        title: "AI For Business Specialization",
        level: "Intermediate",
        link: "https://www.coursera.org/specializations/ai-for-business-wharton ",
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
        
        title: "Python for Data Science, AI & Development",
        level: "Beginner",
        link: "https://www.coursera.org/learn/python-for-applied-data-science-ai",
      },
      {
        
        title: "Introduction to Data Science Specialization",
        level: "Beginner",
        link: "https://www.coursera.org/specializations/introduction-data-science",
      },
      {
        
        title: "Python for Data Science, AI & Development",
        level: "Intermediate",
        link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
      },
      {
      
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
        
        title: "Introduction to Next.js",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/introduction-to-next-js",
      },
      {
        
        title: "Tailwind CSS From Scratch",
        level: "Beginner",
        link: "https://www.coursera.org/learn/packt-tailwind-css-from-scratch-learn-by-building-projects-1xy4y",
      },
      {
        
        title: "Tailwind CSS Practice Projects",
        level: "Beginner",
        link: "https://www.coursera.org/learn/tailwind-css-practice-project",
      },
      {
       
        title: "Understanding TypeScript",
        level: "Beginner",
        link: "https://www.udemy.com/course/understanding-typescript/",
      },
      {
        
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
       
        title: "Prompt Engineering for ChatGPT",
        level: "Beginner",
        link: "https://www.coursera.org/learn/prompt-engineering",
      },
      {
       
        title: "ChatGPT Prompt Engineering for Developers",
        level: "Beginner",
        link: "https://www.coursera.org/projects/chatgpt-prompt-engineering-for-developers-project",
      },
      {
       
        title: "GPT (Generative Pre-trained Transformers)",
        level: "Beginner",
        link: "https://www.coursera.org/learn/chatgpt",
      },
      {
        
        title: "ChatGPT for Project Management",
        level: "Intermediate",
        link: "https://www.coursera.org/learn/chatgpt-project-management-execution",
      },
      {
        
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
      
      title: "Generative Adversarial Networks (GANs) Specialization",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/generative-adversarial-networks",
    },
    {
      
      title: "Generative AI: Impact, Considerations, and Ethical Issues",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/generative-ai-ethical-considerations-and-implications",
    },
    {
     
      title: "Generative Models for Deep Learning",
      level: "Advanced",
      link: "https://www.udacity.com/course/generative-models-for-deep-learning--ud741",
    },
    {
      
      title: "IBM Deep Learning with PyTorch, Keras and Tensorflow ",
      level: "Intermediate",
      link: "https://www.coursera.org/professional-certificates/ibm-deep-learning-with-pytorch-keras-tensorflow",
    },
    {
      
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
      
      title: "Data Analysis with Python",
      level: "Beginner",
      link: "https://www.coursera.org/learn/data-analysis-with-python",
    },
    {
     
      title: "Microsoft Power BI Data Analyst Professional Certificate",
      level: "Beginner",
      link: "https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst",
    },
    {
      
      title: "Data Analysis and Visualization with Python",
      level: "Beginner",
      link: "https://www.coursera.org/learn/microsoft-data-analysis-visualization-with-python",
    },
    {
      
      title: "Google Data Analytics ",
      level: "Intermediate",
      link: "https://www.coursera.org/professional-certificates/google-data-analytics",
    },
    
  ],
},
{
  category: "Programming Languages",
  courses: [
    {
      
      title: "Learn Python Programming",
      level: "Beginner",
      link: "https://www.coursera.org/learn/python-crash-course",
    },
    {
      
      title: "Learn C++ Programming",
      level: "Beginner",
      link: "https://www.codecademy.com/learn/learn-c-plus-plus",
    },
    {
      
      title: "Java Programming for Beginners",
      level: "Beginner",
      link: "https://www.coursera.org/learn/fundamentals-of-java-programming",
    },
    {
     
      title: "Learn PHP Programming",
      level: "Beginner",
      link: "https://www.codecademy.com/learn/learn-php",
    },
    {
      
      title: "Learn R Programming",
      level: "Beginner",
      link: "https://www.coursera.org/learn/r-programming?",
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
      link: "https://www.coursera.org/professional-certificates/aws-cloud-solutions-architect",
    },
    {
      
      title: "Google Cloud Fundamentals: Core Infrastructure",
      level: "Beginner",
      link: "https://www.coursera.org/learn/gcp-fundamentals",
    },
    {
      
      title: "Google Cloud Database Engineer Specialization",
      level: "Intermediate",
      link: "https://www.coursera.org/specializations/google-cloud-database-engineer",
    },
    {

      title: "Azure Cloud Services",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/microsoft-azure-cloud-services?",
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
    
      title: "Introduction to Web Development",
      level: "Beginner",
      link: "https://www.coursera.org/learn/web-development",
    },
    {
     
      title: "Web Design for Everybody",
      level: "Beginner",
      link: "https://www.coursera.org/specializations/web-design",
    },
    {
    
      title: "Introduction to CSS3",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/introcss",
    },
    {
     
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
     
      title: "IBM Full Stack Software Developer",
      level: "Beginner",
      link: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
    },
    {
     
      title: "IBM Full-Stack JavaScript Developer",
      level: "Beginner",
      link: "https://www.coursera.org/professional-certificates/ibm-full-stack-javascript-developer?",
    },
    {
     
      title: "Full-Stack DApp Development with React and Web3",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/packt-full-stack-dapp-development-with-react-and-web3-605x4",
    },
    {
     
      title: "Java FullStack Developer Specialization",
      level: "Intermediate",
      link: "https://www.coursera.org/specializations/java-fullstack",
    },
    {
      
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
     
      title: "AWS Skill builder learner guide",
      level: "Beginner",
      link: "https://explore.skillbuilder.aws/learn/courses/18443/aws-skill-builder-learner-guide",
    },
    {
     
      title: "foundation of Prompt Engineering",
      level: "Beginner",
      link: "https://explore.skillbuilder.aws/learn/courses/17763/foundations-of-prompt-engineering",
    },
    {
     
      title: "Building Language Models on AWS",
      level: "Intermediate",
      link: "https://explore.skillbuilder.aws/learn/courses/17556/building-language-models-on-aws",
    },
    {
      
      title: "Amazon Bedrock Getting Started",
      level: "Intermediate",
      link: "https://explore.skillbuilder.aws/learn/courses/17508/amazon-bedrock-getting-started",
    },
    {
      
      title: "AWS for Games: Cloud Game Development ",
      level: "Advanced",
      link: "https://explore.skillbuilder.aws/learn/learning-plans/1570/aws-for-games-cloud-game-development-knowledge-badge-readiness-path",
    },
  ],
},
{
  category: "DevOps",
  courses: [
    {
      
      title: "Introduction to DevOps",
      level: "Beginner",
      link: "https://www.coursera.org/learn/intro-to-devops?",
    },
    {
      
      title: "DevOps on AWS Specialization",
      level: "Intermediate",
      link: "https://www.coursera.org/specializations/aws-devops?",
    },
    {
      
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/ibm-containers-docker-kubernetes-openshift?",
    },
    {
      
      title: "DevOps, Cloud, and Agile Foundations Specialization",
      level: "Beginner",
      link: "https://www.coursera.org/learn/devops-aws-code-build-test",
    },
    {
      
      title: "DevOps on AWS: Code, Build, and Test",
      level: "Advanced",
      link: "https://www.coursera.org/specializations/devops-cloud-and-agile-foundations",
    },
  ],
},
{
  category: "UI/UX Design",
  courses: [
    {
      
      title: "UI / UX Design Specialization",
      level: "Beginner",
      link: "https://www.coursera.org/specializations/ui-ux-design?",
    },
    {
      
      title: "UI/UX Design with Sketch: Travel Booking App",
      level: "Beginner",
      link: "https://www.coursera.org/projects/uiux-design-with-sketch-travel-booking-app",
    },
    {
      
      title: "Google UX Design Professional Certificate",
      level: "Beginner",
      link: "https://www.coursera.org/professional-certificates/google-ux-design",
    },
    {
     
      title: "Foundations of User Experience (UX) Design",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/foundations-user-experience-design",
    },
    {
      
      title: "Designing User Interfaces and Experiences (UI/UX)",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/designing-user-interfaces-and-experiences-uiux",
    },
    
  ],
},
{
  category: "Figma , Canva, Adobe ",
  courses: [
    {
      
      title: "Learn Figma: User Interface Design",
      level: "Beginner",
      link: "https://www.freecodecamp.org/news/ai-web-development-tutorial-figma-designs/",
    },
    {
      
      title: "Figma for Beginners",
      level: "Beginner",
      link: "https://www.freecodecamp.org/news/design-a-scalable-mobile-app-with-figma-variants/",
    },
    {
      
      title: "Figma for Designers",
      level: "Beginner",
      link: "https://www.freecodecamp.org/news/figma-crash-course/",
    },
    {
      
      title: "Canva Design Masterclass",
      level: "Beginner",
      link: "https://www.coursera.org/projects/use-canva-to-create-desktop-and-mobile-friendly-webpages",
    },
    {
      
      title: "Adobe Photoshop for Beginners",
      level: "Beginner",
      link: "",
    },
  ],
},
{
  category: "Cybersecurity",
  courses: [
    {
      
      title: "Introduction to Cyber Security",
      level: "Beginner",
      link: "https://www.coursera.org/specializations/intro-cyber-security?",
    },
    {
      
      title: "Google Cloud Cybersecurity",
      level: "Beginner",
      link: "https://www.coursera.org/professional-certificates/google-cloud-cybersecurity-certificate",
    },
    {
      
      title: "Python for Cybersecurity",
      level: "Beginner",
      link: "https://www.coursera.org/specializations/pythonforcybersecurity",
    },
    {
     
      title: "IBM Cybersecurity Analyst",
      level: "Beginner",
      link: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
    },
    {
      
      title: "Cybersecurity Operations Fundamentals Specialization",
      level: "Advanced",
      link: "https://www.coursera.org/specializations/cbrops",
    },
  ],
},
{
  category: "Big Data",
  courses: [
    {
      
      title: "Big Data Specialization",
      level: "Beginner",
      link: "https://www.coursera.org/specializations/big-data",
    },
    {
      
      title: "Introduction to Big Data with Spark and Hadoop",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/introduction-to-big-data-with-spark-hadoop",
    },
    {
      
      title: "Big Data Integration and Processing",
      level: "Beginner",
      link: "https://www.coursera.org/learn/big-data-integration-processing",
    },
    {
     
      title: "Big Data, Artificial Intelligence, and Ethics",
      level: "Beginner",
      link: "https://www.coursera.org/learn/big-data-ai-ethics",
    },
    {
     
      title: "Big Data Modeling and Management Systems",
      level: "Beginner",
      link: "https://www.coursera.org/learn/big-data-management",
    },
  ],
},
{
  category: "Software Development",
  courses: [
    {
      
      title: "Introduction to Software Development",
      level: "Beginner",
      link: "https://www.coursera.org/learn/introduction-to-software-development",
    },
    {
      
      title: "IBM Full Stack Software Developer",
      level: "Beginner",
      link: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer?",
    },
    {
     
      title: "Microsoft Back-End Developer",
      level: "Beginner",
      link: "https://www.coursera.org/professional-certificates/microsoft-back-end-developer",
    },
    {
      
      title: "Software Engineering Specialization",
      level: "Intermediate",
      link: "https://www.coursera.org/specializations/software-engineering",
    },
    {
      
      title: "Generative AI for Software Development",
      level: "Intermediate",
      link: "https://www.coursera.org/professional-certificates/generative-ai-for-software-development",
    },
  ],
},
{
  category: "Data Structures and Algorithms (DSA)",
  courses: [
    {
      
      title: "Data Structures and Algorithm Specialization",
      level: "Beginner",
      link: "https://www.coursera.org/learn/data-structures"
      
    },
    {
      
      title: "Python Data Structures",
      level: "Intermediate",
      link: "https://www.coursera.org/learn/python-data",
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
      link: "https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/",
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
  // Function to handle button click (open link in a new tab)
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
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