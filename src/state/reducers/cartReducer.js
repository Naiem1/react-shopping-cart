export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREASE_QUANTITY = 'DECREMENT_QUANTITY';

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (!state.selectedProducts.includes(newItem.id)) {
        state.selectedProducts.push(newItem.id);
      }
      if (!existingItem) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }

      return state;
    }
    case INCREASE_QUANTITY: {
      const item = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cartItems: [...item] };
    }

    case DECREASE_QUANTITY: {
      const item = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return { ...state, cartItems: [...item] };
    }
    case REMOVE_FROM_CART: {
      const productId = action.payload;
      const productIdToRemove = state.cartItems.find(
        (item) => item.id === productId
      );

      if (productIdToRemove) {
        const removedItem = state.cartItems.filter(
          (item) => item.id !== productId
        );

        const removedSelectedItem = state.selectedProducts.filter(
          (item) => item !== productId
        );
        return {
          ...state,
          cartItems: [...removedItem],
          selectedProducts: [...removedSelectedItem],
        };
      }

      return;
    }

    default:
      return state;
  }
};
