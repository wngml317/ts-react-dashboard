import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axios from "axios";

export interface ChartState {
    labels: string[],
    datasets: {
        type?: string,
        label: string,
        data: number[],
    }[],
    title?: string
}

const initialState: ChartState = {
    labels: [],
    datasets: [{
        type: '',
        label: '',
        data: []
    }],
    title: ''
}

export const dataSelectLineAsync = createAsyncThunk(
    "chart/selectLine",
    async (query: {startDate: Date, endDate: Date}) => {
        const result = await axios.get("/api/chart/selectLine", {params: query});
        return result.data
    }
);
export const dataSelectMultiAsync = createAsyncThunk(
    "chart/selectMulti",
    async (query: {startDate: Date, endDate: Date}) => {
        const result = await axios.get("/api/chart/selectMulti", {params: query});
        return result.data
    }
)

export const chartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        // pending: 비동기 호출전, fulfilled: 비동기 호출성공, rejected: 비동기 호출실패
        // .addCase(dataSelectLineAsync.pending, (state) => {
        //     state.labels = []
        //     state.datasets = [];
        // })
        .addCase(dataSelectLineAsync.fulfilled, (state, action) => {
            state.labels = action.payload.labels;
            state.datasets = action.payload.datasets;
        })
        // .addCase(dataSelectMultiAsync.pending, (state) => {
        //     state.labels = []
        //     state.datasets = [];
        // })
        .addCase(dataSelectMultiAsync.fulfilled, (state, action) => {
            state.labels = action.payload.labels;
            state.datasets = action.payload.datasets;
        })
    }
});

export const selectData = (state: RootState) => state.chart;
export default chartSlice.reducer;