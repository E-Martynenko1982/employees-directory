import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../redux/store';

interface FilterState {
  position: string;
}

const getFilterFromURL = (): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get('filter') || 'Все';
};

const initialState: FilterState = {
  position: getFilterFromURL(),
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterPosition(state, action: PayloadAction<string>) {
      state.position = action.payload;
    },
  },
});

export const { setFilterPosition } = filterSlice.actions;
export const selectFilterPosition = (state: RootState) => state.filter.position;
export default filterSlice.reducer;
