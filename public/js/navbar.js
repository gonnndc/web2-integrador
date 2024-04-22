const carrito = document.querySelector('.carrito-notification')
console.log(carrito);

if(window.location.pathname == '/'){
    carrito.style.display = 'none'
} else {
    carrito.style.display = 'flex'
}