document.querySelectorAll('.music-btn').forEach((btn, idx) => {
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
        const videoPlayerContainer = document.getElementById('videoPlayerContainer');
        const beatVideo = document.getElementById('beatVideo');
        // Kies per knop een andere video
        let videoSrc = "";
        if (idx === 0) {
            videoSrc = "Video/Hiermoetdieeerstedaggoe";
        } else if (idx === 1) {
            videoSrc = "Video/Hiermoetdietweededaggoe";
        } else if (idx === 2) {
            videoSrc = "Video/Hiermoetdiederdedaggoe";
        }
        beatVideo.src = videoSrc;
        beatVideo.currentTime = 0;
        beatVideo.volume = 1;
        beatVideo.play();
        videoPlayerContainer.style.display = "flex";
    });
});

// Klik buiten de video om te sluiten
document.addEventListener('click', function(e) {
    const container = document.getElementById('videoPlayerContainer');
    const video = document.getElementById('beatVideo');
    if (container.style.display === "flex" && !container.contains(e.target) && !e.target.classList.contains('music-btn')) {
        video.pause();
        container.style.display = "none";
    }
});