import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectEmployeesData } from '../../redux/employeesSlice';
import EmployeeCard from './components/EmployeeCard';
import EmployeeSkeleton from './EmployeeSkeleton/EmployeeSkeleton';
import Error from '../Error';
import './index.scss';
import type { RootState } from '../../redux/store';
import { Employee, RequestStatus } from '../../types';

const EmployeesList: React.FC = () => {
  const [searchParams] = useSearchParams();

  const employees = useSelector((state: RootState) => selectEmployeesData(state));
  const requestStatus = useSelector((state: RootState) => state.employees.requestStatus);

  const sortOrder = searchParams.get('sortBy') || 'alphabetical';
  const filterPosition = searchParams.get('position') || 'All';
  const searchQuery = searchParams.get('searchText') || '';

  // Если данные загружаются, отображаем скелетоны
  if (requestStatus === RequestStatus.loading) {
    return (
      <ul className="employees-list">
        {Array.from({ length: 5 }).map((_, index) => (
          <EmployeeSkeleton key={index} />
        ))}
      </ul>
    );
  }

  if (requestStatus === RequestStatus.failed) {
    return <Error type="general" />;
  }

  // Фильтрация и сортировка сотрудников
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
    <ul className="employees-list">
      {filteredEmployees.map((employee: Employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </ul>
  );
};

export default EmployeesList;
