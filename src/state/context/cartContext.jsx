import { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
