import React from "react";

const Search = ({ query, setQuery }) => {
  return (
    <input
      className="w-full rounded-full px-4 py-2 text-black"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default Search;
