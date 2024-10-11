import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setSortOrder, selectSortOrder } from '../Sort/sortSlice';
import { setIsModalOpen } from '../Modal/modalSlice';
import { useSearchParams } from 'react-router-dom';
import "./index.scss";

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentSortOrder = useAppSelector(selectSortOrder);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sortOrder = event.target.value;
    dispatch(setSortOrder(sortOrder));


    searchParams.set('sort', sortOrder);
    setSearchParams(searchParams);

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

