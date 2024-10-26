import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectEmployeesData } from '../../redux/employeesSlice';
import { selectSortOrder } from '../../redux/sortSlice';
import EmployeeCard from './components/EmployeeCard';
import Error from '../Error';
import './index.scss';
import type { RootState } from '../../redux/store';
import { Employee } from '../../types';

const EmployeesList: React.FC = () => {
  const [searchParams] = useSearchParams();

  const employees = useSelector((state: RootState) => selectEmployeesData(state));
  const sortOrder = useSelector((state: RootState) => selectSortOrder(state));

  const filterPosition = searchParams.get('position') || 'All';
  const searchQuery = searchParams.get('searchText') || '';

  let filteredEmployees = employees.slice();


  if (filterPosition !== 'All') {
    filteredEmployees = filteredEmployees.filter(
      (user: Employee) => user.position.toLowerCase() === filterPosition.toLowerCase()
    );
  }


  if (searchQuery.trim() !== '') {
    const query = searchQuery.trim().toLowerCase();
    filteredEmployees = filteredEmployees.filter((user: Employee) => {
      return (
        user.name.toLowerCase().includes(query) ||
        user.tag?.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });
  }


  filteredEmployees.sort((a: Employee, b: Employee) => {
    if (sortOrder === 'alphabetical') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'birthday') {
      const aBirthDate = new Date(a.birthDate);
      const bBirthDate = new Date(b.birthDate);

      const aDayOfYear = aBirthDate.getMonth() * 31 + aBirthDate.getDate();
      const bDayOfYear = bBirthDate.getMonth() * 31 + bBirthDate.getDate();

      if (aDayOfYear !== bDayOfYear) {
        return aDayOfYear - bDayOfYear;
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
      {filteredEmployees.map((employee: Employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeesList;
