const btnBackEl = document.querySelector("#back-btn")
btnBackEl.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/products'
    fetch(`http://localhost:3000/products`)
})
