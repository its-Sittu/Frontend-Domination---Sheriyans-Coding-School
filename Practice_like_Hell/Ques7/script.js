// Add a subtle scroll effect to the navbar for a more premium feel
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 31, 43, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            navbar.style.transition = 'all 0.3s ease';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = 'none';
        }
    });

    // Optional: Add basic interactivity to batch cards
    const batchCards = document.querySelectorAll('.batch-card');
    batchCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all
            batchCards.forEach(c => c.classList.remove('active-batch'));
            // Add active class to clicked
            card.classList.add('active-batch');
        });
    });
});