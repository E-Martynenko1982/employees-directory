import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectEmployeesData } from '../../redux/employeesSlice';
import { selectFilterPosition } from '../../redux/filterSlice';
import { selectSortOrder } from '../../redux/sortSlice';
import EmployeeCard from './components/EmployeeCard';
import Error from '../Error';
import './index.scss';
import type { RootState } from '../../redux/store';

import { User } from '../../gateway/gateway';
const EmployeesList: React.FC = () => {
  const employees = useSelector((state: RootState) => selectEmployeesData(state));
  const filterPosition = useSelector((state: RootState) => selectFilterPosition(state));
  const sortOrder = useSelector((state: RootState) => selectSortOrder(state));

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('searchText') || '';

  let filteredEmployees = employees.slice();

  if (filterPosition !== 'All') {
    filteredEmployees = filteredEmployees.filter(
      (user: User) => user.position.toLowerCase() === filterPosition.toLowerCase()
    );
  }

  if (searchQuery.trim() !== '') {
    const query = searchQuery.trim().toLowerCase();
    filteredEmployees = filteredEmployees.filter((user: User) => {
      return (
        user.name.toLowerCase().includes(query) ||
        user.tag?.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });
  }

  filteredEmployees.sort((a: User, b: User) => {
    if (sortOrder === 'alphabetical') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'birthday') {
      const aBirthYear = new Date(a.birthDate).getFullYear();
      const bBirthYear = new Date(b.birthDate).getFullYear();

      if (aBirthYear !== bBirthYear) {
        return aBirthYear - bBirthYear;
      }
      return a.name.localeCompare(b.name);
    } else {
      return 0;
    }
  });

  if (filteredEmployees.length === 0) {
    return <Error type="employeeSearch" />;
  }

  return (
    <div className="employees-list">
      {filteredEmployees.map((employee: User) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeesList;
