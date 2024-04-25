const btnComprar = document.querySelector('#btn-comprar')



btnComprar.addEventListener('click', ()=>{
    fetch('http://localhost:3000/purchases', {
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

  // Temporizador para cerrar el modal después de 3 segundos
  setTimeout(() => {
    modal.style.display = 'none';
    window.location.href = 'http://localhost:3000/products';
    fetch(`http://localhost:3000/products`);
    localStorage.clear()
  }, 3000);
}



