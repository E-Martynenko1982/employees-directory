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

  if (sortOrder === 'birthday') {
    const elements: JSX.Element[] = [];
    let currentYear: string | null = null;

    filteredEmployees.forEach((employee) => {
      const birthYear = new Date(employee.birthDate).getFullYear().toString();

      if (birthYear !== currentYear) {
        currentYear = birthYear;
        elements.push(
          <div key={`age-${birthYear}`} className="age">
            <div className="age__line"></div>
            <div className="age__title">{birthYear}</div>
            <div className="age__line"></div>
          </div>
        );
      }

      elements.push(
        <EmployeeCard key={employee.id} employee={employee} showBirthDate={true} />
      );
    });

    return <ul className="employees-list">{elements}</ul>;
  } else {
    return (
      <ul className="employees-list">
        {filteredEmployees.map((employee: Employee) => (
          <EmployeeCard key={employee.id} employee={employee} showBirthDate={false} />
        ))}
      </ul>
    );
  }
};

export default EmployeesList;
