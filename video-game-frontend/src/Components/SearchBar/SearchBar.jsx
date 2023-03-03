import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchKeyword);
  };
  return (
    <form onSubmit={handleSubmit} className="search">
      <label>Game Search</label>
      <div className="searchInputs">
        <input
          type="text"
          onChange={(event) => setSearchKeyword(event.target.value)}
          value={searchKeyword}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
