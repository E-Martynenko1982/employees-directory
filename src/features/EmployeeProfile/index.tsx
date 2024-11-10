import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { selectEmployeesData } from '../../redux/employeesSlice';
import { calculateAge } from '../../utils';
import Error from '../Error';
import type { RootState } from '../../redux/store';
import { Employee, RequestStatus } from '../../types';
import "./index.scss";

const EmployeesProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const employees = useSelector((state: RootState) => selectEmployeesData(state));
  const requestStatus = useSelector((state: RootState) => state.employees.requestStatus);

  const user = employees.find((e: Employee) => e.id === id);

  if (requestStatus === RequestStatus.loading) {
    return <div>Загрузка...</div>;
  }

  if (requestStatus === RequestStatus.failed) {
    return <Error type="employeeSearch" />;
  }

  if (!user) {
    return <Error type="employeeSearch" />;
  }

  const formattedDate = moment(user.birthDate).locale('ru').format('D MMMM YYYY');
  const { avatar, name, tag, position, birthDate, phone } = user;

  return (
    <div className="profile">
      <div className="profile__title">
        <div className="profile__title-content">
          <div className="profile__arrow" onClick={() => navigate(-1)}>
            <img className="profile__arrow-img" src="/images/left-arrow.svg" alt="arrow" />
          </div>
          <img className="profile__title-avatar" src={avatar} alt="avatar" />
          <div className="profile__name-container">
            <div className="profile__title-box">
              <span className="profile__title-name">{name}</span>
              <span className="profile__title-tag">{tag}</span>
            </div>
            <span className="profile__title-position">{position}</span>
          </div>
        </div>
      </div>
      <div className="profile__info">
        <div className="profile__info-date">
          <span className="profile__info-bd">
            <img src="/images/star.svg" alt="star-icon" className='profile__icon' />
            {formattedDate}
          </span>
          <span className="profile__info-age">{calculateAge(birthDate)} лет</span>
        </div>
        <span className="profile__info-phone">
          <img src="/images/phone-icon.svg" alt="phone-icon" className="profile__icon" />
          {phone}
        </span>
      </div>
      <div className="profile__collapse-line"></div>
    </div>
  );
};

export default EmployeesProfile;

