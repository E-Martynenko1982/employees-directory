import { createSelector } from '@reduxjs/toolkit';
import { User } from '../types';
import { selectEmployeesData } from './employeesSlice';
import { selectFilterPosition } from './filterSlice';
import { selectSortOrder } from './sortSlice';

export const employeesSelectors = createSelector(
  [selectEmployeesData, selectFilterPosition, selectSortOrder],
  (employees: User[], filterPosition: string, sortOrder: string): User[] => {
    let filteredEmployees = employees.slice();

    if (filterPosition !== 'All') {
      filteredEmployees = filteredEmployees.filter(
        user => user.position.toLowerCase() === filterPosition.toLowerCase(),
      );
    }

    filteredEmployees.sort((a, b) => {
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

    return filteredEmployees;
  },
);
