import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAlldata = createAsyncThunk("gituser" , async () => {
    const res = await fetch("https://api.github.com/users");
    const result =  await res.json();
    return result;
});

export const gitUserSlice = createSlice({
    name : "gituser",
    initialState : {
        users : [],
        loading : false,
        error : null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAlldata.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAlldata.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAlldata.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong"; // Default error message
            });
    }

});

export default gitUserSlice.reducer;