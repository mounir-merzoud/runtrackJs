// Fonction pour charger et filtrer les données
function filterPokemons() {
    // Récupérer les valeurs des champs de formulaire
    const idInput = document.getElementById('idInput').value.trim();
    const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
    const typeSelect = document.getElementById('typeSelect').value;

    // Utiliser Fetch pour récupérer le contenu du fichier JSON
    fetch('pokemon.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Filtrer les Pokémon en fonction des critères saisis
            const filteredPokemons = data.filter(pokemon => {
                const matchesId = idInput === "" || pokemon.id.toString() === idInput;
                const matchesName = nameInput === "" || pokemon.name.toLowerCase().includes(nameInput);
                const matchesType = typeSelect === "" || pokemon.type.includes(typeSelect);
                return matchesId && matchesName && matchesType;
            });

            // Afficher les résultats
            displayResults(filteredPokemons);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du fichier JSON :', error);
            document.getElementById('result').textContent = 'Erreur lors de la récupération des données.';
        });
}

// Fonction pour afficher les résultats sur la page
function displayResults(pokemons) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Vider les résultats précédents

    if (pokemons.length === 0) {
        resultDiv.textContent = 'Aucun Pokémon ne correspond aux critères de recherche.';
        return;
    }

    pokemons.forEach(pokemon => {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.className = 'pokemon';
        pokemonDiv.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name}, Type: ${pokemon.type.join(', ')}`;
        resultDiv.appendChild(pokemonDiv);
    });
}

// Ajouter un événement de clic au bouton de filtrage
document.getElementById('filterButton').addEventListener('click', filterPokemons);
