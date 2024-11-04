import React from 'react';
import { Link } from 'react-router-dom';
import { Employee } from '../../../../types';
import { formatBirthDate } from '../../../../utils';
import './index.scss';
import moment from 'moment';

type EmployeeCardProps = {
  employee: Employee;
  prevEmployee: Employee | undefined;
  sortBy: string;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, prevEmployee, sortBy }) => {
  const birthDate = employee.birthDate;

  // Determine if the divider should be displayed
  const isDividerActive =
    sortBy === 'birthday' &&
    (!prevEmployee || moment(birthDate).format('YYYY') !== moment(prevEmployee.birthDate).format('YYYY'));

  const formattedDate = formatBirthDate(birthDate);

  return (
    <>
      {isDividerActive && (
        <p className="employee-card__date-divider">{moment(birthDate).format('YYYY')}</p>
      )}
      <Link to={`/employees/${employee.id}`} className="employee-card">
        <div className="employee-card__title">
          <div className="employee-card__name-container">
            <img className="employee-card__avatar" src={employee.avatar} alt="avatar" />
            <div className="employee-card__title-box">
              <div className="employee-card__name-tag">
                <span className="employee-card__name">{employee.name}</span>
                <span className="employee-card__tag">{employee.tag}</span>
              </div>
              <span className="employee-card__position">{employee.position}</span>
            </div>
          </div>
          {sortBy === 'birthday' && (
            <div className="employee-card__birth-data">{formattedDate}</div>
          )}
        </div>
      </Link>
    </>
  );
};

export default EmployeeCard;
