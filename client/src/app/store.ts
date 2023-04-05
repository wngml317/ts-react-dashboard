import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import todoReducer from "../slice/todoSlice";
import boardReducer from "../slice/boardSlice";
import chartReducer from "../slice/chartSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        board: boardReducer,
        chart: chartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;