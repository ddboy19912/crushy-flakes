import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropdown: false,
  modalOpen: false,
  auth: false,
  offerModal: false,
};

const dashSlice = createSlice({
  name: 'dash',
  initialState,
  reducers: {
    toggleDropdown: (state) => {
      state.dropdown = !state.dropdown;
    },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    setAuth: (state) => {
      state.auth = true;
    },
    viewOffer: (state) => {
      state.offerModal = !state.offerModal;
    },
  },
});

export const { toggleDropdown, openModal, closeModal, setAuth, viewOffer } =
  dashSlice.actions;

export default dashSlice.reducer;
