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


// script.js
const sliderContainer = document.querySelector('.slider-container');
const cards = document.querySelectorAll('.card1');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSliderPosition() {
    const offset = (-currentIndex * 100)-1;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 2;
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 2) ? currentIndex + 1 : 0;
    updateSliderPosition();
});

