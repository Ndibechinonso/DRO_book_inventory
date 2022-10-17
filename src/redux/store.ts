import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootreducer";

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch