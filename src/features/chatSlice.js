import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isChatOpened: false,
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        open: (state) => {
            state.isChatOpened = true
        },
        close: (state) => {
            state.isChatOpened = false
        },
    },
})

export const { open, close } = chatSlice.actions

export default chatSlice.reducer