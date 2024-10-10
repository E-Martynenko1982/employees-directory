import React, { ChangeEvent } from 'react';
import Sort from "../Sort/Sort";
import { useAppDispatch } from '../../../../store/hooks';
import { setSearchQuery } from './searchSlice';
import "./index.scss";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  }


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
};

export default Search;
