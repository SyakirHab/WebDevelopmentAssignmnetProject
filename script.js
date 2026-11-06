const c2hover = document.querySelectorAll('.card2');

c2hover.forEach(card => {
    card.addEventListener('mouseenter', () => {card.classList.add('hover')})
    card.addEventListener('mouseleave', () => {card.classList.remove('hover')})
})