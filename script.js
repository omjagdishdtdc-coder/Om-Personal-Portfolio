// Welcome Message
window.addEventListener("load", function() {
    console.log("Welcome to Om's Portfolio Website!");
});

// Contact Button
function showMessage() {
    alert("Hello! Thank you for visiting my portfolio.");
}

// Navigation Active Section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Display Current Year
document.getElementById("year").textContent =
    new Date().getFullYear();
