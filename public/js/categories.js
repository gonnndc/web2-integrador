const btnsCategories = document.querySelectorAll(".btn-category")
const btnTodos = document.querySelector("#btnTodos")
const categoryClicked = localStorage.getItem('category-clicked');

btnsCategories.forEach(btn => {
    btn.addEventListener('click', (e) => {
        window.location.href = `https://web2-integrador-czw6.onrender.com/products/category/${btn.textContent}`;
        fetch(`https://web2-integrador-czw6.onrender.com/products/category/${e.target.value}`);
        localStorage.setItem('category-clicked', btn.textContent)
        highlightActiveButton(btn.textContent);
    });
});

btnTodos.addEventListener('click', () => {
    window.location.href = 'https://web2-integrador-czw6.onrender.com/products';
    fetch(`https://web2-integrador-czw6.onrender.com/products`);
    localStorage.setItem('category-clicked', "Todos")
    highlightActiveButton('Todos'); // Resaltar el botón "Todos" después de hacer clic
});

// Resaltar el botón correspondiente al valor guardado
function highlightActiveButton(category) {
    btnsCategories.forEach(btn => {
        if (btn.textContent === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Resaltar el botón "Todos" si la categoría es "Todos"
    if (category === 'Todos') {
        btnTodos.classList.add('active');
    } else {
        btnTodos.classList.remove('active');
    }
}

// Resaltar el botón correspondiente al valor guardado al cargar la página
highlightActiveButton(categoryClicked);