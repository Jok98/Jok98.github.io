// Seleziona tutte le intestazioni delle sezioni
const sectionHeaders = document.querySelectorAll('.section-header');

sectionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Trova il contenuto associato all'intestazione
        const content = header.nextElementSibling;
        const button = header.querySelector('.toggle-btn');

        if (content.style.display === 'none' || content.style.display === '') {
            // Espandi la sezione
            content.style.display = 'block';
            button.textContent = '-'; // Cambia il testo del pulsante
        } else {
            // Comprimi la sezione
            content.style.display = 'none';
            button.textContent = '+';
        }
    });
});