const openModalButtons = document.querySelectorAll('.modal__open');
const closeModalButtons = document.querySelectorAll('.modal__close');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((openButton) => {
  openButton.onclick = () => {
    const modal = openButton.getAttribute('data-modal');
    document.getElementById(modal).style.transform = 'translate(-50%, -50%) scale(1)';
    overlay.classList.add('active');
  };
});

closeModalButtons.forEach((closeButton) => {
  closeButton.onclick = () => {
    const modal = (closeButton.closest('.modal').style.transform =
      'translate(-50%, -50%) scale(0)');
    overlay.classList.remove('active');
  };
});

const burger = document.getElementById('burger');
const nav = document.getElementById('header__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger__active');
  nav.classList.toggle('header__nav-visible');
});

const galleryImages = document.querySelectorAll('.gallery__image');
const galleryButton = document.querySelector('.gallery__button');
let currentItem = 4;

galleryButton.addEventListener('click', () => {
  for (let i = currentItem; i < currentItem + 4; i++) {
    galleryImages[i].style.display = 'block';
    galleryImages[i].style.transform = 'scale(1)';
  }

  currentItem += 4;

  if (currentItem >= galleryImages.length) {
    galleryButton.style.display = 'none';
  }
});

const anchors = document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
    burger.classList.remove('burger__active');
    nav.classList.remove('header__nav-visible');
  });
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5],
};

let observer = new IntersectionObserver(onEntry, options);
let heroContent = document.querySelector('.hero__content');
let heroImage = document.querySelector('.hero__image');

let advantagesContent = document.querySelectorAll('.advantages__content');
let advantagesImage = document.querySelectorAll('.advantages__image');

let servicesItems = document.querySelectorAll('.services__item');

for (let elem of advantagesContent) {
  observer.observe(elem);
}

for (let elem of advantagesImage) {
  observer.observe(elem);
}

for (let elem of servicesItems) {
  observer.observe(elem);
}

for (let elem of galleryImages) {
  observer.observe(elem);
}

observer.observe(heroContent);
observer.observe(heroImage);
