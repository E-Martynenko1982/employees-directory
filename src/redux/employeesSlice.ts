import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Employee, RequestStatus } from '../types';
import { RootState } from './store';

interface EmployeesState {
  data: Employee[];
  requestStatus: RequestStatus;
}

const initialState: EmployeesState = {
  data: [],
  requestStatus: RequestStatus.loading,
};

export const fetchEmployees = createAsyncThunk<Employee[]>('employees/fetchEmployees', async () => {
  const response = await fetch('https://66a0f8b17053166bcabd894e.mockapi.io/api/workers');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
});

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEmployees.pending, state => {
        state.requestStatus = RequestStatus.loading;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.data = action.payload;
        state.requestStatus = RequestStatus.succeeded;
      })
      .addCase(fetchEmployees.rejected, state => {
        state.requestStatus = RequestStatus.failed;
      });
  },
});

export default employeesSlice.reducer;

// Добавляем экспорт селектора данных сотрудников
export const selectEmployeesData = (state: RootState): Employee[] => state.employees.data;
