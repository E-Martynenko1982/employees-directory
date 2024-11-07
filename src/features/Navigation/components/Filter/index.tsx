import React from "react";
import { useSearchParams } from 'react-router-dom';
import "./index.scss";

const Filter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFilter = searchParams.get('position') || 'All';

  const handleFilterClick = (position: string) => {
    searchParams.set('position', position);
    setSearchParams(searchParams);
  };

  const filters = [
    { label: 'All', value: 'All' },
    { label: 'Designers', value: 'Designer' },
    { label: 'Analysts', value: 'analyst' },
    { label: 'Managers', value: 'manager' },
    { label: 'iOS', value: 'ios' },
    { label: 'Android', value: 'android' },
  ];

  return (
    <ul className="header-filter__list">
      {filters.map((filter) => (
        <li
          key={filter.value}
          className={`header-filter__item ${selectedFilter === filter.value ? 'header__filter-item-button-active' : ''}`}
        >
          <button
            className={`header-filter__item-button ${selectedFilter === filter.value ? 'header__filter-item-button-active' : ''}`}
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

