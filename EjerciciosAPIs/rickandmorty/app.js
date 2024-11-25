const URL_BASE = 'https://rickandmortyapi.com/api';
const container = document.querySelector('.container');
const divCharacters = document.querySelector('.characters');
const divButtons = document.querySelector('.botones');
let page = 1;
let currentStatus = ''; // Estado actual de filtro

function createCard(character) {
    const card = document.createElement('div');
    let htmlObj = `
    <img src='${character.image}'>
    <div>
        <h1 style="color: aqua;">${character.name}</h1>
        <p>${character.status} - ${character.species}</p>
        <p>Última ubicación</p>
        <p>${character.location.name}</p>
        <p>Primera Aparición</p>
        <p>${character.episode[0]}</p>
    </div>
    `;
    card.innerHTML = htmlObj;
    card.className = 'card';
    return card;
}

function createCards(characters) {
    divCharacters.innerHTML = '';
    characters.forEach(c => {
        divCharacters.appendChild(createCard(c));
    });
}

function createButtons(info) {
    divButtons.innerHTML = '';
    if (info.prev) {
        const btnLeft = document.createElement('button');
        btnLeft.innerText = '<=';
        btnLeft.className = 'btn';
        btnLeft.setAttribute('data-id', page - 1);
        divButtons.appendChild(btnLeft);
    }
    if (info.next) {
        const btnRight = document.createElement('button');
        btnRight.innerText = '=>';
        btnRight.className = 'btn';
        btnRight.setAttribute('data-id', page + 1);
        divButtons.appendChild(btnRight);
    }
}

async function getCharacters(page = 1, status = '') {
    try {
        const response = await fetch(`${URL_BASE}/character/?page=${page}&status=${status}`);
        const data = await response.json();
        const characters = data.results;
        createCards(characters);
        createButtons(data.info);
    } catch (error) {
        console.error("Error al obtener personajes:", error);
    }
}

// Función para manejar cambio de estado en el filtro
document.querySelector('#status').addEventListener('change', e => {
    currentStatus = e.target.value; // Actualiza el estado actual
    page = 1; // Reinicia a la primera página
    getCharacters(page, currentStatus);
});

// Evento para cambiar de página al hacer clic en los botones
divButtons.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        page = parseInt(e.target.getAttribute('data-id'));
        getCharacters(page, currentStatus); // Usa el estado actual para conservar el filtro
    }
});

// Llama a la función inicial para cargar personajes
getCharacters(page);
