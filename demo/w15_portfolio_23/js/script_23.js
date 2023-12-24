

const navbar = document.querySelector('.nav');
console.log(navbar);
window.addEventListener('scroll', function () {
  if (this.window.scrollY > 100) {
    navbar.classList.add('navbar-fixed');
  }
  else {
    navbar.classList.remove('navbar-fixed');
  }
})

const navBtn = document.querySelector('.nav-btn');
const sidebar = document.querySelector('#sidebar');
const closeBtn = document.querySelector('#close-btn');

navBtn.addEventListener('click', function () {
  console.log("ck");

  sidebar.classList.add('show-sidebar');
  navbar.classList.remove('navbar-fixed');


});


closeBtn.addEventListener('click', function () {
  console.log("closeSideBar");
  sidebar.classList.remove('show-sidebar');

});

const date = document.querySelector('#date');
date.innerHTML=(new Date()).getFullYear();
