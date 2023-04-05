document.querySelector('.buscadorElementos').addEventListener('click', function() {
  this.querySelector('input').focus();
});


const carousel = document.querySelector('.slider');
const slider = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');

const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');
let direction;

// first move to take last element to invisible first
slider.prepend(slider.lastElementChild);

next.addEventListener('click', function() {
  direction = -1;
  slider.style.transform = 'translate(-25%)';  
});

prev.addEventListener('click', function() { 
  direction = 1;
  slider.style.transform = 'translate(25%)';  
});

slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all .6s ease';
  })
}, false);
