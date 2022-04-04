/* -------------------- Set year in footer --------------------*/

const date = document.getElementById('year');
date.innerHTML = new Date().getFullYear();

/* -------------------- Hamburger menu button --------------------*/

// function for transforming hamburger menu button

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

/* -------------------- WORK IN PROGRESS... --------------------*/

// function for Sustainability section buttons

/*const sectionBackBtn = document.getElementById('#sustain-col-btn-back');
const sectionForwardBtn = document.getElementById('#sustain-col-btn-forward');
const sectionSlideBlock = document.getElementsByClassName(
  '.sustainability-columns'
);

sectionForwardBtn.addEventListener(click, () => {
  sectionSlideBlock.style.transform = 'translateX(-215px)';
});*/
