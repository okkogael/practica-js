document.addEventListener("DOMContentLoaded", function() {
    const searchResultsElement = document.querySelector('.search-results');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const busqueda = urlParams.get('q');

    if (busqueda) {
        const searchObject = {
            term: busqueda
        };

        const searchQuery = urlParams.get('q');
        
        fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                searchResultsElement.innerHTML = '';

                data.results.forEach(function(character) {
                    const articleElement = document.createElement('article');

                    const imageElement = document.createElement('img');
                    imageElement.src = character.image;
                    imageElement.alt = character.name;

                    const nameElement = document.createElement('p');
                    nameElement.textContent = `Nombre: ${character.name}`;

                    const statusElement = document.createElement('p');
                    statusElement.textContent = `Status: ${character.status}`;

                    articleElement.appendChild(imageElement);
                    articleElement.appendChild(nameElement);
                    articleElement.appendChild(statusElement);

                    searchResultsElement.appendChild(articleElement);
                });
            })
            .catch(function(error) {
                console.error('Error al obtener los datos de la búsqueda:', error);
            });
    } else {
        console.log('No se ha proporcionado un término de búsqueda.');
    }
});