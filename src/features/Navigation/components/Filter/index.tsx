import React from "react";
import { useSearchParams } from 'react-router-dom';
import filters from "./configs";
import "./index.scss";

const Filter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFilter = searchParams.get('position') || 'All';

  const handleFilterClick = (position: string) => {
    searchParams.set('position', position);
    setSearchParams(searchParams);
  };



  return (
    <ul className="header-filter__list">
      {filters.map((filter) => (
        <li
          key={filter.value}
          className="header-filter__item"
        >
          <button
            className={`header-filter__item-button ${selectedFilter === filter.value ? 'header-filter__item-button-active' : ''}`}
            onClick={() => handleFilterClick(filter.value)}
          >
            {filter.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;


