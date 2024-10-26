import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import "./index.scss";

const Sort: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="header__sort-burger">
        <button className="header__sort-burger-button" onClick={handleButtonClick}>
          <img src="/images/burger.svg" alt="burger-icon" className="header__sort-burger-icon" />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Sort;
