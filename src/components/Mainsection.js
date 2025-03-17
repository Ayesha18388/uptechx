import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mainsection.css";

const offerings = [
  {
    title: "Free Online Courses",
    description: "We offer in-demand courses. Enhance your skills with our courses.",
    icon: "/icons/icons8-course-80.png",
    navigateTo: "/courses", // Correct navigation path
  },
  {
    title: "Hackathons & Events",
    description: "Participate in hackathons and events to showcase your skills and collaborate with others.",
    icon: "/icons/hackathon.png",
    navigateTo: "/Hackathonsandevents", // Ensure this matches the route in App.js
  },
  {
    title: "Tech News & Trends",
    description: "Stay updated with the latest tech news and trends shaping the industry.",
    icon: "/icons/icons8-notification-96.png",
    navigateTo: "/technews", // Add navigation path for Tech News
  },
  {
    title: "Scholarships",
    description: "Get financial support to pursue your education and achieve your goals.",
    icon: "/icons/icons8-scholarship-48.png",
    navigateTo: "/scholarships", // Add navigation path
  },
  {
    title: "Cheatsheets",
    description: "Quick reference guides for coding shortcuts, syntax, and key concepts.",
    icon: "/icons/file-document.png",
    navigateTo: "/cheatsheets", // Add navigation path for Cheatsheets
  },
  {
    title: "DSA & Aptitude",
    description: "Essential algorithms, problem-solving, and quick reasoning tricks.",
    icon: "/icons/algorithm.png",
    navigateTo: "/dsa-and-aptitude", // Add navigation path
  },
];

const WhatWeOffer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container id="mainsection" className="text-center my-5">
      <h2 className="text-uppercase fw-bold mb-4 purple-text">What We Offer</h2>
      <Row>
        {offerings.map((offer, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card
              className="offer-card p-4 border-0 shadow rounded-4"
              onClick={() => offer.navigateTo && navigate(offer.navigateTo)} // Navigate on click
              style={{ cursor: "pointer" }} // Add pointer cursor
            >
              <div className="icon-container mx-auto">
                <img src={offer.icon} alt={offer.title} className="offer-icon" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhatWeOffer;


