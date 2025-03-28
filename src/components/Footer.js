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
          <div className="col-md-3 col- 6 footer-section">
            <h3>FREE TOP COURSES</h3>
            <ul>
              <li><a href="ai.html">AI</a></li>
              <li><a href="datascience.html">DataScience</a></li>
              <li><a href="dsa.html">DSA</a></li>
              <li><a href="cybersecurity.html">Cybersecurity</a></li>
              <li><a href="chatgpt.html">ChatGPT</a></li>
              <li><a href="datanalysis.html">Data Analysis</a></li>
              <li><a href="bigdata.html">Big Data</a></li>
              <li><a href="Webdev.html">Web Development</a></li>
              <li><a href="softwaredev.html">Software Development</a></li>
              <li><a href="react.html">React</a></li>
              <li><a href="next.html">Next</a></li>
              <li><a href="typescript.html">TypeScript</a></li>
              <li><a href="tailwind.html">Tailwind</a></li>
            </ul>
          </div>
         
          {/* Languages */}
          <div className="col-md-3 col-6 footer-section">
            <h3>LANGUAGES</h3>
            <ul>
            <li><a href="https://www.geeksforgeeks.org/python-programming-language-tutorial/" target="_blank" rel="noopener noreferrer">Python</a></li> 
            <li><a href=" https://www.geeksforgeeks.org/free-c-programming-course-online/" target="_blank" rel="noopener noreferrer">C-Programming</a></li> 
             <li><a href="https://www.geeksforgeeks.org/c-plus-plus/" target="_blank" rel="noopener noreferrer">C++</a></li>
              <li><a href="https://www.w3schools.com/java/" target="_blank" rel="noopener noreferrer">Java</a></li>
              <li><a href="https://www.geeksforgeeks.org/ruby-tutorial/" target="_blank" rel="noopener noreferrer">Ruby</a></li>
              <li><a href="https://www.geeksforgeeks.org/php-tutorial/" target="_blank" rel="noopener noreferrer">PHP</a></li>
            </ul>
          </div>
          

          {/* Cheatsheets */}
          <div className="col-md-3  col-6 footer-section">
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
            <li><a href="https://roadmap.sh/datastructures-and-algorithms" target="_blank" rel="noopener noreferrer">Roadmap</a></li>
            <li><a href="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/" target="_blank" rel="noopener noreferrer">Problem Sheets</a></li>
              <li><a href="https://drive.google.com/file/d/1_w8aO8lG1r-gkBODGjYGVikM8W-dSz9J/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Qualitative Aptitude</a></li>
              <li><a href="https://drive.google.com/file/d/1_vA4I6z9I-uCTmicYRhMS_rNgxMiOac3/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Quantitative Aptitude</a></li>
              
            </ul>
          </div>


          {/* About Us */}
          <div className="col-md-2 col-6 footer-section">
            <h3>ABOUT US</h3>
            <ul>
              <li><a href="/about.html">About us</a></li> {/* Use anchor tag */}
              <li><a href="/our-story.html">Our Story</a></li> {/* Use anchor tag */}
              <li><a href="/mission-vision.html">Mission & vision</a></li> {/* Use anchor tag */}
              <li><a href="/Goals.html">Goals</a></li> {/* Use anchor tag */}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-2 col-6 footer-section">
            <h3>CONTACT US</h3>
            <ul>
              <li><a href="/contact us.html">Contact us</a></li> {/* Use anchor tag */}
              <li><a href="/security.html">Security</a></li> {/* Use anchor tag */}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-2 col-6 footer-section">
            <h3>LEGAL</h3>
            <ul>
              <li><a href="/Privacy-policy.html">Privacy Policy</a></li> {/* Use anchor tag */}
              <li><a href="/Accessibility.html">Accessibility Policy</a></li> {/* Use anchor tag */}
            </ul>
          </div>

          {/* FAQ */}
          <div className="col-md-2 col-6 footer-section">
            <h3>FAQ'S</h3>
            <ul>
              <li><a href="/FAQ.html">FAQ</a></li> {/* Use anchor tag */}
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
