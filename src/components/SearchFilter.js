import React from 'react';
import '../App.css';

const SearchFilter = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      className="search-filter"
      placeholder="Search by product name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchFilter;
