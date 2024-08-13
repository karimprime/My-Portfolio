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
