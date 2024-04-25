const carrito = document.querySelector('.carrito-notification')
let cart = JSON.parse(localStorage.getItem('productsAddedToCart')) || []

if((window.location.pathname == '/' || window.location.pathname == '/purchases/history') && cart.length < 1){
    carrito.style.display = 'none'
} else {
    carrito.style.display = 'flex'
}

