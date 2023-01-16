window.addEventListener('load', () => {
    // capturo los selectores
    let h1 = document.querySelector('h1');
    let section = document.querySelector('section');
    let article = document.querySelector('article');
    let button1 = document.querySelector('.botonAgregar');
    let button2 = document.querySelector('.botonVolver');

    h1.innerText = "AGREGAR PELÍCULAS";
    h1.classList.add('titulo');
    section.classList.add('fondoCRUD')
    article.classList.add('fondoTransparente')
    
    button1.style.fontSize = "10px";
    button2.style.fontSize = "10px";

})

