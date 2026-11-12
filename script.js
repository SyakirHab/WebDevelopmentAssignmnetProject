const cards = document.querySelectorAll('.card2');

cards.forEach(card => {
  const content = card.querySelector('.card-content') || card;

  // Build the info panel from data attributes
  const info = document.createElement('div');
  info.className = 'card-info';
  info.innerHTML = `
    <h3>${card.dataset.title || ''}</h3>
    <p>${card.dataset.info || ''}</p>
  `;
  content.appendChild(info);

  // Toggle hover state (works for mouse + keyboard)
  const show = () => card.classList.add('hover');
  const hide = () => card.classList.remove('hover');

  card.addEventListener('mouseenter', show);
  card.addEventListener('mouseleave', hide);
  card.addEventListener('focus', show);
  card.addEventListener('blur', hide);

  // Make card focusable for keyboard users
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
});