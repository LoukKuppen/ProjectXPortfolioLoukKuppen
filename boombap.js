document.querySelectorAll('.music-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        document.querySelectorAll('.music-btn').forEach(other => {
            if (other !== btn) {
                other.classList.add('blur');
            } else {
                btn.classList.add('active');
            }
        });
    });
    btn.addEventListener('mouseleave', () => {
        document.querySelectorAll('.music-btn').forEach(other => {
            other.classList.remove('blur', 'active');
        });
    });
    btn.addEventListener('click', () => {
        // Voeg hier het pad naar jouw .wav bestand toe, bijvoorbeeld:
        // btn.querySelector('.audio-player').src = 'Audio/beat1.wav';
        const audio = btn.querySelector('.audio-player');
        if (audio.src) {
            audio.currentTime = 0;
            audio.play();
        }
    });
});