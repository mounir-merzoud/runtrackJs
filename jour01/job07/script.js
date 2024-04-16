function jourTravaille(date) {
    // Récupération du jour, du mois et de l'année de la date passée en paramètre
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc on ajoute 1
    var annee = date.getFullYear();

    // Liste des jours fériés en 2024 (juste pour l'exemple, vous pouvez ajouter les vrais jours fériés)
    var joursFeries2024 = [
        "01/01", // Nouvel An
        "14/04", // Fête du Travail
        "25/12"  // Noël
    ];

    // Vérification si la date est un jour férié
    var dateString = (jour < 10 ? '0' : '') + jour + '/' + (mois < 10 ? '0' : '') + mois;
    if (joursFeries2024.includes(dateString)) {
        console.log("Le " + dateString + "/" + annee + " est un jour férié.");
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, le " + dateString + "/" + annee + " est un week-end.");
    } else {
        console.log("Oui, le " + dateString + "/" + annee + " est un jour travaillé.");
    }
}
