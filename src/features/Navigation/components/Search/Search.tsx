import React, { ChangeEvent } from 'react';
import Sort from "../Sort/Sort";
import { useSearchParams } from 'react-router-dom';
import "./index.scss";

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('searchText') || '';

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    if (query) {
      searchParams.set('searchText', query);
    } else {
      searchParams.delete('searchText');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="header__search">
      <div className="header__search-container">
        <img src="/images/search-icon.png" alt="SearchIcon" className='header__search-icon' />
        <input
          type="text"
          className="header__search-input"
          placeholder="Search by name, tag, email..."
          value={searchQuery}
          onChange={handleInputChange}
          name='searchText'
        />
      </div>
      <Sort />
    </div>
  );
};

export default Search;
