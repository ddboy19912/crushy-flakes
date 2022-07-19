import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dropdown: false,
    modalOpen: false,

}

const dashSlice = createSlice({
 name: 'dash',
    initialState,
    reducers:{
        toggleDropdown: (state) => {
state.dropdown = !state.dropdown;
        },
        openModal: (state) => {
            state.modalOpen = true;
        },
        closeModal: (state) => {
            state.modalOpen = false;
        }
      
}
})


export const {toggleDropdown, openModal, closeModal} = dashSlice.actions;

export default dashSlice.reducer;