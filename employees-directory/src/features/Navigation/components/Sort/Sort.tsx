import React from 'react';
import Modal from '../Modal/Modal';
import burgerIcon from "../../../../icons/burger.svg";
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { toggleModal } from '../Modal/modalSlice';
import "./index.scss";


const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const handleButtonClick = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="header__sort-burger">
      <button className="header__sort-burger-button" onClick={handleButtonClick}>
        <img src={burgerIcon} alt="burger-icon" className="header__sort-burger-icon" />
      </button>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Sort;
