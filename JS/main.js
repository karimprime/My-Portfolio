//Nav-Bar

document.addEventListener('DOMContentLoaded', () => {
    const btnl = document.getElementById('btnl');
    const navLinks = document.getElementById('navLinks');

    // Function to toggle the navigation menu
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        btnl.classList.toggle('active');
    };

    // Event listener for btnl menu toggle
    btnl.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked (for better UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});



let btn = document.getElementById('btn');

window.onscroll = function () { // event like onclick
    if (scrollY >= 200) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    }
}
btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: 'smooth', // use for controll move of scroll
    })
}


// //slider 1

const sliderContainer = document.querySelector('.slider-container');
const cards = document.querySelectorAll('.card1');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSliderPosition() {
    const offset = (-currentIndex * 100) - 1;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
});

//slider 2

const sliderContainer1 = document.querySelector('.slider-container1');
const cards2 = document.querySelectorAll('.card2');
const prevBtn1 = document.querySelector('.prev-btn1');
const nextBtn1 = document.querySelector('.next-btn1');

let currentIndex1 = 0;

function updateSliderPosition1() {
    const offset = (-currentIndex1 * 100) - 1;
    sliderContainer1.style.transform = `translateX(${offset}%)`;
}

prevBtn1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 > 0) ? currentIndex1 - 1 : cards2.length - 1;
    updateSliderPosition1();
});

nextBtn1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 < cards2.length - 1) ? currentIndex1 + 1 : 0;
    updateSliderPosition1();
});




//Dark Mode

const header = document.querySelector('header');
const body = document.querySelector('body');

const nav = document.querySelector('.navbar');
const navl = document.querySelector('.nav-links');

const ld = document.getElementById('ld'); // Light mode toggle element
const dl = document.getElementById('dl'); // Dark mode toggle element

// Function to set color and toggle dark mode
function colors(color) {
    localStorage.setItem('color', color);
    header.style.background = color;

    if (color === '#222') { // Assuming #222 is your dark mode color
        body.classList.add('dark-mode');
        ld.classList.add('hide');
        dl.classList.remove('hide');
        body.style.transition = "1s";
        nav.style.transition = "1s";
        navl.style.transition = "1s";
    } else {
        body.classList.remove('dark-mode');
        dl.classList.add('hide');
        ld.classList.remove('hide');
        body.style.transition = "1s";
        nav.style.transition = "1s";
        navl.style.transition = "1s";
    }
}

// Check and apply stored color on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedColor = localStorage.getItem('color');

    if (storedColor) {
        header.style.background = storedColor;

        if (storedColor === '#222') {
            body.classList.add('dark-mode');
            ld.classList.add('hide');
            dl.classList.remove('hide');
        } else {
            body.classList.remove('dark-mode');
            dl.classList.add('hide');
            ld.classList.remove('hide');
        }
    }
});
