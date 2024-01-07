export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREASE_QUANTITY = 'DECREMENT_QUANTITY';

// export const cartReducer = (state, action) => {
//   switch (action.type) {
// case ADD_TO_CART:
//   const newItem = action.payload;
//   const existingItem = state.find(item => item.id === newItem.id);
//   if (existingItem) {
//     // existingItem.quantity += 1;
//     // return [...state, existingItem]
//     const updateCart = state.map(item => {
//       if (item.id === existingItem.id) {
//         return { item, quantity: item.quantity + 1 };
//       };
//       return item;
//     });

//     return updateCart;
//   }
//   return [...state, {...newItem, quantity: 1}];
// case UPDATE_QUANTITY:
//   return 10;
//     case INCREMENT_QUANTITY:
//       const productId = payload;

//     // case DECREMENT_QUANTITY:
//     // case REMOVE_FROM_CART:

//     default:
//       return state;
//   }
// };

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (existingItem) {
        const updateCart = state.map((item) => {
          if (item.id === existingItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        return updateCart;
      }
      return [...state, { ...newItem, quantity: 1 }];
    }
    case INCREASE_QUANTITY: {
      // const productId = action.payload;
      // console.log('==================increment==========================')

      // const productToIncrease = state.find((item) => item.id === productId);
      // if (productToIncrease) {
      //   productToIncrease.quantity += 1;

      //   return [...state];
      // }
      // return;

      // const productIndex = state.findIndex((item) => item.id === productId);
      // const productToIncrease = { ...state[productIndex] };
      // productToIncrease.quantity += 1;
      // const products = [...state];
      // products[productIndex] = productToIncrease;
      // console.log('[reducer]', products);
      // return [...products];

      const item = state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return [...item];
    }

    case DECREASE_QUANTITY: {
      // const productId = action.payload;

      // const productToDecries = state.find((item) => item.id === productId);
      // if (productToDecries) {
      //   productToDecries.quantity -= 1;

      //   return [...state];
      // }
      // return state;

      const item = state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return [...item];
    }
    case REMOVE_FROM_CART: {
      const productId = action.payload;
      const productIdToRemove = state.find((item) => item.id === productId);

      if (productIdToRemove) {
        const removedItem = state.filter((item) => item.id !== productId);
        return [...removedItem];
      }

      return;
    }

    default:
      return state;
  }
};
