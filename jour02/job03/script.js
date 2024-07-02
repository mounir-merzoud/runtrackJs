// Récupérer l'élément du bouton et le paragraphe du compteur
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialiser le compteur de clics
var clics = 0;

// Fonction pour mettre à jour le compteur de clics
function mettreAJourCompteur() {
    // Incrémenter le nombre de clics à chaque fois que le bouton est cliqué
    clics++;
    // Mettre à jour le contenu du paragraphe avec le nombre de clics
    compteur.textContent = clics;
}

// Ajouter un gestionnaire d'événements pour le clic sur le bouton
button.addEventListener("click", mettreAJourCompteur);
