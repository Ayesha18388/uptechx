import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchData } from "./searchData"; // Import searchData

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleResultClick = (path) => {
    navigate(path);
  };

  const filteredResults = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search..." />
      <ul>
        {filteredResults.map((result, index) => (
          <li key={index} onClick={() => handleResultClick(result.path)}>
            {result.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;