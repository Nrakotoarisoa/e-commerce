import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const [ cartList, setCartList ] = useState([]);

  const addToCart = (item) => {
    cartList.some(cartItem => cartItem.id === item.id)
      ? setCartList((prevCart) => prevCart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantite: Number(cartItem.quantite) + Number(item.quantite)} : cartItem))
      : setCartList((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCartList((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  return (
    <cartContext.Provider value={{ cartList, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
}