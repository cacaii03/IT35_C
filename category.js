function openMovieModal(card) {
  const modal = document.getElementById('movie-modal');
  modal.querySelector('.modal-image').src = card.querySelector('.movie-thumb').src;
  modal.querySelector('.modal-title').textContent = card.querySelector('.movie-title').textContent;
  modal.querySelector('.modal-desc').textContent = card.querySelector('.movie-desc').textContent;
  modal.querySelector('.modal-rating').textContent = card.querySelector('.movie-rating').textContent;
  const title = card.querySelector('.movie-title').textContent.trim();
  const watchBtn = modal.querySelector('.modal-watch-btn');
  if (title === 'Mercy') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/mercy-m7CfWiubBF8?id=7277534518369044296&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'Bad Boys: Ride or Die') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/bad-boys-ride-or-die-telugu-cI3fnqVj2q?id=352471102867866936&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'Captain America: Brave New World') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/captain-america-brave-new-world-mPoGFWknyo7?id=6207491388670886992&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'Mission: Impossible – The Final Reckoning') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/mission-impossible-dead-reckoning-part-one-SRb1vyZkFC5?id=4719931991142058272&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'A Complete Unknown') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/a-complete-unknown-UYQj8TVJAJ6?id=5652987094373913432&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'The Amateur') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/the-amateur-uD0mYexJSs3?id=2908887247384723616&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'Kung Fu Panda 4') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/kung-fu-panda-4-y1YvWyPHco6?id=5363460711840629752&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'Inside Out 2') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/inside-out-2-MMi31fRpyf6?id=5246367121529078256&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'The Conjuring: Last Rites') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/the-conjuring-last-rites-o4iwG7hNbi3?id=2764140928360139480&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'Saw XI') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/saw-x-M4OvUeaJzT5?id=4948837547402218168&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'People We Meet on Vacation') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/people-we-meet-on-vacation-g0Qy2HbsKv1?id=1269091963102548304&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else if (title === 'Love Me Love Me') {
    watchBtn.onclick = function() {
      window.open('https://123movienow.cc/spa/videoPlayPage/movies/love-me-love-me-02hM1Yh7M44?id=3421851806626989968&type=/movie/detail&detailSe=&detailEp=&lang=en', '_blank');
    };
  } else {
    watchBtn.onclick = function() {
      window.open('#', '_blank');
    };
  }
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
