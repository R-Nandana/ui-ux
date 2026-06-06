var cart = [];
var totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product: product, price: price });
    alert(`Product added: ${product}, Price: ${price}`);
    totalPrice += price;
    alert(`Total price now: ₹${totalPrice.toFixed(2)}`);
    displayCart();
}


function displayCart() {
    var cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.product + ' - ₹' + item.price.toFixed(2);
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = 'Total: ₹' + totalPrice.toFixed(2);
}

function openCart() {
    document.getElementById('cartModal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    var modal = document.getElementById('cartModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
