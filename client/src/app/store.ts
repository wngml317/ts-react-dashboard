import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import todoReducer from "../slice/todoSlice";
import boardReducer from "../slice/boardSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        board: boardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;