document.querySelector('.category-dropdown').addEventListener('change', function() {
  const value = this.value;
  const cards = document.querySelectorAll('.movie-card');
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (!value || value === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});
