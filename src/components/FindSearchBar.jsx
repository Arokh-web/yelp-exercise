import React from "react";
import { useState, useEffect } from "react";

const FindSearchBar = ({ data, setter }) => {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSearch = (e) => {
    const dataTest = data.filter((item) => {
      return item.title.toLowerCase().includes(userInput.toLowerCase());
    });

    setter(dataTest);
    console.log(dataTest);
  };

  return (
    <div>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="search"
          className="grow"
          placeholder="Search for Restaurant"
        />
        <button onClick={handleSearch} className="btn btn-ghost">
          Search
        </button>
      </label>
    </div>
  );
};

export default FindSearchBar;
