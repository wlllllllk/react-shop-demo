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
        open: (state) => {
            state.isCartOpened = true
        },
        close: (state) => {
            state.isCartOpened = false
        },
        toggle: (state) => {
            state.isCartOpened = !state.isCartOpened
        },
        add: (state, action) => {
            let currentItems = state.cartItem;
            let isExist = false;

            const newItem = action.payload;
            for (let i = 0; i < currentItems.length; i++) {
                if (newItem.prod_id === currentItems[i].prod_id) {
                    if (newItem.quantity) {
                        currentItems[i].quantity += newItem.quantity;
                    }
                    else {
                        currentItems[i].quantity += 1;
                    }
                    isExist = true;
                    break;
                }
            }

            if (!isExist) {
                let temp = { ...newItem };
                temp.quantity = temp.quantity ? temp.quantity : 1;

                // let object = { "prod_id": newItem.prod_id, "quantity": quantity, "price": newItem.cur_price, "name": newItem.name };
                currentItems.push(temp);
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
                    if (removeItemID[i] === currentItems[j].prod_id) {
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
        clear: (state) => {
            state.cartItem = [];
            state.numOfItem = 0;
        },
        load: (state) => {
            const localData = JSON.parse(localStorage.getItem("cart"));
            if (localData !== null) {
                state.numOfItem = localData.numOfItem;
                state.cartItem = localData.cartItem;
            }
        },
    },
})

export const { open, close, toggle, add, remove, clear, load } = cartSlice.actions

export default cartSlice.reducer