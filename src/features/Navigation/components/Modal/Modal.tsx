import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSortOrder, selectSortOrder } from '../../../../redux/sortSlice';
import { setIsModalOpen } from '../../../../redux/modalSlice';
import { useSearchParams } from 'react-router-dom';
import type { RootState, AppDispatch } from '../../../../redux/store';
import "./index.scss";

const Modal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentSortOrder = useSelector((state: RootState) => selectSortOrder(state));
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sortOrder = event.target.value;
    dispatch(setSortOrder(sortOrder));

    searchParams.set('sortBy', sortOrder);
    setSearchParams(searchParams);
    dispatch(setIsModalOpen(false));
  };

  const handleCloseModal = () => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <div className="modal">
      <div className="modal__sort-container">
        <div className="modal__sort-container-title">
          <div className="modal__sort-container-title-line"></div>
          <div className="modal__sort-container-title-name">
            <span>Сортировка</span>
            <button className='modal__sort-container-title-cancel' onClick={handleCloseModal}>
              <img className="modal__sort-container-title-cancel-img" src="/images/cancel_16.png" alt="cancel-img" />
            </button>
          </div>
        </div>
        <ul className="modal__sort-container-list">
          <li className="modal__sort-container-list-item">
            <input
              type="radio"
              id="alphabetical"
              name="sort"
              value="alphabetical"
              checked={currentSortOrder === 'alphabetical'}
              onChange={handleSortChange}
            />
            <label
              className="modal__sort-container-list-item--label"
              htmlFor="alphabetical"
            >
              По алфавиту
            </label>
          </li>
          <li className="modal__sort-container-list-item">
            <input
              type="radio"
              id="birthday"
              name="sort"
              value="birthday"
              checked={currentSortOrder === 'birthday'}
              onChange={handleSortChange}
            />
            <label
              className="modal__sort-container-list-item--label"
              htmlFor="birthday"
            >
              По дню рождения
            </label>
          </li>
        </ul>
      </div>
      <div className="bottom-line"></div>
    </div>
  );
};

export default Modal;
