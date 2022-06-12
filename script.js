// mouse cursor
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', e => {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


// header - circle rotate
const circle = document.querySelector('.circle');
const text = document.querySelector('.circle p');

text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style="transform:rotate(${i * 22.5}deg)">${char}</span>`
).join("");


// main section1 - code cursor
const mainSec = document.querySelector('.main_sec');
const cursorCode = document.querySelector('.code_cursor');

mainSec.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursorCode.style.left = x + "px";
    cursorCode.style.top = y + "px";
});


// scroll
const peopleImgWrap = document.querySelector('.peopleimg_wrap');

const aboutSec = document.querySelector('.about_sec');
const bottomWrap = document.querySelector('.bottom_wrap');
const blackBox = document.querySelector('.black_box');


window.addEventListener('scroll', () => {
    let about_position = aboutSec.getBoundingClientRect().top;
    let bottomWrap_position = bottomWrap.getBoundingClientRect().top;
    // let about_offset = aboutSec.offsetTop;
    let window_scroll = window.scrollY;

    // header - circle scroll
    circle.style.transform = "rotate(" + window_scroll / 4 + "deg)";

    // about section2 - img
    if(about_position < 400){
        peopleImgWrap.classList.add('active');
    }else {
        peopleImgWrap.classList.remove('active');
    }


    // about section2 - blackBox
    if(bottomWrap_position < 500){
        blackBox.style.height = Math.abs(about_position) * 2 + "px";
    }

    if(bottomWrap_position < 0){
        peopleImgWrap.style.display = "none";
    }else{
        peopleImgWrap.style.display = "block";
    }

    // proitro section4 - 
    const prointroSec = document.querySelector('.prointro_sec');
    const prointroList = document.querySelector('.prointro_list');

    let window_height = window.innerHeight;
    let prointro_position = prointroSec.getBoundingClientRect().top;

    if(prointro_position < 400){
        prointroList.style.left = (prointro_position + 200)/4 + "%";
    }
    console.log("--------");
    console.log("window_scroll : " + window_scroll);
    console.log(prointro_position);
    console.log("window_height : " + window_height);
});


// 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    },
});