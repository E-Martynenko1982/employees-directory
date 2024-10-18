import React from 'react';
import { useAppDispatch } from '../../../../hooks/hooks';
import { toggleModal } from '../Modal/modalSlice';
import "./index.scss";

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
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
