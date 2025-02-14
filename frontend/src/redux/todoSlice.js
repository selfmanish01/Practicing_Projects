const todoSlice = createSlice({
    name: "todos",
    initialState: { todos: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => { state.loading = true; })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state) => { state.loading = false; });
    },
});



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "http://localhost:5000/api/todos";

// export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
//     const response = await axios.get(API_URL);
//     return response.data;
// });

// export const addTodo = createAsyncThunk("todos/addTodo", async (title) => {
//     const response = await axios.post(API_URL, { title });
//     return response.data;
// });

// export const updateTodo = createAsyncThunk("todos/updateTodo", async ({ id, completed }) => {
//     const response = await axios.put(`${API_URL}/${id}`, { completed });
//     return response.data;
// });

// export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
//     return id;
// });

// const todoSlice = createSlice({
//     name: "todos",
//     initialState: [],
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchTodos.fulfilled, (state, action) => action.payload)
//             .addCase(addTodo.fulfilled, (state, action) => [...state, action.payload])
//             .addCase(updateTodo.fulfilled, (state, action) =>
//                 state.map(todo => todo._id === action.payload._id ? action.payload : todo))
//             .addCase(deleteTodo.fulfilled, (state, action) =>
//                 state.filter(todo => todo._id !== action.payload));
//     },
// });

// export default todoSlice.reducer;
