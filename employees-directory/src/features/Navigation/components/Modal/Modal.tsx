import React, { ChangeEvent } from 'react';
import "./index.scss";
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setSortOrder } from '../Sort/sortSlice';
import { setIsModalOpen } from './modalSlice';



const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentSortOrder = useAppSelector(state => state.sort.order);

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortOrder(event.target.value));
    dispatch(setIsModalOpen(false));
  };

  return (
    <div className="modal">
      <div className="modal__sort-container">
        <div className="modal__sort-container-title">
          <div className="modal__sort-container-title-line"></div>
          <div className="modal__sort-container-title-name">
            Сортировка
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

