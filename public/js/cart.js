document.addEventListener('DOMContentLoaded', () => {

    const ul = document.getElementById('list-products-cart');
    const datosLocalStorage = JSON.parse(localStorage.getItem('productsAddedToCart'));

    if (Array.isArray(datosLocalStorage) && datosLocalStorage.length > 0) {
        const btnCleanProducts = document.querySelector('#btn_clean_products');

        const totalPrice = datosLocalStorage.reduce((acc, curr) =>{
            return(acc + (parseInt(curr.productPrice) * parseInt(curr.productQuantity)))
        }, 0)
        let cart = JSON.parse(localStorage.getItem('productsAddedToCart')) || [];
        const totalQuantity = cart.reduce((acc, curr) => acc + curr.productQuantity, 0); 
        const totalQuantityEl = document.querySelector('.total-info #quantity')   
        const totalPriceEl = document.querySelector('.total-info #price')
        
        totalQuantityEl.textContent = `Cantidad de productos: ${totalQuantity}`
        totalPriceEl.textContent = `
            Precio total a pagar: $ ${totalPrice}
        `

        btnCleanProducts.addEventListener('click', (e) => {
            const cartQuantity = document.querySelector('.circle')
            cartQuantity.textContent = 0;
            window.location.href = 'http://localhost:3000/products';
            fetch(`http://localhost:3000/products`);
            localStorage.clear()
        })
        datosLocalStorage.forEach(prod => {
            // Crear elementos HTML para la tarjeta del producto
            const card = `<li class="product-card">
                <div class="product-img">
                    <img src=${prod.productImg} alt="Título del Producto">
                </div>
                <div class="product-info">
                    <h4>${prod.productTitle}</h4>
                    <p>${prod.productDescription.slice(0, 150) + "..."}</p>
                    <p>Cantidad: ${prod.productQuantity}</p>
                    <p>Precio: $${prod.productPrice}</p>
                </div>
            </li>`

            // Agregar la tarjeta del producto a la lista
            ul.innerHTML += card;

        });
    }
})
