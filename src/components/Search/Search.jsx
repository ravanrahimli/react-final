import React, { useState } from "react";

function MovieSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(query);
  };

  return (
    <div className="movie-search">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for a movie..."
        className="search-input"
      />
      <button onClick={handleSearchSubmit} className="search-button">
        Search
      </button>
    </div>
  );
}

export default MovieSearch;
