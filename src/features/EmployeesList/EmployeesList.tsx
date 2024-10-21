import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { employeesSelectors } from '../../redux/employeesSelectors';
import EmployeeCard from './components/EmployeeCard';
import Error from '../Error';
import './index.scss';

const EmployeesList: React.FC = () => {
  const filteredEmployees = useAppSelector(employeesSelectors);

  if (filteredEmployees.length === 0) {
    return <Error type="employeeSearch" />;
  }

  return (
    <div className="employees-list">
      {filteredEmployees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeesList;
