const cards = document.querySelectorAll('.card2');

cards.forEach(card => {
  const content = card.querySelector('.card-content') || card;

  // Build the info panel from data attributes
  const info = document.createElement('div');
  info.className = 'card-info';
  info.innerHTML = `
    <h3>${card.dataset.title || ''}</h3>
    <p>${card.dataset.info || ''}</p>
    <a class="explore-btn" href="${card.dataset.link || '#'}">Explore</a>
  `;
  content.appendChild(info);

  // Toggle hover state (works for mouse + keyboard)
  const heading = card.querySelector('.card-heading');
  const backdrop = card.querySelector('.card-heading-backdrop');
  const show = () => {
    card.classList.add('hover');
    if (heading) heading.style.opacity = '0';
    if (backdrop) backdrop.style.opacity = '0';
  };
  const hide = () => {
    card.classList.remove('hover');
    if (heading) heading.style.opacity = '1';
    if (backdrop) backdrop.style.opacity = '1';
  };

  card.addEventListener('mouseenter', show);
  card.addEventListener('mouseleave', hide);
  card.addEventListener('focus', show);
  card.addEventListener('blur', hide);

  // Make card focusable for keyboard users
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
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

/* Contact form feedback */
const contactForm = document.getElementById('contactFormElem');
const formFeedback = document.getElementById('formFeedback');

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showFeedback('Please fill in all fields before sending.', 'error');
      return;
    }

    showFeedback('Thank you! Your message has been sent successfully.', 'success');
    contactForm.reset();
  });
}

function showFeedback(text, type = 'success') {
  formFeedback.textContent = text;
  formFeedback.classList.remove('hidden', 'feedback--success', 'feedback--error');
  formFeedback.classList.add(`feedback--${type}`);
  formFeedback.style.display = 'block';

  setTimeout(() => {
    formFeedback.classList.add('hidden');
    formFeedback.style.display = 'none';
  }, 5000);
}