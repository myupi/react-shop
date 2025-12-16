export const addToOrders = (orders, item) => {
  const exists = orders.some((o) => o.id === item.id);
  return exists ? orders : [...orders, item];
};

export const removeFromOrders = (orders, id) => {
  return orders.filter((item) => item.id !== id);
};
