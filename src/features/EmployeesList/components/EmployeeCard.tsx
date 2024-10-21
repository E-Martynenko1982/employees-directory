// src/features/EmployeesList/components/EmployeeCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../gateway/gateway';
import './index.scss';

interface EmployeeCardProps {
  employee: User;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <Link to={`/employees/${employee.id}`} className="employee-card">
      <div className="employee-card__title">
        <img className="employee-card__avatar" src={employee.avatar} alt="avatar" />
        <div className="employee-card__name-container">
          <div className="employee-card__title-box">
            <span className="employee-card__name">{employee.name}</span>
            <span className="employee-card__tag">{employee.tag}</span>
          </div>
          <span className="employee-card__position">{employee.position}</span>
        </div>
      </div>
    </Link>
  );
};

export default EmployeeCard;
