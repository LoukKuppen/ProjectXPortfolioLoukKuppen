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
        // Zet hier je YouTube video ID's
        let youtubeId = "";
        if (idx === 0) {
            youtubeId = "VqFkI8skK7k";
        } else if (idx === 1) {
            youtubeId = "HMmWd1Jt284";
        } else if (idx === 2) {
            youtubeId = "cFBvKkePHGo";
        }
        // Embed link met autoplay
        beatVideo.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
        videoPlayerContainer.style.display = "flex";
    });
});

// Klik buiten de video om te sluiten
document.addEventListener('click', function(e) {
    const container = document.getElementById('videoPlayerContainer');
    const video = document.getElementById('beatVideo');
    if (container.style.display === "flex" && !container.contains(e.target) && !e.target.classList.contains('music-btn')) {
        video.src = "";
        container.style.display = "none";
    }
});