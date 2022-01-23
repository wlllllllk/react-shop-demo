import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartOpened: false,
    cartItem: [],
    numOfItem: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isCartOpened = !state.isCartOpened
        },
        add: (state, action) => {
            let currentItems = state.cartItem;
            let isExist = false;

            const newItem = action.payload;
            for (let i = 0; i < currentItems.length; i++) {
                if (newItem.id === currentItems[i].id) {
                    currentItems[i].quantity += 1;
                    isExist = true;
                    break;
                }
            }

            if (!isExist) {
                const object = { "id": newItem.id, "quantity": 1, "price": newItem.current };
                currentItems.push(object);
            }

            let total = 0;
            for (let i = 0; i < currentItems.length; i++) {
                total += currentItems[i].quantity;
            }

            state.cartItem = currentItems;
            state.numOfItem = total;
        },
        remove: (state, action) => {
            let currentItems = state.cartItem;
            const removeItemID = action.payload;
            let currentLength = currentItems.length;

            for (let i = 0; i < removeItemID.length; i++) {
                for (let j = 0; j < currentLength; j++) {
                    if (removeItemID[i] === currentItems[j].id) {
                        currentItems.splice(j, 1);
                        currentLength--;
                        break;
                    }
                }
            }

            let total = 0;
            for (let i = 0; i < currentItems.length; i++) {
                total += currentItems[i].quantity;
            }

            state.cartItem = currentItems;
            state.numOfItem = total;
        },
    },
})

export const { toggle, add, remove } = cartSlice.actions

export default cartSlice.reducer