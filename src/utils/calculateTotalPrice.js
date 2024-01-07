export const getTotalPrice = (item) => {
  const totalPrice = item.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  return totalPrice.toFixed(2);
};
