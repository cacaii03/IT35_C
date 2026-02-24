function openMovieModal(card) {
  const modal = document.getElementById('movie-modal');
  modal.querySelector('.modal-image').src = card.querySelector('.movie-thumb').src;
  modal.querySelector('.modal-title').textContent = card.querySelector('.movie-title').textContent;
  modal.querySelector('.modal-desc').textContent = card.querySelector('.movie-desc').textContent;
  modal.querySelector('.modal-rating').textContent = card.querySelector('.movie-rating').textContent;
  modal.style.display = 'flex';
}

document.querySelectorAll('.watch-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const card = this.closest('.movie-card');
    openMovieModal(card);
    e.stopPropagation();
  });
});

document.querySelector('.modal-close').addEventListener('click', function() {
  document.getElementById('movie-modal').style.display = 'none';
});

document.getElementById('movie-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});
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
