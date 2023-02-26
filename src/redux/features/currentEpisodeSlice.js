import { createSlice } from "@reduxjs/toolkit";

export const currentEpisodeSlice = createSlice({
    name: 'currentEpisode',
    initialState: {
        value: 0,
    },
    reducers: {
        setCurrentEpisode: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setCurrentEpisode } = currentEpisodeSlice.actions

export default currentEpisodeSlice.reducer;