import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataUsers, User } from '../gateway/gateway';

interface EmployeesState {
  loaded: boolean;
  data: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: EmployeesState = {
  data: [],
  loaded: false,
  status: 'idle',
  error: null,
};

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const response = await fetchDataUsers();
  return response;
});

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEmployees.pending, state => {
        state.status = 'loading';
        state.loaded = false;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loaded = true;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Ошибка при загрузке сотрудников';
        state.loaded = false;
      });
  },
});

export default employeesSlice.reducer;
