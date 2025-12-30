// Select all "Add to Cart" buttons
const cartButtons = document.querySelectorAll(".product-card button");

// Add click event to each button
cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart 🛒");
    });
});
