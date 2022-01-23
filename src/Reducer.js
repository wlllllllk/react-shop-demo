const initState = {
    theme: 'default',
    isChatOpened: false,
    isCartOpened: false,
    cartItem: []
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        // chat
        case "OPEN_CHAT":
            return {
                ...state,
                isChatOpened: true
            }
        case "CLOSE_CHAT":
            return {
                ...state,
                isChatOpened: false
            }

        // shopping cart
        // case "OPEN_CART":
        //     return {
        //         ...state,
        //         isCartOpened: true
        //     }
        // case "CLOSE_CART":
        //     return {
        //         ...state,
        //         isCartOpened: false
        //     }
        case "TOGGLE_CART":
            if (state.isCartOpened === false) {
                return {
                    ...state,
                    isCartOpened: true
                }
            }
            else {
                return {
                    ...state,
                    isCartOpened: false
                }
            }
        case "ADD_CART":
            let currentItems = state.cartItem;
            let isExist = false;

            const newItem = action.item;
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

            return {
                ...state,
                cartItem: currentItems
            }

        case "REMOVE_CART":
            let oldItems = state.cartItem;
            const removeItem = action.item;

            for (let i = 0; i < oldItems.length; i++) {
                if (removeItem === oldItems[i].id) {
                    oldItems.splice(i, 1);
                    break;
                }
            }

            return {
                ...state,
                cartItem: oldItems
            }

        default:
            return state
    }
}

export default Reducer;