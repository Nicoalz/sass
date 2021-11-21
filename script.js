var nav_desktop = document.getElementById('nav_desktop');
var nav_mobile = document.getElementById('nav_mobile');

var burger = document.getElementById("burger");
var burger_overlay = document.getElementById("burger_overlay");

nav_mobile.innerHTML = nav_desktop.innerHTML;

burger.addEventListener('click', open =>{
    burger_overlay.style.display = "block";
    nav_mobile.style.transform = "translateY(0)";
})

burger_overlay.addEventListener('click', close =>{
    burger_overlay.style.display = "none";
    nav_mobile.style.transform = "translateY(-101%)";
})