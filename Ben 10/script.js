const gallery = document.getElementById('gallery');
const aliens = document.querySelectorAll('.alien');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const windowWidth = window.innerWidth;
    const scrollAmount = (mouseX / windowWidth) * (gallery.scrollWidth - windowWidth);
    gallery.scrollLeft = scrollAmount;
});

// Optional: Add a subtle animation loop for extra "ad" feel
function animateAliens() {
    aliens.forEach((alien, index) => {
        alien.style.transform = `translateY(${Math.sin(Date.now() * 0.001 + index) * 5}px)`;
    });
    requestAnimationFrame(animateAliens);
}
animateAliens();