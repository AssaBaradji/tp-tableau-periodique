// Données des éléments chimiques
const elements = [
    { symbol: 'H', name: 'Hydrogène' },
    { symbol: 'li', name: 'Hélium' },
    { symbol: 'Na', name: 'Hélium' },
    { symbol: 'K', name: 'Hélium' },
    { symbol: 'Rb', name: 'Hélium' },
    { symbol: 'Cs', name: 'Hélium' },
    { symbol: 'Fr', name: 'Hélium' },
    { symbol: 'Be', name: 'Hélium' },

    // Ajoutez les autres éléments chimiques ici...
];

// Fonction pour générer le tableau périodique
function generatePeriodicTable() {
    const tableauPeriodique = document.getElementById('tableau-periodique');

    elements.forEach(element => {
        const cellule = document.createElement('div');
        cellule.classList.add('cell');
        cellule.textContent = element.symbol;
        cellule.title = element.name;
        tableauPeriodique.appendChild(cellule);
    });
}

// Appel de la fonction pour générer le tableau périodique lors du chargement de la page
generatePeriodicTable();
