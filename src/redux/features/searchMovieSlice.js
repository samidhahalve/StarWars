import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState: {
        value: '',
        list: []
    },
    reducers: {
        setSearchKeyword: (state, action) => {
            state.value = action.payload;
        },
        setSearchDisplayList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setSearchKeyword, setSearchDisplayList } = searchMovieSlice.actions;

export default searchMovieSlice.reducer;