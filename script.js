// ======================================
// Sticky Navbar
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.12)";

    }
    else{

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";

    }

});

// ======================================
// Mobile Menu
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

