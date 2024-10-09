import React from 'react';
import Modal from '../Modal/Modal';
import burgerIcon from "../../../../icons/burger.svg";
import "./index.scss";

interface SortProps {
  onSortOrderChange: (sortOrder: string) => void;
  sortOrder: string;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const Sort: React.FC<SortProps> = ({
  onSortOrderChange,
  sortOrder,
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="header__sort-burger">
      <button className="header__sort-burger-button" onClick={handleButtonClick}>
        <img src={burgerIcon} alt="burger-icon" className="header__sort-burger-icon" />
      </button>
      {isModalOpen && (
        <Modal
          onSortOrderChange={onSortOrderChange}
          currentSortOrder={sortOrder}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Sort;
