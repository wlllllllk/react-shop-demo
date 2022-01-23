import { configureStore } from "@reduxjs/toolkit";
import chatReducer from '../features/chatSlice';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
    reducer: {
        chat: chatReducer,
        cart: cartReducer,
    },
})