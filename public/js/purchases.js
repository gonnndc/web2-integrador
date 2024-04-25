const btnComprar = document.querySelector('#btn-comprar')



btnComprar.addEventListener('click', ()=>{
    fetch('https://web2-integrador-czw6.onrender.com/purchases', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json' // Tipo de contenido JSON
          },
        body:JSON.stringify(datosLocalStorage)
    }).then(response => {
        if (!response.ok) {
          throw new Error('Hubo un problema con la solicitud');
        } 
        abrirModal();
      })
      
})



function abrirModal() {
  const modal = document.getElementById('miModal');
  modal.style.display = 'block';

  setTimeout(() => {
    modal.style.display = 'none';
    window.location.href = 'https://web2-integrador-czw6.onrender.com/products';
    fetch(`https://web2-integrador-czw6.onrender.com/products`);
    localStorage.clear()
  }, 2500);
}



