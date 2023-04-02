import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";

export interface Todo {
    _id?: any;
    text?: String;
    done?: Boolean;
}
export interface todoState {
    todoList: Todo[];
}

const initialState: todoState = {
    todoList: []
}

export const todoAddAsync = createAsyncThunk(
    "todo/todoAdd",
    async (text: Todo) => {
        const result = await axios.post("/api/todo/add", text)
        return result.data.todo;
    }
)
export const todoAllAsync = createAsyncThunk(
    "todo/todoAll",
    async () => {
        const result = await axios.get("/api/todo/all");
        return result.data.todoList;
    }
)
export const todoUpdateAsync = createAsyncThunk(
    "todo/todoUpdate",
    async (data: Todo) => {
        const { _id, done } = data
        const result = await axios.put("/api/todo/update/" + _id, {done: !done} )
        return result.data.todo;
    }
)
export const todoRemoveAsync = createAsyncThunk(
    "todo/todoRemove",
    async (_id: String) => {
        await axios.delete("/api/todo/remove/"+ _id);
        return _id
    }
)

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(todoAddAsync.fulfilled, (state, action) => {
            state.todoList = state.todoList.concat(action.payload);
        })
        .addCase(todoAllAsync.fulfilled, (state, action) => {
            state.todoList = action.payload
        })
        .addCase(todoUpdateAsync.fulfilled, (state, action) => {
            state.todoList = state.todoList.map(todo => 
                todo._id === action.payload._id ? {...todo, done: !todo.done} : todo    
            )
        })
        .addCase(todoRemoveAsync.fulfilled, (state, action) => {
            state.todoList = state.todoList.filter(todo => 
                todo._id !== action.payload
            )
        })
    }
})

export const selectTodo = (state: RootState) => state.todo.todoList;
export default todoSlice.reducer;