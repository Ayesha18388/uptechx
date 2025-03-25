
// eslint-disable-next-line
import React, { useState } from "react";

import "./Scholarships.css";
import { FaBookmark, FaRegBookmark } from "react-icons/fa"; // Import save icons

const scholarships = [
    {
      id: 1,
      title: 'NextGen Edu Scholarship 2024-25',
      offeredBy: 'EY Global Delivery Services',
      eligibility: 'Class 11 students',
      benefits: '₹15,000',
      link: 'https://www.buddy4study.com/page/nextgen-edu-scholarship',
    },
    {
      id: 2,
      title: 'Disha Scholarship Program',
      offeredBy: 'Birlasoft',
      eligibility: 'Undergraduate (General/Professional courses)',
      benefits: 'Up to ₹25,000 annually',
      link: 'https://www.buddy4study.com/page/disha-scholarship-program',
    },
    {
      id: 3,
      title: 'PHINIA Scholarship Program 2024-25',
      offeredBy: 'PHINIA',
      eligibility: 'B.Tech/B.E. (2nd year and above)',
      benefits: '50% of annual tuition fees',
      link: 'https://www.buddy4study.com/page/phinia-scholarship-program',
    },
    {
      id: 4,
      title: "Appinventiv 'Edu Boost' Scholarship Program",
      offeredBy: 'Appinventiv Foundation',
      eligibility: 'B.Tech students (CSE, IT, ECE, EEE), BCA',
      benefits: '₹30,000 one-time scholarship',
      link: 'https://www.buddy4study.com/page/appinventiv-edu-boost-scholarship-program',
    },
    {
      id: 5,
      title: 'The Cadence Scholarship Program',
      offeredBy: 'Cadence Design Systems & Concern India Foundation',
      eligibility: 'Undergraduate/Postgraduate students',
      benefits: 'Financial support for education',
      link: 'https://www.buddy4study.com/page/the-cadence-scholarship-program',
    },
    {
      id: 6,
      title: 'Global Study UK Scholarship',
      offeredBy: 'Global Study UK',
      eligibility: 'Students applying to UK universities',
      benefits: '£1,000 - £5,000',
      link: 'https://www.buddy4study.com/page/global-study-uk-scholarship',
    },
    {
      id: 7,
      title: 'Bihar Scholarship 2024',
      offeredBy: 'Bihar Government',
      eligibility: 'Residents of Bihar',
      benefits: 'Financial aid for various educational levels',
      link: 'https://www.buddy4study.com/page/bihar-scholarship',
    },
    {
      id: 8,
      title: 'Prerana Scholarship 2024',
      offeredBy: 'Government of Odisha',
      eligibility: 'SC, ST, SEBC students',
      benefits: 'Full tuition fee coverage',
      link: 'https://www.buddy4study.com/page/prerana-scholarship',
    },
    {
      id: 9,
      title: 'Scholarships for UG and PG Students by Indian Oil',
      offeredBy: 'Indian Oil Corporation',
      eligibility: 'Undergraduate/Postgraduate students',
      benefits: '₹1,000 - ₹5,000 monthly stipend',
      link: 'https://www.buddy4study.com/page/scholarships-for-ug-and-pg-students-by-indian-oil',
    },
    {
      id: 10,
      title: 'Microsoft Research India PhD Fellowship',
      offeredBy: 'Microsoft Research India',
      eligibility: 'Ph.D. students in India',
      benefits: 'Full tuition fee support',
      link: 'https://www.buddy4study.com/page/microsoft-research-india-phd-fellowship',
    },
    {
      id: 11,
      title: 'HDFC Educational Crisis Scholarship',
      offeredBy: 'HDFC Ltd.',
      eligibility: 'Students affected by a crisis',
      benefits: '₹10,000 - ₹50,000',
      link: 'https://www.buddy4study.com/page/hdfc-educational-crisis-scholarship',
    },
    {
      id: 12,
      title: 'Tata Scholarship for Indian Students',
      offeredBy: 'Tata Education and Development Trust',
      eligibility: 'Undergraduate students applying to Cornell University, USA',
      benefits: 'Full scholarship covering tuition, accommodation, and other expenses',
      link: 'https://www.buddy4study.com/page/tata-scholarship',
    },
    {
      id: 13,
      title: 'Nurture the Future Scholarship',
      offeredBy: 'XIME',
      eligibility: 'MBA students',
      benefits: '₹50,000 - ₹2,00,000',
      link: 'https://www.buddy4study.com/page/nurture-the-future-scholarship',
    },
    {
      id: 14,
      title: 'L’Oréal India For Young Women in Science Scholarship',
      offeredBy: 'L’Oréal India',
      eligibility: 'Female students pursuing science-related undergraduate courses',
      benefits: '₹2,50,000',
      link: 'https://www.buddy4study.com/page/loreal-india-for-young-women-in-science-scholarship',
    },
    {
      id: 15,
      title: 'Google India PhD Fellowship',
      offeredBy: 'Google India',
      eligibility: 'PhD students from Indian universities',
      benefits: '₹3,00,000 per year',
      link: 'https://www.buddy4study.com/page/google-india-phd-fellowship',
    },
    {
      id: 16,
      title: "Dr. Reddy's Foundation's Sashakt Scholarship",
      offeredBy: "Dr. Reddy's Foundation",
      eligibility: "Female students in undergraduate courses",
      benefits: "₹50,000 per year",
      link: "https://www.buddy4study.com/page/dr-reddys-foundation-sashakt-scholarship",
    },
    {
      id: 17,
      title: "Indian Oil Academic Scholarship",
      offeredBy: "Indian Oil Corporation",
      eligibility: "Students in undergraduate or postgraduate programs",
      benefits: "₹10,000 - ₹20,000 per year",
      link: "https://www.buddy4study.com/page/indian-oil-academic-scholarship",
    },
    {
      id: 18,
      title: "Pradhan Mantri Scholarship Scheme",
      offeredBy: "Government of India",
      eligibility: "Children of deceased and disabled personnel of armed forces",
      benefits: "Up to ₹10,000 per year",
      link: "https://www.buddy4study.com/page/pradhan-mantri-scholarship-scheme",
    },
    {
      id: 19,
      title: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
      offeredBy: "Department of Science and Technology, Government of India",
      eligibility: "Students pursuing basic science courses",
      benefits: "₹5,000 per month",
      link: "https://www.buddy4study.com/page/kvpy-scholarship",
    },
  
    {
        id: 20,
        title: "Fair and Lovely Foundation Scholarship",
        offeredBy: "Fair and Lovely Foundation",
        eligibility: "Female students pursuing higher education",
        benefits: "₹1,00,000 for course fees",
        link: "https://www.buddy4study.com/page/fair-and-lovely-foundation-scholarship",
      },
      {
        id: 21,
        title: "PG Indira Gandhi Scholarship for Single Girl Child",
        offeredBy: "University Grants Commission (UGC)",
        eligibility: "Single girl child pursuing post-graduate courses",
        benefits: "₹36,200 per year",
        link: "https://www.buddy4study.com/page/pg-indira-gandhi-scholarship-for-single-girl-child",
      },
      {
        id: 22,
        title: "Narotam Sekhsaria Foundation Scholarship",
        offeredBy: "Narotam Sekhsaria Foundation",
        eligibility: "Postgraduate students from India",
        benefits: "₹20,00,000 for study abroad",
        link: "https://www.buddy4study.com/page/narotam-sekhsaria-foundation-scholarship",
      },
      {
        id: 23,
        title: "Swami Vivekananda Merit Cum Means Scholarship",
        offeredBy: "Government of West Bengal",
        eligibility: "Undergraduate students from West Bengal",
        benefits: "₹500 - ₹5,000 per month",
        link: "https://www.buddy4study.com/page/swami-vivekananda-merit-cum-means-scholarship",
      },
      {
        id: 24,
        title: "IIT Kanpur Merit-cum-Means Scholarship",
        offeredBy: "IIT Kanpur",
        eligibility: "Students pursuing B.Tech from IIT Kanpur",
        benefits: "Tuition fee coverage",
        link: "https://www.buddy4study.com/page/iit-kanpur-merit-cum-means-scholarship",
      },
      {
        id: 25,
        title: "Inlaks Shivdasani Foundation Scholarship",
        offeredBy: "Inlaks Shivdasani Foundation",
        eligibility: "Indian students pursuing a Master's degree abroad",
        benefits: "Up to ₹20,00,000 for study abroad",
        link: "https://www.buddy4study.com/page/inlaks-shivdasani-foundation-scholarship",
      },
      {
        id: 26,
        title: "Jawaharlal Nehru Memorial Fund Scholarship",
        offeredBy: "Jawaharlal Nehru Memorial Fund",
        eligibility: "Indian students pursuing M.Phil/Ph.D.",
        benefits: "₹18,000 per month",
        link: "https://www.buddy4study.com/page/jawaharlal-nehru-memorial-fund-scholarship",
      },
      {
        id: 27,
        title: "UNESCO/Keizo Obuchi Research Fellowship",
        offeredBy: "UNESCO",
        eligibility: "International students pursuing a Ph.D. in the field of human resources",
        benefits: "Full tuition and living stipend",
        link: "https://www.buddy4study.com/page/unesco-keizo-obuchi-research-fellowship",
      },
      {
        id: 28,
        title: "British Council India IELTS Scholarship",
        offeredBy: "British Council India",
        eligibility: "Students who wish to study abroad",
        benefits: "£3,000 towards tuition fees",
        link: "https://www.buddy4study.com/page/british-council-india-ielts-scholarship",
      },
      {
        id: 29,
        title: "K.C. Mahindra Education Trust Scholarship",
        offeredBy: "K.C. Mahindra Education Trust",
        eligibility: "Indian students pursuing post-graduate studies abroad",
        benefits: "₹1,00,000 - ₹5,00,000",
        link: "https://www.buddy4study.com/page/k-c-mahindra-education-trust-scholarship",
      },
      {
        id: 30,
        title: "Narayan Bhatnagar Memorial Scholarship",
        offeredBy: "Narayan Bhatnagar Foundation",
        eligibility: "Students from economically disadvantaged backgrounds",
        benefits: "₹50,000 per year",
        link: "https://www.buddy4study.com/page/narayan-bhatnagar-memorial-scholarship",
      },
      ];
    
const Scholarships = ({ savedItems, setSavedItems }) => {
  const toggleSave = (item) => {
    let updatedSavedItems;
    if (savedItems.some((saved) => saved.id === item.id)) {
      updatedSavedItems = savedItems.filter((saved) => saved.id !== item.id);
    } else {
      updatedSavedItems = [...savedItems, item];
    }
    setSavedItems(updatedSavedItems);
    localStorage.setItem("savedItems", JSON.stringify(updatedSavedItems)); // Persist saved items in local storage
  };

  return (
    <div className="scholarships-container">
      <h1 className="title">Scholarships for Students</h1>
      <div className="scholarship-list">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="scholarship-card">
            <div className="scholarship-header">
              <h2 className="scholarship-title">{scholarship.title}</h2>
              <button
                className="save-icon"
                onClick={() => toggleSave(scholarship)}
                aria-label="Save Scholarship"
              >
                {savedItems.some((saved) => saved.id === scholarship.id) ? (
                  <FaBookmark color="#007bff" />
                ) : (
                  <FaRegBookmark color="#555" />
                )}
              </button>
            </div>
            <p><strong>Offered By:</strong> {scholarship.offeredBy}</p>
            <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
            <p><strong>Benefits:</strong> {scholarship.benefits}</p>
            <p>
              <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
                More Information
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;