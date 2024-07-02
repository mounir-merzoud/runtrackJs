window.addEventListener('scroll', function() {
    var scroll = window.scrollY; // Position de défilement verticale actuelle
    var windowHeight = window.innerHeight; // Hauteur de la fenêtre visible
    var bodyHeight = document.body.offsetHeight; // Hauteur totale du contenu

    // Calcul du pourcentage de défilement
    var scrollPercentage = (scroll / (bodyHeight - windowHeight)) * 100;

    // Changement de couleur du footer en fonction du pourcentage de défilement
    var footer = document.getElementById('footer');
    footer.style.backgroundColor = 'hsl(' + scrollPercentage + ', 100%, 50%)';
});
