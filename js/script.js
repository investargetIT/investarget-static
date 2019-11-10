// 根据时间展示不同banner背景大图
const currentDate = new Date();
const hours = currentDate.getHours();
const coverBanner = document.getElementById('cover-banner');
let backgroundImage = 'url(/img/photo-1509189692239-6c2bb03eac8a.jpg)';

if (hours >= 17) {
  backgroundImage = 'url(/img/denys-nevozhai-D8iZPlX-2fs-unsplash.jpg)';
  const navLinks = document.getElementsByClassName('nav-link');
  for (let index = 0; index < navLinks.length; index++) {
    const element = navLinks[index];
    element.classList.add('nav-link-white');
    element.onmouseover = function() {
      element.style.color = 'white';
    }
  }
}
coverBanner.style.backgroundImage = backgroundImage;

function handleArrowIconClicked() {
  const element = document.getElementById('basic-info');
  element.scrollIntoView({ behavior: 'smooth' });
}

const nav = document.getElementById('nav-bar');
window.onscroll = function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop >= window.innerHeight) {
    nav.classList.add('header-fixed');
  } else {
    nav.classList.remove('header-fixed');
  }
}
