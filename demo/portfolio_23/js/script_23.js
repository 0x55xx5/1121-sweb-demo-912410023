



const navBtn = document.querySelector('.nav-btn');
const sidebar = document.querySelector('#sidebar');
const closeBtn = document.querySelector('#close-btn');

navBtn.addEventListener('click', function () {
  console.log("ck");
  sidebar.classList.add('show-sidebar');

});


closeBtn.addEventListener('click', function () {
  console.log("closeSideBar");
  sidebar.classList.remove('show-sidebar');

});
