
// ==========================
// Typing Animation
// ==========================

var typed = new Typed(".typing", {
    strings: [
        "Java Full Stack Developer",
        "Spring Boot Developer",
        "React Developer",
        "Backend Developer",
        "Software Engineer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ==========================
// Navbar Active Link
// ==========================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });
});

// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

const hiddenElements = document.querySelectorAll(".card,.hero-left,.hero-right");

hiddenElements.forEach(el => observer.observe(el));

// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ==========================
// Greeting Based on Time
// ==========================

const greeting = document.createElement("div");

greeting.id = "greeting";

let hour = new Date().getHours();

if (hour < 12) {

    greeting.innerHTML = "☀️ Good Morning";

}
else if (hour < 17) {

    greeting.innerHTML = "🌤 Good Afternoon";

}
else {

    greeting.innerHTML = "🌙 Good Evening";

}

document.body.appendChild(greeting);

// ==========================
// Profile Image Hover Effect
// ==========================

const image = document.querySelector(".image-box");

if(image){

image.addEventListener("mousemove",()=>{

image.style.transform="scale(1.05) rotate(2deg)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1) rotate(0deg)";

});

}

// ==========================
// Card Hover Glow
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 35px cyan";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});

// ==========================
// Loading Animation
// ==========================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ==========================
// Console Message
// ==========================

console.log("Welcome to Gayatri Yadav Portfolio 🚀");
