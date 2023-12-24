let cartCount = 0;
let modal = document.getElementById("myModal");
let cartLink = document.getElementById("cart");
let cancelButton = document.getElementById("cancel");
let continuebtn = document.getElementById("continue");

function addToCart(productName, productPrice) {
    cartCount++;
    updateCartCount();
    saveCartToLocalStorage(productName, productPrice);
    alert(`Added ${productName} to cart. Total amount: ${productPrice}$`);
}
        
        function updateCartCount() {
    let cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount;
}
function saveCartToLocalStorage(productName, productPrice) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    cart[productName] = productPrice;
    localStorage.setItem('cart', JSON.stringify(cart));
}
        

        function cancelCart() {
        cartCount = 0;
        updateCartCount();
        localStorage.removeItem('cart');
        console.log("Cart cancelled");
        }
        function redirect(event) {
        event.preventDefault();
        window.location.href = "cart.html";
        }
        function loadCartFromLocalStorage() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    let totalPrice = 0;
    for (let productName in cart) {
        let productPrice = cart[productName];
        totalPrice += productPrice;
    }
    cartCount = Object.keys(cart).length;
    updateCartCount();
    return {cart, totalPrice};
}
document.addEventListener('DOMContentLoaded', function() {
    let {cart, totalPrice} = loadCartFromLocalStorage();
    
});
cartLink.addEventListener("click", function() {
    modal.style.display = "block";
});


cancelButton.addEventListener("click", function() {
    modal.style.display = "none";
    
});

continuebtn.addEventListener("click", function () {
    modal.style.display = "none";

});

//Validation:
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    
    // ID number validation
    let idNum = document.getElementById('idNum').value;
    if (idNum.length !== 11 || !(idNum.startsWith('01') || idNum.startsWith('02') || idNum.startsWith('03') || idNum.startsWith('04') || idNum.startsWith('05') || idNum.startsWith('06') || idNum.startsWith('07') || idNum.startsWith('08') || idNum.startsWith('09') || idNum.startsWith('10') || idNum.startsWith('11') || idNum.startsWith('12') || idNum.startsWith('13') || idNum.startsWith('14'))) {
        alert('Invalid ID number.');
        event.preventDefault(); 
    }

    // Phone number validation
    let phoneNum = document.getElementById('phoneNum').value;
    if (!phoneNum.startsWith('09')) {
        alert('Invalid phone number.');
        event.preventDefault();
    }
});
// Name validation
document.getElementById('name').addEventListener('keypress', function(event) {
    if (!/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF-]/.test(event.key)) {
        alert('Invalid name. Please only use Arabic characters.');
        event.preventDefault();
    }
});
// Generate Captcha
function generateCaptcha() {
    let captcha = Math.random().toString(36).substring(2, 8);
    document.getElementById('captcha').value = captcha;
}
function submitForm() {
    let email = document.getElementById('email').value;
    let idNum = document.getElementById('idNum').value;
    let phoneNum = document.getElementById('phoneNum').value;
    let birthDate = document.getElementById('birthDate').value;
    let captcha = document.getElementById('captcha').value;

    if (!email || !idNum || !phoneNum || !birthDate || !captcha) {
        alert('Please fill out all the fields');
        return;
    }
}



