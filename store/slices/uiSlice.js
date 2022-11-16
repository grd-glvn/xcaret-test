import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { 
        language:'es',
        content:{},
        modalIsOpen: false,
        selectedHotel:{},
    },
    reducers: {
        setUiLanguage: (state, action) => { state.language = action.payload },
        setUiContent: (state, action) => { state.content = action.payload },
        toggleModal: (state, action) => { state.modalIsOpen = action.payload },
        selectHotel: (state, action) => { state.selectedHotel = action.payload },
    },
  })

export const uiActions = uiSlice.actions;


export const uiReducer = uiSlice.reducer;
