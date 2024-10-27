import React from 'react';
import { Link } from 'react-router-dom';
import { Employee } from '../../../types';
import './index.scss';
import { formatBirthDate } from '../../../utils/utils';

type EmployeeCardProps = {
  employee: Employee;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const formattedDate = formatBirthDate(employee.birthDate);

  return (
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
        <div className="employee-card__birth-data">{formattedDate}</div>
      </div>
    </Link>
  );
};

export default EmployeeCard;

