// function for transforming hamburger menu button

function myFunction(x) {
  x.classList.toggle('change');
}

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
