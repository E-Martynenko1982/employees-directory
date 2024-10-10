import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SortState {
  order: string;
}

const initialState: SortState = {
  order: 'alphabetical',
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
export default sortSlice.reducer;
