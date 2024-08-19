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
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
    updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 2) ? currentIndex + 1 : 0;
    updateSliderPosition();
});





const sliderContainer1 = document.querySelector('.slider-container1');
const cards2 = document.querySelectorAll('.card2');
const prevBtn1 = document.querySelector('.prev-btn1');
const nextBtn1 = document.querySelector('.next-btn1');

let currentIndex1 = 0;

function updateSliderPosition1() {
    const offset = (-currentIndex1 * 100)-1;
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


let blight = document.getElementById('blight');
let bdark = document.getElementById('bdark');



let nav = document.getElementById('header');

let cardw = document.getElementById('cardw');
let hw = document.getElementById('hw');
let pw = document.getElementById('pw');

let cardf = document.getElementById('cardf');
let hf = document.getElementById('hf');
let pf = document.getElementById('pf');

let carde = document.getElementById('carde');
let ae = document.getElementById('ae');
let he = document.getElementById('he');
let pe = document.getElementById('pe');

let cardp = document.getElementById('cardp');
let ap = document.getElementById('ap');
let hp = document.getElementById('hp');
let pp = document.getElementById('pp');

let cardr = document.getElementById('cardr');
let pr = document.getElementById('pr');

let cardt = document.getElementById('cardt');
let pt = document.getElementById('pt');

let cardy = document.getElementById('cardy');
let py = document.getElementById('py');

let cardd = document.getElementById('cardd');
let pd = document.getElementById('pd');

let cardfy = document.getElementById('cardfy');
let pfy = document.getElementById('pfy');

let cardsh = document.getElementById('cardsh');
let psh = document.getElementById('psh');

let cardx = document.getElementById('cardx');
let px = document.getElementById('px');

let cardo = document.getElementById('cardo');
let po = document.getElementById('po');

let cardu = document.getElementById('cardu');
let pu = document.getElementById('pu');

let cardso = document.getElementById('cardso');
let pso = document.getElementById('pso');


blight.onclick = function LD() {

    this.classList.add('hide');
    bdark.classList.remove('hide');

    document.body.style.background = '#f0f0f0';

    blight.style.background= '#f0f0f0';
    nav.style.background = '#f0f0f0';

    cardw.style.background ='#f0f0f0';
    hw.style.color ='#222';
    pw.style.color ='#222';

    cardf.style.background ='#f0f0f0';
    hf.style.color ='#222';
    pf.style.color ='#222';

    carde.style.background ='#f0f0f0';
    ae.style.color ='#222';
    he.style.color ='#222';
    pe.style.color ='#222';

    cardp.style.background ='#f0f0f0';
    ap.style.color ='#222';
    hp.style.color ='#222';
    pp.style.color ='#222';

    cardr.style.background ='#f0f0f0';
    cardr.style.borderColor ='#f0f0f0';
    pr.style.color ='#222';

    cardt.style.background ='#f0f0f0';
    cardt.style.borderColor ='#f0f0f0';
    pt.style.color ='#222';

    cardy.style.background ='#f0f0f0';
    cardy.style.borderColor ='#f0f0f0';
    py.style.color ='#222';

    cardd.style.background ='#f0f0f0';
    cardd.style.borderColor ='#f0f0f0';
    pd.style.color ='#222';

    cardfy.style.background ='#f0f0f0';
    cardfy.style.borderColor ='#f0f0f0';
    pfy.style.color ='#222';

    cardsh.style.background ='#f0f0f0';
    cardsh.style.borderColor ='#f0f0f0';
    psh.style.color ='#222';

    cardx.style.background ='#f0f0f0';
    cardx.style.borderColor ='#f0f0f0';
    px.style.color ='#222';

    cardo.style.background ='#f0f0f0';
    cardo.style.borderColor ='#f0f0f0';
    po.style.color ='#222';

    cardu.style.background ='#f0f0f0';
    cardu.style.borderColor ='#f0f0f0';
    pu.style.color ='#222';

    cardso.style.background ='#f0f0f0';
    cardso.style.borderColor ='#f0f0f0';
    pso.style.color ='#222';

}

bdark.onclick = function DL() {


    this.classList.add('hide');
    blight.classList.remove('hide');

    document.body.style.background = '#222';

    blight.style.background= '#222';
    nav.style.background = '#222';

    cardw.style.background ='#222';
    hw.style.color ='#f0f0f0';
    pw.style.color ='#f0f0f0';

    cardf.style.background ='#222';
    hf.style.color ='#f0f0f0';
    pf.style.color ='#f0f0f0';

    carde.style.background ='#222';
    ae.style.color ='#f0f0f0';
    he.style.color ='#f0f0f0';
    pe.style.color ='#f0f0f0';

    cardp.style.background ='#222';
    ap.style.color ='#f0f0f0';
    hp.style.color ='#f0f0f0';
    pp.style.color ='#f0f0f0';

    cardr.style.background ='#222';
    cardr.style.borderColor ='#222';
    pr.style.color ='#f0f0f0';

    cardt.style.background ='#222';
    cardt.style.borderColor ='#222';
    pt.style.color ='#f0f0f0';

    cardy.style.background ='#222';
    cardy.style.borderColor ='#222';
    py.style.color ='#f0f0f0';

    cardd.style.background ='#222';
    cardd.style.borderColor ='#222';
    pd.style.color ='#f0f0f0';

    cardfy.style.background ='#222';
    cardfy.style.borderColor ='#222';
    pfy.style.color ='#f0f0f0';

    cardsh.style.background ='#222';
    cardsh.style.borderColor ='#222';
    psh.style.color ='#f0f0f0';

    cardx.style.background ='#222';
    cardx.style.borderColor ='#222';
    px.style.color ='#f0f0f0';

    cardo.style.background ='#222';
    cardo.style.borderColor ='#222';
    po.style.color ='#f0f0f0';

    cardu.style.background ='#222';
    cardu.style.borderColor ='#222';
    pu.style.color ='#f0f0f0';

    cardso.style.background ='#222';
    cardso.style.borderColor ='#222';
    pso.style.color ='#f0f0f0';

}










