
// Smooth fade-in animation
window.addEventListener("load", function () {
    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");

    if (heroText) {
        heroText.style.opacity = "0";
        heroText.style.transform = "translateX(-50px)";
    }

    if (heroImage) {
        heroImage.style.opacity = "0";
        heroImage.style.transform = "translateX(50px)";
    }

    setTimeout(() => {
        if (heroText) {
            heroText.style.transition = "all 1s ease";
            heroText.style.opacity = "1";
            heroText.style.transform = "translateX(0)";
        }

        if (heroImage) {
            heroImage.style.transition = "all 1s ease";
            heroImage.style.opacity = "1";
            heroImage.style.transform = "translateX(0)";
        }
    }, 300);
});


// Active Navigation Link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#38bdf8";
        link.style.fontWeight = "600";
    }
});


// Smooth Scroll (for same-page links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Scroll-to-top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "45px";
topBtn.style.height = "45px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
