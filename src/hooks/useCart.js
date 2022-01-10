import { useState } from "react";

export function UseCart() {
    const [cartItems, setCartItems] = useState([]);

    const addCart = (newItem) => {
        let currentCart = [...cartItems];
        currentCart = [...currentCart, newItem];

        setCartItems(currentCart);
    };

    const deleteCart = (oldItem) => {
        let currentCart = [...cartItems];
        currentCart.splice(oldItem, 1);

        setCartItems(currentCart);
    };

    return { cartItems, addCart, deleteCart };
}