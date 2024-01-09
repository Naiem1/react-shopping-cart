import { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    selectedProducts: []
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
