import React from 'react';
import { Link } from 'react-router-dom';
import { Employee } from '../../../../types';
import { formatBirthDate } from '../../../../utils';
import moment from 'moment';
import './index.scss';

type EmployeeCardProps = {
  employee: Employee;
  prevEmployee: Employee | undefined;
  sortBy: string;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, prevEmployee, sortBy }) => {

  const birthDate = employee.birthDate;
  const isDividerActive =
    sortBy === 'birthday' &&
    (!prevEmployee || moment(birthDate).format('YYYY') !== moment(prevEmployee.birthDate).format('YYYY'));

  const formattedDate = formatBirthDate(birthDate);
  const { avatar, name, tag, position, id } = employee;

  return (
    <>
      {isDividerActive && (
        <div className="employee-card__birth-date-container">
          <div className="employee-card__birth-date-line" />
          <p className="employee-card__date-divider">{moment(birthDate).format('YYYY')}</p>
          <div className="employee-card__birth-date-line" />
        </div>

      )}
      <Link to={`/employees/${id}`} className="employee-card">
        <div className="employee-card__title">
          <div className="employee-card__name-container">
            <img className="employee-card__avatar" src={avatar} alt="avatar" />
            <div className="employee-card__title-box">
              <div className="employee-card__name-tag">
                <span className="employee-card__name">{name}</span>
                <span className="employee-card__tag">{tag}</span>
              </div>
              <span className="employee-card__position">{position}</span>
            </div>
          </div>
          {sortBy === 'birthday' && (
            <div className="employee-card__birth-date">{formattedDate}</div>
          )}
        </div>
      </Link >
    </>
  );
};

export default EmployeeCard;
