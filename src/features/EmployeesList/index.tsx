import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectEmployeesData } from '../../redux/employeesSlice';
import EmployeeCard from './components/EmployeeCard';
import EmployeeSkeleton from './components/EmployeeSkeleton';
import Error from '../Error';
import type { RootState } from '../../redux/store';
import { Employee, RequestStatus } from '../../types';
import './index.scss';

const EmployeesList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const employees = useSelector((state: RootState) => selectEmployeesData(state));
  const requestStatus = useSelector((state: RootState) => state.employees.requestStatus);


  const filteredEmployees = useMemo(() => {
    if (requestStatus !== RequestStatus.succeeded) {
      return [];
    }

    const { position: positionQuery, searchText, sortBy } = Object.fromEntries(searchParams);
    let filteredData = employees.slice();

    if (positionQuery && positionQuery !== 'All') {
      filteredData = filteredData.filter(({ position }) =>
        position.toLowerCase() === positionQuery.toLowerCase()
      );
    }

    if (searchText && searchText.trim() !== '') {
      const query = searchText.trim().toLowerCase();
      filteredData = filteredData.filter(({ name, tag, email }) =>
        [name, tag, email].some(field => field?.toLowerCase().includes(query))
      );
    }

    if (sortBy === 'alphabetical') {
      filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'birthday') {
      filteredData.sort((a, b) => {
        const aBirthDate = new Date(a.birthDate).getTime();
        const bBirthDate = new Date(b.birthDate).getTime();
        return aBirthDate - bBirthDate;
      });
    }

    return filteredData;
  }, [searchParams, employees, requestStatus]);


  if (requestStatus === RequestStatus.loading) {
    return (
      <ul className="employees-list">
        {Array.from({ length: 10 }).map((_, index) => (
          <EmployeeSkeleton key={index} />
        ))}
      </ul>
    );
  }


  if (requestStatus === RequestStatus.failed) {
    return <Error type="general" />;
  }


  if (filteredEmployees.length === 0) {
    return <Error type="employeeSearch" />;
  }

  return (
    <ul className="employees-list">
      {filteredEmployees.map((employee: Employee, index: number) => {
        return (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            prevEmployee={filteredEmployees[index - 1]}
            sortBy={searchParams.get('sortBy') || 'alphabetical'}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;









