document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');

    const character = {
        id: characterId
    };

    fetch(`https://rickandmortyapi.com/api/character/${character.id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const characterNameElement = document.querySelector('.character-name');
            characterNameElement.textContent = data.name;

            const statusElement = document.querySelector('.status');
            statusElement.textContent += data.status;

            const speciesElement = document.querySelector('.species');
            speciesElement.textContent += data.species;

            const characterImageElement = document.querySelector('.character-image');
            characterImageElement.src = data.image;

            // Capturar el evento click sobre el enlace "Agregar a favoritos", haciendo referencia a la clase.
            const addToFavoritesLink = document.querySelector('.add-to-favorites');
            addToFavoritesLink.addEventListener('click', function(event) {
                event.preventDefault(); // Evitar el comportamiento por defecto del enlace. https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault

                // Obtenemos el ID del personaje.
                const characterId = data.id;

                // Verificamos si ya existe un array de favoritos en localStorage.
                let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

                // Agregamos el ID si no esta presente.
                if (!favorites.includes(characterId)) {
                    favorites.push(characterId);
                    localStorage.setItem('favorites', JSON.stringify(favorites));
                    alert('Personaje agregado a favoritos');
                } else {
                    alert('Este personaje ya está en tus favoritos');
                }
            });
        })
        .catch(function(error) {
            console.error('Error al obtener los datos del personaje:', error);
        });
});

// Codigo para <a> de Personajes Favoritos
document.addEventListener("DOMContentLoaded", function() {
    const favoritesLink = document.querySelector('.favorites-link');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.length > 0) {
        favoritesLink.style.display = 'inline';
    }
});