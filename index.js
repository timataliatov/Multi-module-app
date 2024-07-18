import { fetchProducts } from "./modules/network.js";
import { displayProducts } from "./modules/ui.js";
import { getCart, addToCart } from "./modules/storage.js";

async function init() {
  try {
    const products = await fetchProducts();
    if (!products) {
      throw new Error('Failed to fetch products');
    }
    displayProducts(products);

    // Display initial cart content if needed
    const cart = getCart();
    if (cart) {
      console.log(cart);
    }
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

document.addEventListener("DOMContentLoaded", init);

