import { configureStore } from "@reduxjs/toolkit";
import gitUserSlice from '../feature/gitUserSlice'

export const store = configureStore({
    reducer: {
        app : gitUserSlice,
    },

});