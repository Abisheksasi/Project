import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemExists = cart.find((cartItem) => cartItem.hostelname === item.hostelname);

    if (!itemExists) {
      setCart((prevCart) => [...prevCart, item]);
    } else {
      console.log(`Item ${item.hostelname} is already in the cart.`);
    }
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.hostelname !== item.hostelname));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
