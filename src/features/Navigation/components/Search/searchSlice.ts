import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../redux/store';

interface SearchState {
  query: string;
}

const getSearchFromURL = (): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get('search') || '';
};

const initialState: SearchState = {
  query: getSearchFromURL(),
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export const selectSearchQuery = (state: RootState) => state.search.query;
export default searchSlice.reducer;
