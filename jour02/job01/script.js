// Fonction pour récupérer et afficher la citation
function citation() {
    var citationElement = document.getElementById("citation");
    var citationText = citationElement.textContent;
    console.log("Citation:", citationText);
}

// Ajout d'un écouteur d'événement pour le clic sur le bouton
document.getElementById("button").addEventListener("click", citation);
