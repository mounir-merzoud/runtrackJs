/**
 * Retourne la valeur associée à une clé donnée dans une chaîne JSON.
 * 
 * @param {string} jsonString - La chaîne de caractères au format JSON.
 * @param {string} key - La clé dont on veut obtenir la valeur.
 * @return {any} - La valeur associée à la clé, ou undefined si la clé n'existe pas.
 */
function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en un objet JavaScript
        const jsonObject = JSON.parse(jsonString);
        
        // Retourner la valeur associée à la clé
        return jsonObject[key];
    } catch (error) {
        console.error('Erreur lors de l\'analyse du JSON :', error);
        return undefined;
    }
}

// Sélectionner les éléments du DOM
const jsonInput = document.getElementById('jsonInput');
const keyInput = document.getElementById('keyInput');
const getValueButton = document.getElementById('getValueButton');
const resultDiv = document.getElementById('result');

// Ajouter un événement de clic au bouton
getValueButton.addEventListener('click', () => {
    // Obtenir les valeurs des champs d'entrée
    const jsonString = jsonInput.value;
    const key = keyInput.value;

    // Utiliser la fonction jsonValueKey pour obtenir la valeur associée à la clé
    const value = jsonValueKey(jsonString, key);

    // Afficher le résultat dans le div "result"
    if (value !== undefined) {
        resultDiv.textContent = `La valeur pour la clé "${key}" est : ${value}`;
    } else {
        resultDiv.textContent = `Clé "${key}" non trouvée ou JSON invalide.`;
    }
});
