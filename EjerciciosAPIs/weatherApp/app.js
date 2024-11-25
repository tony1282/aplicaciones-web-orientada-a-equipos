//           おれの住所の情報
const URL_base = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEK_2 = '5feb021e54bb530cb784904e228e5013';
const botonBuscarCity = document.getElementById('botonBuscarCity');
const inputBuscarCity = document.getElementById('inputBuscarCity');

const spanNombre = document.getElementById('spanNombre');
const spanPais = document.getElementById('spanPais');
const spanClima = document.getElementById('spanClima');
const spanHora = document.getElementById('spanHora');

let data;

async function getClime(lat, lon) {
    const result = await fetch(URL_base + `lat=${lat}&lon=${lon}&appid=${API_KEK_2}&units=metric`);
    data = await result.json();
    console.log(data);

    // Eliminar la parte del termómetro
    const nombreCiudad = data.name;
    const pais = data.sys.country;
    const clima = data.weather[0].main;
    spanNombre.innerText = nombreCiudad;
    spanPais.innerText = pais;
    spanClima.innerText = clima;

    const timestamp = data.dt;
    const timezoneOffset = data.timezone;
    const date = new Date((timestamp + timezoneOffset) * 1000);
    spanHora.innerText = date.toUTCString();
    inputBuscarCity.value = nombreCiudad;

    return data;
}

async function getClimeByCity(city) {
    const result = await fetch(URL_base + `q=${city}&appid=${API_KEK_2}&units=metric`);
    data = await result.json();
    console.log(data);

    // Eliminar la parte del termómetro
    const temperatura = data.main.temp;
    const nombreCiudad = data.name;
    const pais = data.sys.country;
    const clima = data.weather[0].main;
    spanNombre.innerText = nombreCiudad;
    spanPais.innerText = pais;
    spanClima.innerText = clima;

    const timestamp = data.dt;
    const timezoneOffset = data.timezone;
    const date = new Date((timestamp + timezoneOffset) * 1000);
    spanHora.innerText = date.toUTCString();

    return data;
}

// Obtener la ubicación actual del usuario
navigator.geolocation.getCurrentPosition((pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    console.log(lat);
    console.log(lon);
    getClime(lat, lon);
});

// Buscar clima por ciudad
botonBuscarCity.addEventListener('click', () => {
    if (inputBuscarCity.value !== "") {
        getClimeByCity(inputBuscarCity.value);
    }
});
