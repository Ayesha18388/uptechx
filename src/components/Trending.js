import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Trending.css";

const trendingData = [
  {
    image: "/image/data science.png",
    title: "Data Science",
    category: "Data Science",
  },
  {
    image: "/image/devops.png",
    title: "Devops",
    category: "DevOps",
  },
  {
    image: "/image/cc.png",
    title: "Cloud Computing",
    category: "Cloud Computing",
  },
  {
    image: "/image/sd.png",
    title: "Software Development",
    category: "Software Development",
  },
];

const Trending = () => {
  const navigate = useNavigate();

  const handleStartLearning = (category) => {
    switch (category) {
      case "Data Science":
        window.location.href = "/datascience.html"; // Navigate to datascience.html
        break;
      case "DevOps":
        window.location.href = "/devops.html"; // Navigate to devops.html
        break;
      case "Cloud Computing":
        window.location.href = "/cc.html"; // Navigate to cc.html
        break;
      case "Software Development":
        window.location.href = "/softwaredev.html"; // Navigate to softwaredevelopment.html
        break;
      default:
        navigate(`/courses?category=${encodeURIComponent(category)}`);
        break;
    }
  };

  return (
    <div className="trending-section">
      <h2>Trending</h2>
      <motion.div
        className="trending-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {trendingData.map((item, index) => (
          <motion.div
            className="trending-item"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <p className="title">{item.title}</p>
            <motion.button
              className="start-learning"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleStartLearning(item.category)}
            >
              Start Learning
            </motion.button>
            <p className="free">free</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Trending;
