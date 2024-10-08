import Sort from "../Sort/Sort";
import "./index.scss";
import React, { ChangeEvent } from 'react';

interface SearchProps {
  onSearchChange: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="header__search">
      <input
        type="text"
        className="header__search-icon"
        placeholder="Search by name, tag, email..."
        onChange={handleInputChange}
      />
      <Sort />
    </div>
  );
}

export default Search;


