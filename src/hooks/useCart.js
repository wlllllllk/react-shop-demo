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
        let results = currentCart;

        oldItem.forEach((old) => {
            results = results.filter((item) => {
                return item[0].id !== old;
            });
        });

        setCartItems(results);
    };

    return { cartItems, addCart, deleteCart };
}