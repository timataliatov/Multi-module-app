import { fetchProducts } from "./modules/network.js";
import { displayProducts } from "./modules/ui.js";
import { getCart, addToCart } from "./modules/storage.js";

async function init() {
  const products = await fetchProducts();
  displayProducts(products);

  // Display initial cart content if needed
  console.log(getCart());
}

document.addEventListener("DOMContentLoaded", init);
