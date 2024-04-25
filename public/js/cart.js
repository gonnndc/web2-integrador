
const ul = document.getElementById('list-products-cart');
let datosLocalStorage = JSON.parse(localStorage.getItem('productsAddedToCart'));

if (Array.isArray(datosLocalStorage) && datosLocalStorage.length > 0) {
    const btnCleanProducts = document.querySelector('#btn_clean_products');
    
    updateTotalAmount();

    btnCleanProducts.addEventListener('click', (e) => {
        const cartQuantity = document.querySelector('.circle')
        cartQuantity.textContent = 0;
        window.location.href = 'https://web2-integrador-czw6.onrender.com/products';
        fetch(`https://web2-integrador-czw6.onrender.com/products`);
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
                <p>Precio unitario: $ ${prod.productPrice } </p>
                <div class="cantidad-spinner">
                    <p>Cantidad: </p>
                    <div class="num-block skin-2">
                        <div class="num-in">
                            <span class="minus dis" id=${prod.productId}></span>
                            <input type="text" class="in-num"  value=${prod.productQuantity} readonly="">
                            <span class="plus" id=${prod.productId}></span>
                        </div>
                    </div>
                    <div class="eliminar-product" id=${prod.productId}>
                        <img src="../media/eliminar.png" alt="eliminar producto"/>
                    </div>    
                </div>
            </div>
        </li>`

        // Agregar la tarjeta del producto a la lista
        ul.innerHTML += card;
    });
    //<p>${prod.productDescription.slice(0, 150) + "..."}</p>

}

var btnEliminar = document.querySelector('.eliminar-product');
btnEliminar.addEventListener('click', ()=>{
    datosLocalStorage = datosLocalStorage.filter(pr => pr.productId !== btnEliminar.id)
    localStorage.setItem('productsAddedToCart', JSON.stringify(datosLocalStorage))
    location.reload()
})


document.addEventListener('DOMContentLoaded', function() {
    var numSpans = document.querySelectorAll('.num-in span');
    
    numSpans.forEach(function(span) {
      span.addEventListener('click', function() {
        var input = this.closest('.num-block').querySelector('input.in-num');
        var count = parseFloat(input.value);
        
        if (this.classList.contains('minus')) {
          count = count - 1;
          count = count < 1 ? 1 : count;
          if (count < 2) {
            this.classList.add('dis');
          } else {
            this.classList.remove('dis');
          }
          input.value = count;
        } else {
          count = count + 1;
          input.value = count;
          if (count > 1) {
            this.closest('.num-block').querySelector('.minus').classList.remove('dis');
          }
        }
        
        datosLocalStorage.find(pr => {
            if(pr.productId === span.id){
                pr.productQuantity = parseInt(input.value)
                return pr
            }
        })

        localStorage.setItem('productsAddedToCart', JSON.stringify(datosLocalStorage));
        cart = datosLocalStorage
        updateTotalAmount()

        var event = new Event('change');
        input.dispatchEvent(event);
        
        return false;
      });
    });
  });

function updateTotalAmount() {
    const totalPrice = datosLocalStorage.reduce((acc, curr) =>{
        return(acc + (parseInt(curr.productPrice) * parseInt(curr.productQuantity)))
    }, 0)
    let cart = JSON.parse(localStorage.getItem('productsAddedToCart')) || [];
    const totalQuantity = cart.reduce((acc, curr) => acc + curr.productQuantity, 0);
    const totalQuantityEl = document.querySelector('.total-info #quantity');
    const totalPriceEl = document.querySelector('.total-info #price');

    totalQuantityEl.textContent = `Cantidad de productos: ${totalQuantity}`;
    totalPriceEl.textContent = `
        Precio total a pagar: $ ${totalPrice}
    `;
}

