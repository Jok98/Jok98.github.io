const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Trova il contenuto associato al pulsante
        const content = button.parentElement.nextElementSibling;

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