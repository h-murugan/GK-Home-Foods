// Script to handle the add to cart functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Product added to cart!');
    });
});
