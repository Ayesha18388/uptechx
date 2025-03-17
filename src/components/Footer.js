import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import logo from "./logo.png"; // Correctly import the logo from the components folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Free Top Courses */}
          <div className="col-md-3 col-6 footer-section">
            <h3>FREE TOP COURSES</h3>
            <ul>
              <li><Link to="/Courses/ai">AI</Link></li>
              <li><Link to="/courses/generative-ai">Generative AI</Link></li>
              <li><Link to="/courses/dsa">DSA</Link></li>
              <li><Link to="/courses/cyber-security">Cyber Security</Link></li>
              <li><Link to="/courses/chatgpt">ChatGPT</Link></li>
              <li><Link to="/courses/data-analysis">Data Analysis</Link></li>
              <li><Link to="/Courses/Big Data">Big Data</Link></li>
              <li><Link to="/courses/web-development">Web Development</Link></li>
              <li><Link to="/courses/software-development">Software Development</Link></li>
              <li><Link to="/courses/reactjs">React.js</Link></li>
              <li><Link to="/courses/nextjs">Next.js</Link></li>
              <li><Link to="/courses/nodejs">Node.js</Link></li>
              <li><Link to="/courses/typescript">TypeScript</Link></li>
              <li><Link to="/courses/tailwind-css">Tailwind CSS</Link></li>
            </ul>
          </div>

          {/* Languages */}
          <div className="col-md-2 col-6 footer-section">
            <h3>LANGUAGES</h3>
            <ul>
              <li><Link to="/languages/python">Python</Link></li>
              <li><Link to="/languages/c">C</Link></li>
              <li><Link to="/languages/cpp">C++</Link></li>
              <li><Link to="/languages/java">Java</Link></li>
              <li><Link to="/languages/ruby">Ruby</Link></li>
              <li><Link to="/languages/php">PHP</Link></li>
            </ul>
          </div>

          {/* Cheatsheets */}
          <div className="col-md-2 col-6 footer-section">
            <h3>CHEATSHEETS</h3>
            <ul>
              <li><Link to="/cheatsheets/web-development">Web Development</Link></li>
              <li><Link to="/cheatsheets/full-stack-development">Full Stack Development</Link></li>
            </ul>
          </div>

          {/* DSA and Aptitude */}
          <div className="col-md-2 col-6 footer-section">
            <h3>DSA and APTITUDE</h3>
            <ul>
              <li><Link to="/dsa/roadmap">Roadmap</Link></li>
              <li><Link to="/dsa/problem-sheets">Problem Sheets</Link></li>
              <li><Link to="/aptitude/qualitative">Qualitative Aptitude</Link></li>
              <li><Link to="/aptitude/quantitative">Quantitative Aptitude</Link></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-md-2 col-6 footer-section">
            <h3>ABOUT US</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about/our-story">Our Story</Link></li>
              <li><Link to="/about/mission-vision">Mission & Vision</Link></li>
              <li><Link to="/about/goals">Goals</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-2 col-6 footer-section">
            <h3>CONTACT US</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/help-center">Help Center</Link></li>
              <li><Link to="/security">Security</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-2 col-6 footer-section">
            <h3>LEGAL</h3>
            <ul>
              <li><Link to="/legal/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/legal/cookies">Cookies</Link></li>
              <li><Link to="/legal/accessibility-policy">Accessibility Policy</Link></li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="col-md-2 col-6 footer-section">
            <h3>FAQ'S</h3>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <p>Connect with us:</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="icon twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon linkedin" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>All rights reserved @2025</p>
          <img src={logo} alt="UpTechX Logo" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
