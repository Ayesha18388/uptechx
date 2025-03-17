import React from "react";
import "./Hackathonsandevents.css";

const hackathonsData = [
  {
    title: "HackIndia 2025",
    dates: "To be announced",
    mode: "Online",
    description: "India’s largest Web3 and AI hackathon, aimed at empowering the next generation of innovators.",
    registration: "Open",
    link: "https://www.airmeet.com/hub/blog/famous-hackathons-of-india/?utm_source=chatgpt.com",
  },
  {
    title: "HackForce Challenge 2025",
    dates: "To be announced",
    mode: "Online",
    description: "A two-day coding event focused on solving real-world challenges using AI, emphasizing web development, machine learning, and data structures.",
    registration: "Open",
    link: "https://reskilll.com/allhacks?utm_source=chatgpt.com",
  },
  
  {
    title: "Cognizance 2025",
    dates: "March 21–23, 2025",
    mode: "Offline",
    location: "Indian Institute of Technology Roorkee, Uttarakhand",
    description: "Asia's second-largest student-run technical festival, featuring over 200 events, including technical competitions, workshops, exhibitions, and guest lectures.",
    registration: "Open",
    link: "https://en.wikipedia.org/wiki/Cognizance%2C_IIT_Roorkee?utm_source=chatgpt.com",
  },
  {
    title: "Techkriti 2025",
    dates: "March 27–31, 2025",
    mode: "Offline",
    location: "Indian Institute of Technology Kanpur, Uttar Pradesh",
    description: "An annual five-day inter-collegiate technical and entrepreneurial festival, offering workshops, talks, and competitions in various domains of technology and entrepreneurship.",
    registration: "Open",
    link: "https://www.airmeet.com/hub/blog/famous-hackathons-of-india/?utm_source=chatgpt.com",
  },
  {
    title: "Ojass 2025",
    dates: "April 5–7, 2025",
    mode: "Offline",
    location: "National Institute of Technology Jamshedpur, Jharkhand",
    description:
      "A three-day techno-management fest featuring events, workshops, and guest lectures aimed at fostering innovation and technical skills among students.",
    registration: "Open",
    link: "https://www.airmeet.com/hub/blog/famous-hackathons-of-india/?utm_source=chatgpt.com",
  },
  {
    title: "Hack - O - Octo 2.0",
    dates: "February 25–March 25, 2025",
    mode: "Online",
    description:
      "A high-energy innovation marathon bringing together developers, designers, and tech enthusiasts to solve real-world challenges through technology.",
    registration: "Open until March 25, 2025",
    link: "https://reskilll.com/allhacks?utm_source=chatgpt.com",
  },
  {
    title: "Imagine Cup x AVV Amaravati",
    dates: "To be announced",
    mode: "Offline",
    location: "Amaravati, Andhra Pradesh",
    description:
      "A local version of the global Imagine Cup competition, inspiring students to innovate and create impactful projects using technology.",
    registration: "Open",
    link: "https://airmeet.com/hub/blog/famous-hackathons-of-india/?utm_source=chatgpt.com",
  },
  {
    title: "IE India Experience Day 2025 – Bangalore",
    dates: "March 3, 2025",
    mode: "Offline",
    location: "Cowrks Residency Road, Bengaluru",
    description:
      "An event offering insights into IE University's programs, with opportunities to interact with faculty and alumni.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india--bangalore/hackathon-events/?utm_source=chatgpt.com",
  },
  {
    title: "2nd Annual Business Transformation & Operational Excellence (BTOPEX) India",
    dates: "February 20, 2025",
    mode: "Offline",
    location: "Bengaluru",
    description:
      "A conference focusing on the future of business transformation and operational excellence.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/business-transformation-excellence-india-2025/?utm_source=chatgpt.com",
  },
  {
    title: "Health Tech Summit’25 – Mumbai",
    dates: "February 1, 2025",
    mode: "Offline",
    location: "IRA By Orchid Mumbai – T2 International Airport",
    description:
      "A summit focusing on innovations and advancements in health technology, bringing together industry experts and professionals.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/hackathons/?utm_source=chatgpt.com",
  },
  {
    title: "Innovation Hackathon 2025",
    dates: "April 10-11, 2025",
    mode: "Online",
    description:
      "A 48-hour hackathon focusing on social good innovations using technology to solve real-world problems.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/innovation-hackathon/?utm_source=chatgpt.com",
  },
  {
    title: "Hackathon of the Future 2025",
    dates: "May 5–6, 2025",
    mode: "Offline",
    location: "Hyderabad",
    description:
      "A two-day hackathon focused on futuristic technologies like quantum computing, AI, and IoT.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/hackathon-of-the-future-2025/?utm_source=chatgpt.com",
  },
  {
    title: "Mumbai Tech Fest 2025",
    dates: "May 15-17, 2025",
    mode: "Offline",
    location: "Mumbai",
    description:
      "A three-day event focusing on technology innovations, with keynote speakers, panel discussions, and workshops in various tech domains.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/mumbai-tech-fest-2025/?utm_source=chatgpt.com",
  },

  
  {
    title: "VIT Hackathon 2025",
    date: "May 22-24, 2025",
    mode: "Offline",
    location: "VIT University, Vellore",
    description:
      "A student-led hackathon with a focus on tech-driven solutions for education, healthcare, and sustainability.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/vit-hackathon-2025/?utm_source=chatgpt.com",
  },
  {
    title: "AI for India 2025",
    date: "June 10-12, 2025",
    mode: "Online",
    description:
      "A nationwide AI hackathon, inviting participants to innovate AI solutions addressing India’s social and economic challenges.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/ai-for-india-hackathon/?utm_source=chatgpt.com",
  },
  {
    title: "GITAM Tech Fest 2025",
    date: "June 20–22, 2025",
    mode: "Offline",
    location: "GITAM University, Visakhapatnam",
    description:
      "A tech festival featuring tech talks, workshops, competitions, and hands-on activities across a variety of technologies.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/gitam-tech-fest-2025/?utm_source=chatgpt.com",
  },
  {
    title: "Technozion 2025",
    date: "July 5-7, 2025",
    mode: "Offline",
    location: "National Institute of Technology, Warangal",
    description:
      "Technozion is a tech fest that brings together tech enthusiasts and innovators for workshops, competitions, and fun-filled events.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/technozion-2025/?utm_source=chatgpt.com",
  },
  {
    title: "Code for Good 2025",
    date: "July 15-17, 2025",
    mode: "Online",
    description:
      "A global virtual hackathon for developers to create tech solutions that address social problems and create positive impact in communities.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/code-for-good-hackathon/?utm_source=chatgpt.com",
  },
  {
    title: "YuvaHack 2025",
    date: "August 1-3, 2025",
    mode: "Offline",
    location: "Delhi",
    description:
      "A youth-driven hackathon bringing together passionate young developers to build innovative projects in the fields of technology and social impact.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/yuva-hack-2025/?utm_source=chatgpt.com",
  },
  {
    title: "DevFest 2025",
    date: "August 15-17, 2025",
    mode: "Offline",
    location: "Pune",
    description:
      "A three-day developer-focused event, with workshops, coding sessions, and talks on various emerging technologies like AI, machine learning, and cloud computing.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/devfest-2025/?utm_source=chatgpt.com",
  },
  {
    title: "Startup Weekend Bengaluru 2025",
    dates: "September 10-12, 2025",
    mode: "Offline",
    location: "Bengaluru",
    description:
      "A 54-hour event where developers, designers, and business professionals work together to create a startup in just one weekend.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/startup-weekend-bengaluru-2025/?utm_source=chatgpt.com"
  },
  {
    title: "Tech Fest India 2025",
    dates: "October 1-3, 2025",
    mode: "Offline",
    location: "New Delhi",
    description:
      "A massive technology festival that brings together leading tech experts, entrepreneurs, and developers for a series of workshops, talks, and networking opportunities.",
    registration: "Open",
    link: "https://www.eventbrite.com/d/india/tech-fest-india-2025/?utm_source=chatgpt.com"
  }






];

const Hackathons = () => {
  return (
    <div className="container">
      <h1 className="title">Upcoming Hackathons and Tech Events in India (2025)</h1>
      <div className="event-list">
        {hackathonsData.map((event, index) => (
          <div key={index} className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p><strong>Dates:</strong> {event.dates}</p>
            <p><strong>Mode:</strong> {event.mode}</p>
            {event.location && <p><strong>Location:</strong> {event.location}</p>}
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Registration:</strong> {event.registration}</p>
            <p>
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                More Information
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;