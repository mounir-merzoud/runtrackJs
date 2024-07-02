// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner le bouton par son ID
    const button = document.getElementById('button');

    // Ajouter un événement de clic au bouton
    button.addEventListener('click', () => {
        // Utiliser fetch pour récupérer le contenu de expression.txt
        fetch('expression.txt')
            .then(response => {
                // Vérifier si la réponse est OK
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text(); // Lire le contenu du fichier en tant que texte
            })
            .then(data => {
                // Créer un nouvel élément paragraphe <p>
                const paragraph = document.createElement('p');
                // Ajouter le texte récupéré dans le paragraphe
                paragraph.textContent = data;
                // Insérer le paragraphe dans le corps de la page
                document.body.appendChild(paragraph);
            })
            .catch(error => {
                // Afficher une alerte en cas d'erreur
                alert('Une erreur est survenue : ' + error.message);
            });
    });
});
