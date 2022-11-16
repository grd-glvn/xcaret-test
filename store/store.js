import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from './slices/uiSlice';
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => {
    let store =  configureStore({
    reducer: {
        ui: uiReducer,
    }
})
    return store;
}

export const wrapper = createWrapper(makeStore);

