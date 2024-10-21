// src/features/EmployeesList/EmployeesList.tsx
import React, { useMemo } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { employeesSelectors } from '../../redux/employeesSelectors';
import EmployeeCard from './components/EmployeeCard';
import Error from '../Error';
import { selectSortOrder } from '../../redux/sortSlice';
import { User } from '../../gateway/gateway';
import './index.scss';

const EmployeesList: React.FC = () => {
  const filteredEmployees = useAppSelector(employeesSelectors);
  const sortOrder = useAppSelector(selectSortOrder);
  const groupedEmployees = useMemo(() => {
    if (sortOrder !== 'birthday') {
      return null;
    }

    const employeesByYear: { [year: string]: User[] } = {};

    filteredEmployees.forEach(employee => {
      const birthYear = new Date(employee.birthDate).getFullYear().toString();
      if (!employeesByYear[birthYear]) {
        employeesByYear[birthYear] = [];
      }
      employeesByYear[birthYear].push(employee);
    });

    const sortedYears = Object.keys(employeesByYear).sort((a, b) => parseInt(a) - parseInt(b));

    return { employeesByYear, sortedYears };
  }, [filteredEmployees, sortOrder]);

  if (filteredEmployees.length === 0) {
    return <Error type="employeeSearch" />;
  }

  if (sortOrder === 'birthday' && groupedEmployees) {
    const { employeesByYear, sortedYears } = groupedEmployees;
    return (
      <div className="employees-list">
        {sortedYears.map(year => (
          <div key={year}>
            <div className="employees-list__year">{year}</div>
            {employeesByYear[year].map(employee => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="employees-list">
        {filteredEmployees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    );
  }
};

export default EmployeesList;
