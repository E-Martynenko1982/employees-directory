import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SortState {
  order: string;
}

const getSortFromURL = (): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get('sortBy') || 'alphabetical';
};

const initialState: SortState = {
  order: getSortFromURL(),
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOrder(state, action: PayloadAction<string>) {
      state.order = action.payload;
    },
  },
});

export const { setSortOrder } = sortSlice.actions;
export const selectSortOrder = (state: RootState) => state.employees;
export default sortSlice.reducer;
