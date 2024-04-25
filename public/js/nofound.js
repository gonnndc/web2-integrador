const btnBackEl = document.querySelector("#back-btn")
btnBackEl.addEventListener('click', () => {
    window.location.href = 'https://web2-integrador-czw6.onrender.com/products'
    fetch(`https://web2-integrador-czw6.onrender.com/products`)
})
