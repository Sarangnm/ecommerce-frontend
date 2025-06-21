document.addEventListener("DOMContentLoaded", () => {
  //  Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");
    const icon = hamburger.querySelector("i");

    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-bars-staggered");
    });
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      renderProducts(data); // We'll define this
    })
    .catch(err => {
      console.error('Failed to fetch products:', err);
      document.getElementById('productGrid').innerHTML = "<p class='error'>Failed to load products.</p>";
    });
    function renderProducts(products) {
      const grid = document.getElementById("productGrid");
      products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <div class="product-content">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
          <h3>${product.title}</h3>
          <p>₹${Math.round(product.price * 80).toLocaleString()}</p>
        </div>
        <div class="button-group">
          <button class="buy-now-btn">Buy Now</button>
          <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
      `;

      grid.appendChild(card);
    });
  // Attach event listeners after rendering
    document.querySelectorAll(".buy-btn").forEach(btn => {
      btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const product = products.find(p => p.id === id);
      addToCart(product);
    });
  });
}
document.getElementById("loading")?.remove();

 
});
