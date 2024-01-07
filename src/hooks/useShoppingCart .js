import { useContext } from 'react';
import { CartContext } from '../state/context/cartContext';
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from '../state/reducers/cartReducer';

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }

  return context;
};

const useShoppingCart = () => {
  // const { cart, dispatch } = useCart();
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }

  const { cart, dispatch } = context;

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };
  const incrementQuantity = (itemId) => {
    dispatch({ type: INCREASE_QUANTITY, payload: itemId });
  };
  const decrementQuantity = (itemId) => {
    dispatch({ type: DECREASE_QUANTITY, payload: itemId });
  };

  const updateQuantity = () => {};

  return {
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  };
};

export { useShoppingCart };
