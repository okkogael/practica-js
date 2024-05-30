document.addEventListener('DOMContentLoaded', function() {
    const characterListElement = document.querySelector('.characterList');
    
    async function fetchCharacters() {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }
    
    //Primer version de la funcion renderCharacters (con funcion flecha, que no la vimos.)
    /*async function renderCharacters() {
        const characters = await fetchCharacters();
        
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('characterCard');
            
            const imageElement = document.createElement('img');
            imageElement.src = character.image;
            imageElement.alt = character.name;
            
            const nameElement = document.createElement('h2');
            nameElement.textContent = character.name;
            
            const speciesElement = document.createElement('p');
            speciesElement.textContent = `Especie: ${character.species}`;
            
            const statusElement = document.createElement('p');
            statusElement.textContent = `Estado: ${character.status}`;
            
            characterCard.appendChild(imageElement);
            characterCard.appendChild(nameElement);
            characterCard.appendChild(speciesElement);
            characterCard.appendChild(statusElement);
            
            characterListElement.appendChild(characterCard);
        });
    }*/

    async function renderCharacters() {
        const characters = await fetchCharacters();
        
        characters.forEach(function(character) {
            const characterCard = document.createElement('div');
            characterCard.classList.add('characterCard');
            
            const imageElement = document.createElement('img');
            imageElement.src = character.image;
            imageElement.alt = character.name;
            
            const nameElement = document.createElement('h2');
            nameElement.textContent = character.name;
            
            const speciesElement = document.createElement('p');
            speciesElement.textContent = `Especie: ${character.species}`;
            
            const statusElement = document.createElement('p');
            statusElement.textContent = `Estado: ${character.status}`;
            
            characterCard.appendChild(imageElement);
            characterCard.appendChild(nameElement);
            characterCard.appendChild(speciesElement);
            characterCard.appendChild(statusElement);
            
            characterListElement.appendChild(characterCard);
        });
    }
    
    renderCharacters();
});