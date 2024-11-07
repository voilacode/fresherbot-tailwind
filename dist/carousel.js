const videos = document.querySelectorAll('.video-wrapper');
let currentIndex = 0;
let userInteracted = false;

// Detect user interaction
document.addEventListener('click', () => {
    userInteracted = true;
    updateCarousel(); // Run the update as soon as they interact
}, { once: true }); // Run only once for initial interaction

const updateCarousel = () => {
    videos.forEach((video, index) => {
        video.classList.remove('front', 'left', 'right');
        video.querySelector('video').pause(); // Pause all videos
    });

    const totalVideos = videos.length;
    videos[currentIndex].classList.add('front');
    videos[(currentIndex + totalVideos - 1) % totalVideos].classList.add('left');
    videos[(currentIndex + 1) % totalVideos].classList.add('right');

    // Only play the front video if user has interacted
    const frontVideoElement = videos[currentIndex].querySelector('video');
    if (userInteracted) {
        frontVideoElement.play();
    }

    // Add click event to front video for toggling play/pause
    frontVideoElement.onclick = () => {
        if (frontVideoElement.paused) {
            frontVideoElement.play();
        } else {
            frontVideoElement.pause();
        }
    };
};

const rotateCarousel = (direction) => {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % videos.length;
    } else {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    }
    updateCarousel();
};

videos.forEach((video) => {
    video.addEventListener('click', () => {
        currentIndex = parseInt(video.getAttribute('data-index'));
        updateCarousel();
    });
});

document.getElementById('nextBtn').addEventListener('click', () => rotateCarousel('next'));
document.getElementById('prevBtn').addEventListener('click', () => rotateCarousel('prev'));
updateCarousel();