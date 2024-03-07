// rickMorty.js
let url = 'https://rickandmortyapi.com/api/character';
let todosLosPersonajes = [];

function obtenerPersonajes(url) {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            todosLosPersonajes = todosLosPersonajes.concat(datos.results);
            if (datos.info.next) {
                obtenerPersonajes(datos.info.next);
            } else {
                mostrarPersonajes(todosLosPersonajes);
            }
        });
}

function mostrarPersonajes(personajes) {
    const contenedor = document.getElementById('contenedorPersonajes');
    personajes.forEach(personaje => {
        const divPersonaje = document.createElement('div');
        divPersonaje.className = 'personaje';
        divPersonaje.innerHTML = `
            <h2>${personaje.name}</h2>
            <img src="${personaje.image}" alt="${personaje.name}">
            <p>Especie: ${personaje.species}</p>
            <p>Estado: ${personaje.status}</p>
            <p>Tipo: ${personaje.type || 'N/A'}</p>
            <p>Genero: ${personaje.gender}</p>
            <p>Origen: ${personaje.origin.name}</p>
            <p>Ubicacion: ${personaje.location.name}</p>
        `;
        contenedor.appendChild(divPersonaje);
    });
}

obtenerPersonajes(url);