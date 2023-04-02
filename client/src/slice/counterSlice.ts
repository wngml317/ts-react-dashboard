import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.count += 1
        },
        decrease: (state) => {
            state.count -= 1;
        }
    }
})

export const { increase, decrease } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.count;
export default counterSlice.reducer;