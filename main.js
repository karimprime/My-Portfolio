let btn = document.getElementById('btn');

window.onscroll = function () { // event like onclick
    if (scrollY >= 200) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    }
}
