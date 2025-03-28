import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { searchData } from "./searchData"; // Import searchData

// const SearchComponent = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleResultClick = (path) => {
//     navigate(path);
//   };

//   const filteredResults = searchData.filter((item) =>
//     item.title.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div>
//       <input type="text" value={query} onChange={handleSearch} placeholder="Search..." />
//       <ul>
//         {filteredResults.map((result, index) => (
//           <li key={index} onClick={() => handleResultClick(result.path)}>
//             {result.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//export default Search;

async function fetchJobs() {
  const response = await fetch('db.json');
  const data = await response.json();
  return data.jobs;
}

// Load initial job listings
async function loadJobs() {
  const jobList = document.getElementById('jobList');
  jobList.innerHTML = '';
  
  const jobs = await fetchJobs();
  jobs.forEach((job) => {
      const jobItem = document.createElement('li');
      jobItem.innerHTML = `
          <strong>${job.title}</strong> at <em>${job.company}</em>
          <p>${job.description.substring(0, 100)}...</p>
      `;
      jobItem.onclick = () => viewJobDetails(job);
      jobList.appendChild(jobItem);
  });
}

// Filter job listings based on search input
async function filterJobs() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const jobs = await fetchJobs();
  
  const filteredJobs = jobs.filter(job => 
      job.title.toLowerCase().includes(searchInput) || 
      job.company.toLowerCase().includes(searchInput)
  );
  
  const jobList = document.getElementById('jobList');
  jobList.innerHTML = '';
  
  filteredJobs.forEach(job => {
      const jobItem = document.createElement('li');
      jobItem.innerHTML = `
          <strong>${job.title}</strong> at <em>${job.company}</em>
          <p>${job.description.substring(0, 100)}...</p>
      `;
      jobItem.onclick = () => viewJobDetails(job);
      jobList.appendChild(jobItem);
  });
}

// View job details and navigate to job.html
function viewJobDetails(job) {
  localStorage.setItem('selectedJob', JSON.stringify(job));
  window.location.href = 'job.html';
}

// Add a new job (Admin-only functionality)
async function addJob(event) {
  event.preventDefault();

}

// Initialize the job portal
// document.addEventListener('DOMContentLoaded', loadJobs);