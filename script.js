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

});

}

// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(!href || href==="#") return;

e.preventDefault();

const target=document.querySelector(href);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ======================================
// Active Navbar Link
// ======================================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ======================================
// Fade Animation
// ======================================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.2

}

);

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});

// ======================================
// Typing Animation
// ======================================

const textArray=[

"Python Developer",

"Web Developer",

"SQL Enthusiast",

"MCA Student"

];

let index=0;

let charIndex=0;

let currentText="";

let isDeleting=false;

const typing=document.querySelector(".hero-text h3");

function type(){

if(!typing) return;

currentText=textArray[index];

if(isDeleting){

typing.textContent=currentText.substring(0,charIndex--);

}
else{

typing.textContent=currentText.substring(0,charIndex++);

}

if(!isDeleting && charIndex===currentText.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

if(isDeleting && charIndex===0){

isDeleting=false;

index++;

if(index===textArray.length){

index=0;

}

}

setTimeout(type,isDeleting?50:100);

}

type();

// ======================================
// Counter Animation
// ======================================

const counters=document.querySelectorAll(".achievement-card h1");

const speed=200;

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=counter.innerText.replace(/\D/g,"");

let count=0;

const update=()=>{

const increment=target/speed;

if(count<target){

count+=increment;

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}
else{

counter.innerText=target;

}

}

update();

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ======================================
// Scroll To Top Button
// ======================================

const topButton=document.createElement("a");

topButton.href="#home";

topButton.className="top-btn";

topButton.innerHTML='<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.opacity="1";

topButton.style.visibility="visible";

}
else{

topButton.style.opacity="0";

topButton.style.visibility="hidden";

}

});

// ======================================
// Current Year in Footer
// ======================================

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Shaik Mahammed Asrar | All Rights Reserved`;

}

// ======================================
// Contact Form
// ======================================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

// ======================================
// Console Message
// ======================================

console.log("%cWelcome to Asrar's Portfolio 🚀",
"color:#2563EB;font-size:20px;font-weight:bold;");
