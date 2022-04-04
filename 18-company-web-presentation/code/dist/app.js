/* -------------------- Set date in footer--------------------*/

const date = document.getElementById('year');
date.innerHTML = new Date().getFullYear();

// function for transforming hamburger menu button - not good solution

function myFunction(x) {
  x.classList.toggle('change');
}

/*const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', (x) => {
  hamburger.forEach(x.classList.toggle('change'));
});}*/

// function for opening nav list on small screens

const hamburger = document.querySelector('.hamburger');
const navList = document.getElementsByTagName('li');

const loop = hamburger.addEventListener('click', () => {
  for (let i = 0; i < navList.length; i++) {
    navList[i].classList.toggle('li');
  }
});

// function for Sustainability section buttons
const sectionBackBtn = document.getElementById('#sustain-col-btn-back');
const sectionForwardBtn = document.getElementById('#sustain-col-btn-forward');
const sectionSlideBlock = document.getElementsByClassName(
  '.sustainability-columns'
);

sectionForwardBtn.addEventListener(click, () => {
  sectionSlideBlock.style.transform = 'translateX(-215px)';
});
