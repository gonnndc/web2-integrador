const datosLocalStorage = JSON.parse(localStorage.getItem('productsAddedToCart'));
const ul = document.getElementById('list-products-cart');

if (Array.isArray(datosLocalStorage) && datosLocalStorage.length > 0) {
    datosLocalStorage.forEach(prod => {
        // Crear elementos HTML para la tarjeta del producto
        const card = `<li class="product-card">
            <div class="product-img">
                <img src=${prod.productImg} alt="Título del Producto">
            </div>
            <div class="product-info">
                <h4>${prod.productTitle}</h4>
                <p>${prod.productDescription.slice(0,150) + "..."}</p>
                <p>Cantidad: ${prod.productQuantity}</p>
                <p>Precio: $${prod.productPrice}</p>
            </div>
        </li>`

        // Agregar la tarjeta del producto a la lista
        ul.innerHTML+=card;
        
    });
} else {
    const li = document.createElement('li');
    li.textContent = 'No hay datos almacenados';
    ul.appendChild(li);
}