// Fonction pour mettre à jour le tableau des utilisateurs
function updateTable() {
    // Utiliser Fetch pour récupérer le contenu du fichier JSON
    fetch('utilisateur.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Sélectionner le corps du tableau (tbody)
            const tbody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
            tbody.innerHTML = ''; // Vider le tableau actuel

            // Ajouter les utilisateurs dans le tableau
            data.forEach(user => {
                const row = tbody.insertRow();
                row.insertCell(0).textContent = user.id;
                row.insertCell(1).textContent = user.nom;
                row.insertCell(2).textContent = user.prenom;
                row.insertCell(3).textContent = user.email;
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du fichier JSON :', error);
        });
}

// Ajouter un événement de clic au bouton "update"
document.getElementById('updateButton').addEventListener('click', updateTable);
