const URL_BASE = 'https://dragonball-api.com/api/characters';
const divCharacters = document.querySelector('.characters');
const divButtons = document.querySelector('.botones');
let page = 1;
let currentFilters = { race: "" }; // Filtro actual solo por raza

function createCard(character) {
    console.log("Creating card for character:", character); // Depuración
    const card = document.createElement('div');
    card.className = 'card';
    let htmlObj = `
        <img src='${character.image}' alt='${character.name}'>
        <div class="api">
            <h1>${character.name}</h1>
            <h2>Ki: ${character.ki}</h2>
            <h3>Raza: ${character.race}</h3>
        </div>
    `;
    card.innerHTML = htmlObj;
    return card;
}

function createCards(characters) {
    divCharacters.innerHTML = ''; // Limpia el contenedor
    console.log("Creating cards for characters:", characters); // Depuración
    characters.forEach(character => {
        const card = createCard(character);
        divCharacters.appendChild(card);
    });
}

function createButtons(info) {
    divButtons.innerHTML = ''; // Limpia los botones
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

async function getCharacters(page = 1, filters = {}) {
    try {
        let url = `${URL_BASE}?page=${page}`;
        if (filters.race) {
            url += `&race=${encodeURIComponent(filters.race)}`;
        }

        console.log("Fetching URL:", url); // Depuración

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response Data:", data); // Depuración

        if (data.items && data.items.length > 0) {
            createCards(data.items); // Crear tarjetas
            createButtons(data.meta); // Crear botones de paginación
        } else {
            divCharacters.innerHTML = `<p>No se encontraron personajes para el filtro: ${filters.race}</p>`;
        }
        
    } catch (error) {
        console.error("Error al obtener personajes:", error);
        divCharacters.innerHTML = `<p>Error al cargar datos</p>`;
    }
}

document.querySelector('#race').addEventListener('change', (e) => {
    currentFilters.race = e.target.value.trim(); // Asegura que no haya espacios extra
    page = 1; // Reinicia la página
    console.log("Filter applied:", currentFilters); // Depuración
    getCharacters(page, currentFilters);
});

divButtons.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        page = parseInt(e.target.getAttribute('data-id'));
        getCharacters(page, currentFilters);
    }
});

getCharacters(page);
