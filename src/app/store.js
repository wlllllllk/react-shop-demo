import { configureStore } from "@reduxjs/toolkit";
import chatReducer from '../features/chatSlice';
import cartReducer from '../features/cartSlice';
import accountReducer from '../features/accountSlice';

const store = configureStore({
    reducer: {
        chat: chatReducer,
        cart: cartReducer,
        account: accountReducer,
    },
})

store.subscribe(() => {
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
})

export { store };