document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.location-card');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
});
    }, { threshold: 0.15 });

    cards.forEach(card => {
        observer.observe(card);
    });
});
