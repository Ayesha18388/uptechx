import React from "react";
// eslint-disable-next-line
import Navbar from "./Navbar";
import Hero from "./Hero"; // Import the Hero component
import Mainsection from "./Mainsection";
import WhyChooseUs from "./WhyChooseUs";
import Benefits from "./Benefits";
import Trending from "./Trending";
import Feedback from "./Feedback";
// eslint-disable-next-line
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      
      <Hero /> {/* Add the Hero component here */}
      <Mainsection />
      <WhyChooseUs />
      <Benefits />
      <Trending />
      <Feedback /> {/* Add the Feedback component here */}
     
    </div>
  );
};

export default Home;