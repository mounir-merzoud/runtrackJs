document.addEventListener('DOMContentLoaded', () => {
    // Formulaire de Connexion
    const connexionForm = document.getElementById('connexionForm');
    connexionForm.addEventListener('input', (event) => {
        validateField(event.target, 'connexion');
    });

    connexionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        handleConnexion();
    });

    // Formulaire d'Inscription
    const inscriptionForm = document.getElementById('inscriptionForm');
    inscriptionForm.addEventListener('input', (event) => {
        validateField(event.target, 'inscription');
    });

    inscriptionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        handleInscription();
    });
});

function validateField(target, formType) {
    const field = target.id.replace(formType.charAt(0).toUpperCase() + formType.slice(1), '');
    const errorDiv = document.getElementById(target.id + 'Error');

    if (field === 'email') {
        if (!validateEmail(target.value)) {
            errorDiv.textContent = 'Veuillez entrer un email valide.';
            errorDiv.style.display = 'block';
        } else {
            errorDiv.style.display = 'none';
        }
    }

    if (field === 'password') {
        if (target.value.length < 6) {
            errorDiv.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
            errorDiv.style.display = 'block';
        } else {
            errorDiv.style.display = 'none';
        }
    }

    if (field === 'codePostal') {
        const codePostalPattern = /^\d{5}$/;
        if (!codePostalPattern.test(target.value)) {
            errorDiv.textContent = 'Veuillez entrer un code postal valide (5 chiffres).';
            errorDiv.style.display = 'block';
        } else {
            errorDiv.style.display = 'none';
        }
    }

    if (['nom', 'prenom', 'adresse'].includes(field)) {
        if (target.value.trim() === '') {
            errorDiv.textContent = 'Ce champ ne peut pas être vide.';
            errorDiv.style.display = 'block';
        } else {
            errorDiv.style.display = 'none';
        }
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function handleInscription() {
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('emailInscription').value.trim();
    const password = document.getElementById('passwordInscription').value.trim();
    const adresse = document.getElementById('adresse').value.trim();
    const codePostal = document.getElementById('codePostal').value.trim();

    const utilisateur = {
        id: Date.now(), // Utilisation d'un timestamp comme ID unique
        nom,
        prenom,
        email,
        password,
        adresse,
        codePostal
    };

    fetch('utilisateurs.json')
        .then(response => response.json())
        .then(utilisateurs => {
            utilisateurs.push(utilisateur);
            return utilisateurs;
        })
        .then(utilisateurs => {
            return fetch('utilisateurs.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(utilisateurs)
            });
        })
        .then(() => {
            const messageDiv = document.getElementById('inscriptionMessage');
            messageDiv.textContent = 'Inscription réussie !';
            messageDiv.classList.add('success');
            messageDiv.classList.remove('error');
            messageDiv.style.display = 'block';
        })
        .catch(error => {
            console.error('Erreur lors de l\'inscription :', error);
        });
}

function handleConnexion() {
    const email = document.getElementById('emailConnexion').value.trim();
    const password = document.getElementById('passwordConnexion').value.trim();

    fetch('utilisateurs.json')
        .then(response => response.json())
        .then(utilisateurs => {
            const utilisateurTrouve = utilisateurs.find(user => user.email === email && user.password === password);
            if (utilisateurTrouve) {
                const messageDiv = document.getElementById('connexionMessage');
                messageDiv.textContent = 'Connexion réussie !';
                messageDiv.classList.add('success');
                messageDiv.classList.remove('error');
                messageDiv.style.display = 'block';
            } else {
                const messageDiv = document.getElementById('connexionMessage');
                messageDiv.textContent = 'Email ou mot de passe incorrect.';
                messageDiv.classList.add('error');
                messageDiv.classList.remove('success');
                messageDiv.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Erreur lors de la connexion :', error);
        });
}
