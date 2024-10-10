import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/Navigation/components/Filter/filterSlice';
import searchReducer from '../features/Navigation/components/Search/searchSlice';
import sortReducer from '../features/Navigation/components/Sort/sortSlice';
import modalReducer from '../features/Navigation/components/Modal/modalSlice';
import employeesReducer from '../features/EmployeesList/employeesSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    sort: sortReducer,
    modal: modalReducer,
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
