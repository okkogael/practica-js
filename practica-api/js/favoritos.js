document.addEventListener("DOMContentLoaded", function() {
    const favoritesList = document.querySelector('.favorites-list');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>Aún no tenes personajes favoritos.</p>';
    } else {
        favorites.forEach(function(id) {
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    const characterCard = document.createElement('article');

                    const imageElement = document.createElement('img');
                    imageElement.src = data.image;
                    imageElement.alt = data.name;

                    const nameElement = document.createElement('p');
                    nameElement.textContent = `Nombre: ${data.name}`;

                    const statusElement = document.createElement('p');
                    statusElement.textContent = `Status: ${data.status}`;

                    characterCard.appendChild(imageElement);
                    characterCard.appendChild(nameElement);
                    characterCard.appendChild(statusElement);

                    favoritesList.appendChild(characterCard);
                })
                .catch(function(error) {
                    console.error('Error al obtener los datos del personaje:', error);
                });
        });
    }
});
