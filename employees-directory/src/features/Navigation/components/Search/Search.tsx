import React, { ChangeEvent } from 'react';
import Sort from "../Sort/Sort";
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setSearchQuery, selectSearchQuery } from '../Search/searchSlice';
import { useSearchParams } from 'react-router-dom';
import SearchIcon from "../../../../public/img/search-icon.png";
import "./index.scss";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));

    if (query) {
      searchParams.set('search', query);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="header__search">
      <div className="header__search-container">
        <img src={SearchIcon} alt="SearchIcon" className='header__search-icon' />
        <input
          type="text"
          className="header__search-input"
          placeholder="Search by name, tag, email..."
          value={searchQuery}
          onChange={handleInputChange}
          name='search'
        />
      </div>
      <Sort />
    </div>
  );
};

export default Search;
