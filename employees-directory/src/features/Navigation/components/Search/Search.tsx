import Sort from "../Sort/Sort";
import "./index.scss";
import React, { ChangeEvent } from 'react';

interface SearchProps {
  onSearchChange: (query: string) => void;
  onSortOrderChange: (sortOrder: string) => void;
  sortOrder: string;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const Search: React.FC<SearchProps> = ({
  onSearchChange,
  onSortOrderChange,
  sortOrder,
  isModalOpen,
  setIsModalOpen,
}) => {
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
      <Sort
        onSortOrderChange={onSortOrderChange}
        sortOrder={sortOrder}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Search;
