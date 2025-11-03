const menuIcon = document.getElementById('menu');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Automatically hide nav on link click (mobile only)
const links = navLinks.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".namet", {
      strings: ["KIPKURUI ", "LANGAT ", "LABAN "],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const progressLines = document.querySelectorAll(".progress-line span");
    progressLines.forEach((line) => {
        line.style.transform = "scaleX(1)";
    });

    const skillTexts = document.querySelectorAll(".technical-bar .bar .info span");
    skillTexts.forEach((text) => {
        text.style.opacity = 1;
    });

    const radialPercents = document.querySelectorAll(".percentage");
    radialPercents.forEach((el) => {
        el.style.opacity = 1;
    });

    const radialLabels = document.querySelectorAll(".radial-bar .text");
    radialLabels.forEach((el) => {
        el.style.opacity = 1;
    });
});


document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        message: this.message.value
    };

    const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    const result = await response.text();
    alert(result);
});

const cards = document.querySelectorAll('.project-card');
let visibleCards = 6; // Show first 6 initially

cards.forEach((card, i) => {
    if (i >= visibleCards) card.classList.add('hidden');
});

document.getElementById('loadMoreBtn').addEventListener('click', () => {
    visibleCards += 3; // Show 3 more each time
    cards.forEach((card, i) => {
        if (i < visibleCards) card.classList.remove('hidden');
    });

    if (visibleCards >= cards.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
});
