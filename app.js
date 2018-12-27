const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.images img');
const opacity = 0.5;

// set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
  // Reset the opacity
  imgs.forEach(img => img.style.opacity = 1);

  // Setting the current Images
  current.src = e.target.src;

  // add fading class
  current.classList.add('fade-in');

  // Remove fade-in class after 100ms
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change the opacity to of the clicked image
  e.target.style.opacity = opacity;
}