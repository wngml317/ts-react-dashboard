import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";

export interface Board {
    _id?: any;
    user: String;
    title: String;
    content: String;
} 

interface BoardState {
    boardList: Board[];
}

export const boardAddAsync = createAsyncThunk(
    "todo/add",
    async (data: Board) => {
        await axios.post("/api/board/add", data);        
    }
)
export const boardAllAsync = createAsyncThunk(
    "board/all",
    async () => {
        const result = await axios.get("/api/board/all");
        return result.data.boardList;
    }
)
export const boardUpdateAsync = createAsyncThunk(
    "todo/update",
    async (data: Board) => {
        const {_id, title, content} = data
        await axios.put("/api/board/update/" + _id, {title: title, content: content});
    }
)
export const boardRemoveAsync = createAsyncThunk(
    "board/remove",
    async (_id: String) => {
        await axios.delete("/api/board/remove" + _id);        
    }
)

export const initialState: BoardState = {
    boardList: []
}
export const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(boardAllAsync.fulfilled, (state, action) => {
            state.boardList = action.payload;
        })
    }
})

export const selectBoard = (state: RootState) => state.board.boardList;
export default boardSlice.reducer;