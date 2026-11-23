document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.location-card');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
                arrow.style.transform = 'rotate(0deg)';
            }
});
    }, { threshold: 0.15 });

    const arrow = document.getElementById('arrow');

    cards.forEach(card => {
        observer.observe(card);
    });
});

const darkModeButton = document.querySelector('.darkmode');

if (localStorage.getItem('darkMode') === 'on') {
  document.body.classList.add('dark-mode');
}

if (darkModeButton) {
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'on' : 'off');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });
  darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

const menuToggle = document.querySelector('.menu-toggle');
const navContent = document.querySelector('.nav-content');

if (menuToggle && navContent) {
  const toggleMenu = () => {
    const isOpen = navContent.classList.toggle('open');
    menuToggle.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  };

  menuToggle.addEventListener('click', toggleMenu);

  navContent.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navContent.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
