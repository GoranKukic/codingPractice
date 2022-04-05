/* -------------------- Set year in footer --------------------*/

const date = document.getElementById('year');
date.innerHTML = new Date().getFullYear();

/* -------------------- Hamburger menu button --------------------*/

// function for hamburger menu button animation

const hamburgerAnimation = document.querySelectorAll('.hamburger');
hamburgerAnimation.forEach((bar) => {
  bar.addEventListener('click', (event) => {
    bar.classList.toggle('change');
  });
});

// function for opening nav list on small screens

const hamburgerMenuDrop = document.querySelector('.hamburger');
const navList = document.getElementsByTagName('li');

const loop = hamburgerMenuDrop.addEventListener('click', () => {
  for (let i = 0; i < navList.length; i++) {
    navList[i].classList.toggle('li');
  }
});

// hiding nav list on small screens after click

// WORK IN PROGRESS...

/* -------------------- News section buttons --------------------*/

const newsBackBtn = document.getElementById('news-btn-back');
const newsForwardBtn = document.getElementById('news-btn-forward');
const newsArticleWrapper = document.getElementById('news-article-wrapper');

let newsInitial = 0;
let newsAmount = 450;
let frameWidth = window.innerWidth; // returns number that represents window viewport width in pixels
//console.log(frameWidth);

if (frameWidth <= 520) {
  newsForwardBtn.addEventListener('click', () => {
    newsAmount = 288;
    newsInitial -= newsAmount;
    if (newsInitial <= -865) {
      newsInitial = 0;
    }
    newsArticleWrapper.style.transform = 'translateX(' + newsInitial + 'px)';
    newsArticleWrapper.style.transition = '1.5s';
  });
  newsBackBtn.addEventListener('click', () => {
    newsInitial += 288;
    if (newsInitial > 1) {
      newsInitial = 0;
    }
    newsArticleWrapper.style.transform = 'translateX(' + newsInitial + 'px)';
  });
} else {
  newsForwardBtn.addEventListener('click', () => {
    newsInitial -= newsAmount;

    if (newsInitial <= -1351) {
      newsInitial = 0;
    }

    newsArticleWrapper.style.transform = 'translateX(' + newsInitial + 'px)';
    newsArticleWrapper.style.transition = '1.5s';
  });

  newsBackBtn.addEventListener('click', () => {
    newsInitial += 450;
    if (newsInitial > 1) {
      newsInitial = 0;
    }
    newsArticleWrapper.style.transform = 'translateX(' + newsInitial + 'px)';
  });
}

/* -------------------- Sustainability section buttons --------------------*/

const sectionBackBtn = document.getElementById('sustain-col-btn-back');
const sectionForwardBtn = document.getElementById('sustain-col-btn-forward');
const sectionSlideBlock = document.getElementById('sustain-col');

let sustainAmount = 250;
let sustainInitial = 0;

sectionForwardBtn.addEventListener('click', () => {
  sustainInitial -= sustainAmount;
  if (sustainInitial < -1000) {
    sustainInitial = 0;
  }
  sectionSlideBlock.style.transform = 'translateX(' + sustainInitial + 'px)';
  sectionSlideBlock.style.transition = '1.5s';
});

sectionBackBtn.addEventListener('click', () => {
  sustainInitial += 230;
  if (sustainInitial > 1) {
    sustainInitial = 0;
  }
  sectionSlideBlock.style.transform = 'translateX(' + sustainInitial + 'px)';
  sectionSlideBlock.style.transition = '1.5s';
});
