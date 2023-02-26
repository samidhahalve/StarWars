import { createSlice } from "@reduxjs/toolkit";

const sortMovieSlice = createSlice({
    name: 'sortMoviesBy',
    initialState: {
        value: ''
    },
    reducers: {
        sortBy: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { sortBy } = sortMovieSlice.actions;

export default sortMovieSlice.reducer;