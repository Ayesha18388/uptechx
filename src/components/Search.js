import React, { useEffect } from "react";

async function fetchData() {
  try {
    const response = await fetch("db.json");
    const data = await response.json();
    return {
      courses: data.courses || [],
      cheatsheets: data.cheatsheets || [],
      dsaAndAptitude: data.dsaAndAptitude || [],
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      courses: [],
      cheatsheets: [],
      dsaAndAptitude: [],
    };
  }
}

async function loadData() {
  const coursesList = document.getElementById("coursesList");
  const cheatsheetsList = document.getElementById("cheatsheetsList");
  const dsaAndAptitudeList = document.getElementById("dsaAndAptitudeList");

  if (!coursesList || !cheatsheetsList || !dsaAndAptitudeList) {
    console.error("One or more elements are missing in the DOM.");
    return;
  }

  coursesList.innerHTML = "<p>Loading courses...</p>";
  cheatsheetsList.innerHTML = "<p>Loading cheatsheets...</p>";
  dsaAndAptitudeList.innerHTML = "<p>Loading DSA and Aptitude...</p>";

  try {
    const { courses, cheatsheets, dsaAndAptitude } = await fetchData();

    // Load Courses
    if (courses.length > 0) {
      coursesList.innerHTML = "";
      courses.forEach((category) => {
        const categoryItem = document.createElement("li");
        categoryItem.innerHTML = `<strong>${category.category}</strong>`;
        const courseItems = category.courses
          .map(
            (course) =>
              `<li><strong>${course.title}</strong> - <a href="${course.link}" target="_blank">View</a></li>`
          )
          .join("");
        categoryItem.innerHTML += `<ul>${courseItems}</ul>`;
        coursesList.appendChild(categoryItem);
      });
    } else {
      coursesList.innerHTML = "<p>No courses available.</p>";
    }

    // Load Cheatsheets
    if (cheatsheets.length > 0) {
      cheatsheetsList.innerHTML = "";
      cheatsheets.forEach((category) => {
        const categoryItem = document.createElement("li");
        categoryItem.innerHTML = `<strong>${category.category}</strong>`;
        const cheatsheetItems = category.items
          .map(
            (item) =>
              `<li><strong>${item.title}</strong> - <a href="${item.link}" target="_blank">View</a></li>`
          )
          .join("");
        categoryItem.innerHTML += `<ul>${cheatsheetItems}</ul>`;
        cheatsheetsList.appendChild(categoryItem);
      });
    } else {
      cheatsheetsList.innerHTML = "<p>No cheatsheets available.</p>";
    }

    // Load DSA and Aptitude
    if (dsaAndAptitude.length > 0) {
      dsaAndAptitudeList.innerHTML = "";
      dsaAndAptitude.forEach((category) => {
        const categoryItem = document.createElement("li");
        categoryItem.innerHTML = `<strong>${category.category}</strong>`;
        const dsaItems = category.items
          .map(
            (item) =>
              `<li><strong>${item.title}</strong> - <a href="${item.link}" target="_blank">View</a></li>`
          )
          .join("");
        categoryItem.innerHTML += `<ul>${dsaItems}</ul>`;
        dsaAndAptitudeList.appendChild(categoryItem);
      });
    } else {
      dsaAndAptitudeList.innerHTML = "<p>No DSA and Aptitude data available.</p>";
    }
  } catch (error) {
    console.error("Error loading data:", error);
    coursesList.innerHTML = "<p>Failed to load courses.</p>";
    cheatsheetsList.innerHTML = "<p>Failed to load cheatsheets.</p>";
    dsaAndAptitudeList.innerHTML = "<p>Failed to load DSA and Aptitude data.</p>";
  }
}

async function filterData() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const { courses, cheatsheets, dsaAndAptitude } = await fetchData();

  const coursesList = document.getElementById("coursesList");
  const cheatsheetsList = document.getElementById("cheatsheetsList");
  const dsaAndAptitudeList = document.getElementById("dsaAndAptitudeList");

  // Filter Courses
  const filteredCourses = courses.map((category) => ({
    ...category,
    courses: category.courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchInput) ||
        category.category.toLowerCase().includes(searchInput)
    ),
  }));

  coursesList.innerHTML = "";
  filteredCourses.forEach((category) => {
    if (category.courses.length > 0) {
      const categoryItem = document.createElement("li");
      categoryItem.innerHTML = `<strong>${category.category}</strong>`;
      const courseItems = category.courses
        .map(
          (course) =>
            `<li><strong>${course.title}</strong> - <a href="${course.link}" target="_blank">View</a></li>`
        )
        .join("");
      categoryItem.innerHTML += `<ul>${courseItems}</ul>`;
      coursesList.appendChild(categoryItem);
    }
  });

  // Filter Cheatsheets
  const filteredCheatsheets = cheatsheets.map((category) => ({
    ...category,
    items: category.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchInput) ||
        category.category.toLowerCase().includes(searchInput)
    ),
  }));

  cheatsheetsList.innerHTML = "";
  filteredCheatsheets.forEach((category) => {
    if (category.items.length > 0) {
      const categoryItem = document.createElement("li");
      categoryItem.innerHTML = `<strong>${category.category}</strong>`;
      const cheatsheetItems = category.items
        .map(
          (item) =>
            `<li><strong>${item.title}</strong> - <a href="${item.link}" target="_blank">View</a></li>`
        )
        .join("");
      categoryItem.innerHTML += `<ul>${cheatsheetItems}</ul>`;
      cheatsheetsList.appendChild(categoryItem);
    }
  });

  // Filter DSA and Aptitude
  const filteredDSA = dsaAndAptitude.map((category) => ({
    ...category,
    items: category.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchInput) ||
        category.category.toLowerCase().includes(searchInput)
    ),
  }));

  dsaAndAptitudeList.innerHTML = "";
  filteredDSA.forEach((category) => {
    if (category.items.length > 0) {
      const categoryItem = document.createElement("li");
      categoryItem.innerHTML = `<strong>${category.category}</strong>`;
      const dsaItems = category.items
        .map(
          (item) =>
            `<li><strong>${item.title}</strong> - <a href="${item.link}" target="_blank">View</a></li>`
        )
        .join("");
      categoryItem.innerHTML += `<ul>${dsaItems}</ul>`;
      dsaAndAptitudeList.appendChild(categoryItem);
    }
  });
}

const Search = () => {
  useEffect(() => {
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
      searchInput.addEventListener("input", filterData);
    } else {
      console.error("Search input element not found in the DOM.");
    }

    // Initialize the data loading
    loadData();

    // Cleanup event listener on component unmount
    return () => {
      if (searchInput) {
        searchInput.removeEventListener("input", filterData);
      }
    };
  }, []);

  return (
    <div>
      <h1>Search Courses, Cheatsheets, and DSA</h1>
      <input type="text" id="searchInput" placeholder="Search..." />
      <div>
        <h2>Courses</h2>
        <ul id="coursesList"></ul>
      </div>
      <div>
        <h2>Cheatsheets</h2>
        <ul id="cheatsheetsList"></ul>
      </div>
      <div>
        <h2>DSA and Aptitude</h2>
        <ul id="dsaAndAptitudeList"></ul>
      </div>
    </div>
  );
};

export default Search;