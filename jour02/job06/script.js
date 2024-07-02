// Code Konami : Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var konamiIndex = 0;

document.addEventListener('keydown', function(event) {
    // Vérifier si la touche enfoncée correspond à la prochaine dans la séquence Konami
    if (event.key.toLowerCase() === konamiCode[konamiIndex]) {
        konamiIndex++;
        // Si la séquence Konami est complète, appliquer les styles de La Plateforme_
        if (konamiIndex === konamiCode.length) {
            document.body.classList.add('la-plateforme');
        }
    } else {
        // Réinitialiser l'index si la touche enfoncée ne correspond pas à la séquence Konami
        konamiIndex = 0;
    }
});
