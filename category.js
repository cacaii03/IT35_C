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

document.querySelectorAll('.favorite-star').forEach(star => {
  star.addEventListener('click', function(e) {
    this.classList.toggle('favorited');
    this.innerHTML = this.classList.contains('favorited') ? '&#9733;' : '&#9734;';
    e.stopPropagation();
  });
});

document.querySelectorAll('.sidebar button').forEach(btn => {
  if (btn.textContent.trim() === 'Favorites') {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.movie-card').forEach(card => {
        const star = card.querySelector('.favorite-star');
        if (star && star.classList.contains('favorited')) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
  if (btn.textContent.trim() === 'Home') {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.movie-card').forEach(card => {
        card.style.display = '';
      });
      document.querySelector('.category-dropdown').value = '';
    });
  }
});
