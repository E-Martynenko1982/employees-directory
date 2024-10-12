import { createSlice } from '@reduxjs/toolkit';

interface connectionState {
  isOnline: boolean;
}

const initialState: connectionState = {
  isOnline: navigator.onLine,
};

const ConnectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setOnline: state => {
      state.isOnline = true;
    },
    setOffline: state => {
      state.isOnline = false;
    },
  },
});

export const { setOnline, setOffline } = ConnectionSlice.actions;
export default ConnectionSlice.reducer;
