import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setFilterPosition } from "./filterSlice";
import "./index.scss";



const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector((state) => state.filter.position);

  const handleFilterClick = (filter: string) => {
    dispatch(setFilterPosition(filter));
  };

  const filters = [
    { label: 'Все', value: 'Все' },
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
          className={`header__filter-item ${selectedFilter === filter.value ? 'header__filter-item--button-active' : ''
            }`}
        >
          <button
            className="header__filter-item--button"
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
