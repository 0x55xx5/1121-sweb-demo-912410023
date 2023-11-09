const ss = document.getElementById('section-p2-1')
const navbar = document.querySelector('#mid1_nav')
console.log(navbar);
//add fixed class to navbar
/*
window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});*/
/*
document.addEventListener("click", function(){
    
    if (ss!=null) {
        navbar.classList.add('navbar-fixed');
       
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});*/
function test1(){
    console.log("add");
    const navbar = document.querySelector('#mid1_nav')
    navbar.classList.add('navbar-fixed');
}
function test2(){
    console.log("rm");
    const navbar = document.querySelector('#mid1_nav')
    navbar.classList.remove('navbar-fixed');
}