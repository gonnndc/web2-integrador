document.addEventListener('DOMContentLoaded', () => {
    const btnsAgregarCarrito = document.querySelectorAll('.cta-btn');
    const cartQuantity = document.querySelector('.circle')
    refreshQuantityCar(cartQuantity);

    btnsAgregarCarrito.forEach(btn => {
        let cart = JSON.parse(localStorage.getItem('productsAddedToCart')) || []
        if (cart.length < 1) cartQuantity.style.display = 'none'

        btn.addEventListener('click', () => {
            cartQuantity.style.display = 'flex'
            const productId = btn.dataset.productId;
            const productTitle = btn.dataset.productTitle;
            const productPrice = btn.dataset.productPrice;
            const productDescription = btn.dataset.productDescription;
            const productImg = btn.dataset.productImg;

            const product = {
                productId,
                productTitle,
                productPrice,
                productImg,
                productDescription,
                productQuantity: 1
            };

            let cart = JSON.parse(localStorage.getItem('productsAddedToCart')) || [];

            const existingProductIndex = cart.findIndex(item => item.productId === productId);

            if (existingProductIndex !== -1) {
                // Si el producto ya está en el carrito, incrementar la cantidad
                cart[existingProductIndex].productQuantity += 1;
            } else {
                cart.push(product);
            }
            
            refreshQuantityCar(cartQuantity)

            localStorage.setItem('productsAddedToCart', JSON.stringify(cart));
        });
    });
});

function refreshQuantityCar(cartQuantity) {
    let cart = JSON.parse(localStorage.getItem('productsAddedToCart')) || [];
    const totalQuantity = cart.reduce((acc, curr) => acc + curr.productQuantity, 0);
    cartQuantity.textContent = totalQuantity;
}
