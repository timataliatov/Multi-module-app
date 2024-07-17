import { addToCart } from "./storage.js";

export function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded-lg shadow-md";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;
  image.className = "w-full h-48 object-cover mb-4";
  card.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = product.title;
  title.className = "text-lg font-bold mb-2";
  card.appendChild(title);

  const price = document.createElement("p");
  price.textContent = `$${product.price}`;
  price.className = "text-gray-700 mb-4";
  card.appendChild(price);

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.className = "bg-blue-500 text-white px-4 py-2 rounded";
  button.addEventListener("click", () => {
    addToCart(product);
    alert("Product added to cart!");
  });
  card.appendChild(button);

  return card;
}

export function displayProducts(products) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}
