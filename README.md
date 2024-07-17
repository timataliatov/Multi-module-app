
🌟 Project Overview 🌟
📋 Goal: Create a simple e-commerce landing page using TailwindCSS and JavaScript ES Modules.

📂 Directory Structure
    ├── 📁 index.html
    ├── 📁 modules/
    │   ├── 📄 storage.js
    │   ├── 📄 network.js
    │   ├── 📄 ui.js
    ├── 📄 index.js

🌐 HTML Structure 🌐
    ├── 🖼️ Create a base HTML structure
    │   ├── 📝 Include TailwindCSS CDN
    │   ├── 📝 Add a container for product cards
    │   ├── 📝 Add a cart icon/button

📋 Task List for HTML
    ├── 📝 Create header with title
    ├── 📝 Add main container for product cards
    ├── 📝 Add footer with links

🎨 CSS Styling 🎨
    ├── 📋 TailwindCSS setup
    │   ├── 🔗 Include TailwindCSS CDN in HTML
    │   ├── 🎨 Define custom styles in tailwind.css
    ├── 📋 Style header, main container, and footer
    │   ├── 🎨 Header: Flexbox, padding, background
    │   ├── 🎨 Main: Grid for product cards
    │   ├── 🎨 Footer: Flexbox, padding, background

🔧 JavaScript Functionality 🔧
    ├── 📋 Setup ES Modules
    │   ├── 🔧 Create storage.js
    │   ├── 🔧 Create network.js
    │   ├── 🔧 Create ui.js
    │   ├── 🔧 Import modules in index.js
    ├── 📋 Fetch products from API
    │   ├── 🌐 Create fetch function in network.js
    │   ├── 🌐 Call fetch function on page load
    ├── 📋 Display products as cards
    │   ├── 🎬 Create card component in ui.js
    │   ├── 🎬 Append cards to main container
    ├── 📋 Add to Cart functionality
    │   ├── 🔎 Add event listeners to "Add to Cart" buttons
    │   ├── ❤️ Update cart array in localStorage
    │   ├── ❤️ Display cart items count

🔍 Example Elements in HTML
    ├── 📝 <header>
    │   ├── 📝 <h1>Title</h1>
    ├── 📝 <main>
    │   ├── 📝 <div id="products-container"></div>
    ├── 📝 <footer>
    │   ├── 📝 <a href="#">Link</a>

🌐 Example Fetch Function in network.js
    ├── 🌐 async function fetchProducts() {
    │   ├── const response = await fetch('https://fakestoreapi.com/products');
    │   ├── const products = await response.json();
    │   ├── return products;
    │   ├── }

🎬 Example Card Component in ui.js
    ├── 🎬 function createProductCard(product) {
    │   ├── const card = document.createElement('div');
    │   ├── card.classList.add('card');
    │   ├── card.innerHTML = `
    │   ├──   <img src="${product.image}" alt="${product.title}">
    │   ├──   <h2>${product.title}</h2>
    │   ├──   <p>${product.price}</p>
    │   ├──   <button class="add-to-cart">Add to Cart</button>
    │   ├── `;
    │   ├── return card;
    │   ├── }

✨ Example Add to Cart Function in storage.js
    ├── ❤️ function addToCart(product) {
    │   ├── let cart = JSON.parse(localStorage.getItem('cart')) || [];
    │   ├── cart.push(product);
    │   ├── localStorage.setItem('cart', JSON.stringify(cart));
    │   ├── updateCartCount();
    │   ├── }

🔗 Useful Resources and Links 🔗
    ├── 🌐 TailwindCSS: https://tailwindcss.com/docs
    ├── 🌐 Fake Store API Docs: https://fakestoreapi.com/docs
    ├── 🌐 JavaScript ES Modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

📋 GitHub Structure and Tasks 📋
    ├── 📁 Create repository
    │   ├── 📋 Initialize with README.md
    │   ├── 📋 Setup .gitignore
    ├── 📁 Push initial files
    │   ├── 📋 Add index.html
    │   ├── 📋 Add modules folder with JS files
    │   ├── 📋 Add styles folder with tailwind.css
    │   ├── 📋 Add index.js
    ├── 📁 Branches and PRs
    │   ├── 📋 Create feature branches for tasks
    │   ├── 📋 Create PRs for review and merge
