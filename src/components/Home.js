import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero"; // Import the Hero component
import Mainsection from "./Mainsection";
import WhyChooseUs from "./WhyChooseUs";
import Benefits from "./Benefits";
import Trending from "./Trending";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      
      <Hero /> {/* Add the Hero component here */}
      <Mainsection />
      <WhyChooseUs />
      <Benefits />
      <Trending />
      
    </div>
  );
};

export default Home;