import React from "react";
import "./index.scss";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const handleFilterClick = (filter: string) => {
    onFilterChange(filter);
  }

  return (
    <>
      <ul className="header__filter-list">
        <li className="header__filter-item header__filter-item--button-active">
          <button className="header__filter-item--button"
            onClick={() => handleFilterClick('Все')}
          >Все</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button"
            onClick={() => handleFilterClick('designer')}
          >Designers</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button"
            onClick={() => handleFilterClick('analyst')}
          >Analysts</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button"
            onClick={() => handleFilterClick('manager')}
          >Managers</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button"
            onClick={() => handleFilterClick('ios')}
          >iOS</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button"
            onClick={() => handleFilterClick('android')}
          >Android</button>
        </li>
      </ul>
    </>
  );
}

export default Filter;
