import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getDayOfYear } from '../utils/utils';

export const selectEmployeesData = (state: RootState) => state.employees.data;
export const selectFilterPosition = (state: RootState) => state.filter.position;
export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectSortOrder = (state: RootState) => state.sort.order;

export const selectFilteredEmployees = createSelector(
  [selectEmployeesData, selectFilterPosition, selectSearchQuery, selectSortOrder],
  (employees, filterPosition, searchQuery, sortOrder) => {
    let filteredEmployees = employees.slice();

    if (filterPosition !== 'Все') {
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
        const aBirthday = new Date(a.birthDate);
        const bBirthday = new Date(b.birthDate);

        const aDayOfYear = getDayOfYear(aBirthday);
        const bDayOfYear = getDayOfYear(bBirthday);

        return aDayOfYear - bDayOfYear;
      } else {
        return 0;
      }
    });

    return filteredEmployees;
  },
);
