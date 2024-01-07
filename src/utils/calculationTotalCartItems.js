export const getTotalCartItems = (items) => {
  const totalItem = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return totalItem;
};
