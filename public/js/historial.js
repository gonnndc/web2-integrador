// Obtener todos los elementos con la clase "toggle-details"
const toggleHeaders = document.querySelectorAll('.toggle-details');

// Agregar un controlador de eventos clic a cada encabezado
toggleHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const wrapperItem = header.nextElementSibling;

        if (wrapperItem.style.display === 'none') {
            wrapperItem.style.display = 'flex';
            header.querySelector('.arrow-icon').classList.add('rotated');
        } else {
            wrapperItem.style.display = 'none';
            header.querySelector('.arrow-icon').classList.remove('rotated')
        }
    });
});
