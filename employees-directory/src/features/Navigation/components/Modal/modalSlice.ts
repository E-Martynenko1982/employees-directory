import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    toggleModal(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsModalOpen, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
