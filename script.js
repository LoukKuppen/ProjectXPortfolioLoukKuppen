document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = card.getAttribute('data-link');
    });
});

document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = card.getAttribute('data-link');
    });

    const video = card.querySelector('.genre-video');
    if (video) {
        card.addEventListener('mouseenter', () => {
            video.currentTime = 0;
            video.play();
        });
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});