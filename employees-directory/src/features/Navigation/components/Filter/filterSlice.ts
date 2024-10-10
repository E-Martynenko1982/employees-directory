import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  position: string;
}

const initialState: FilterState = {
  position: 'Все',
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
export default filterSlice.reducer;
