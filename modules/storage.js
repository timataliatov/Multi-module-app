export function getCart() {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
}

export function addToCart(product) {
  if (!product) {
    throw new Error("Product cannot be null or undefined");
  }

  const cart = getCart();
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

