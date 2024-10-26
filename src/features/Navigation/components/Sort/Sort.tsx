import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../../redux/modalSlice';
import type { AppDispatch } from '../../../../redux/store';
import "./index.scss";

const Sort: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="header__sort-burger">
      <button className="header__sort-burger-button" onClick={handleButtonClick}>
        <img src="/images/burger.svg" alt="burger-icon" className="header__sort-burger-icon" />
      </button>
    </div>
  );
};

export default Sort;

