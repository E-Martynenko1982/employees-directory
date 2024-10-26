import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilterPosition, selectFilterPosition } from '../../../../redux/filterSlice';
import { useSearchParams } from 'react-router-dom';
import type { RootState, AppDispatch } from '../../../../redux/store';
import "./index.scss";

const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedFilter = useSelector((state: RootState) => selectFilterPosition(state));
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterClick = (position: string) => {
    dispatch(setFilterPosition(position));

    searchParams.set('position', position);
    setSearchParams(searchParams);
  };

  const filters = [
    { label: 'All', value: 'All' },
    { label: 'Designers', value: 'designer' },
    { label: 'Analysts', value: 'analyst' },
    { label: 'Managers', value: 'manager' },
    { label: 'iOS', value: 'ios' },
    { label: 'Android', value: 'android' },
  ];

  return (
    <ul className="header__filter-list">
      {filters.map((filter) => (
        <li
          key={filter.value}
          className={`header__filter-item ${selectedFilter === filter.value ? 'header__filter-item--button-active' : ''}`}
        >
          <button
            className={`header__filter-item--button ${selectedFilter === filter.value ? 'header__filter-item--button-active' : ''}`}
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
