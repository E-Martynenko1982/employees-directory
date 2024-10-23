import { createSelector } from '@reduxjs/toolkit';
import { User } from '../gateway/gateway';
import { selectEmployeesData } from './employeesSlice';
import { selectFilterPosition } from './filterSlice';
import { selectSearchQuery } from './searchSlice';
import { selectSortOrder } from './sortSlice';

export const employeesSelectors = createSelector(
  [selectEmployeesData, selectFilterPosition, selectSearchQuery, selectSortOrder],
  (employees: User[], filterPosition: string, searchQuery: string, sortOrder: string): User[] => {
    let filteredEmployees = employees.slice();

    if (filterPosition !== 'All') {
      filteredEmployees = filteredEmployees.filter(
        user => user.position.toLowerCase() === filterPosition.toLowerCase(),
      );
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.trim().toLowerCase();
      filteredEmployees = filteredEmployees.filter(user => {
        return (
          user.name.toLowerCase().includes(query) ||
          user.tag?.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
        );
      });
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
