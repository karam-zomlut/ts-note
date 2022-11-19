import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalArgs, ModalState } from '../Interfaces';

const initialState: ModalState = {
  visible: false,
  title: ''
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalArgs>): void => {
      state.visible = true;
      state.title = action.payload.title;
    },
    closeModal: (state): void => {
      state.visible = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
