// Récupération de l'élément textarea
var keylogger = document.getElementById("keylogger");

// Ajout d'un écouteur d'événements pour la frappe sur tout le document
document.addEventListener("keydown", function(event) {
    // Récupération de la touche frappée
    var key = event.key;
    
    // Vérification si la touche frappée est une lettre de l'alphabet (a-z)
    if (/^[a-z]$/i.test(key)) {
        // Ajout de la lettre dans le textarea
        keylogger.value += key;

        // Vérification si le focus est sur le textarea
        if (document.activeElement === keylogger) {
            // Si le focus est sur le textarea, ajouter la lettre une deuxième fois
            keylogger.value += key;
        }
    }
});
