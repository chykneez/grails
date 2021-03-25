export const addItemToCart = (items, itemToAdd) => {
  // Check if the item being added to the cart is already in the cart.
  const itemExists = items.find(item => item.id === itemToAdd.id);

  // If the item is already in the cart, then increase the quantity by 1.
  if (itemExists) {
    return items.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  // Otherwise, add a quantity property and set it to 1.
  return [...items, { ...itemToAdd, quantity: 1 }];
};
