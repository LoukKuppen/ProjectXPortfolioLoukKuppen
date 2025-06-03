document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = card.getAttribute('data-link');
    });
});