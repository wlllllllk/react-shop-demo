import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAccountOpened: false,
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        open: (state) => {
            state.isAccountOpened = true
        },
        close: (state) => {
            state.isAccountOpened = false
        },
        toggle: (state) => {
            state.isAccountOpened = !state.isAccountOpened
        },
    },
})

export const { open, close, toggle } = accountSlice.actions

export default accountSlice.reducer