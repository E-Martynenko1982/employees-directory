import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface FilterState {
  position: string;
}

const getPositionFromURL = (): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get('position') || 'All';
};

const initialState: FilterState = {
  position: getPositionFromURL(),
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
