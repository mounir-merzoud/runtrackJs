// Fonction pour récupérer et afficher la citation
function citation() {
    // Récupérer l'élément citation
    var citationElement = document.getElementById("citation");
    var citationText = citationElement.textContent;
    // Créer un nouvel élément div pour afficher la citation
    var div = document.createElement("div");
    div.textContent = citationText;
    // Ajouter le nouvel élément div après le bouton
    var button = document.getElementById("button");
    button.parentNode.insertBefore(div, button.nextSibling);
}

// Ajout d'un écouteur d'événement pour le clic sur le bouton
document.getElementById("button").addEventListener("click", citation);