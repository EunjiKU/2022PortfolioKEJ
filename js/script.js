// 로딩창
const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.display = "none";
    }, 800);
});


// mouse cursor
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const bottomWrap = document.querySelector('.bottom_wrap');
const swiperLists = document.querySelectorAll('.swiper-slide');
const btns = document.querySelectorAll('.btn');

document.addEventListener('mousemove', e => {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

bottomWrap.addEventListener('mousemove', () => {
    cursor.classList.add('about_cursor1');
    cursor2.classList.add('about_cursor2');
});
bottomWrap.addEventListener('mouseout', () => {
    cursor.classList.remove('about_cursor1');
    cursor2.classList.remove('about_cursor2');
});

btns.forEach((btn) => {
    btn.addEventListener('mousemove', () => {
        cursor.classList.add('btn_cursor1');
        cursor2.classList.add('btn_cursor2');
    });
    btn.addEventListener('mouseout', () => {
        cursor.classList.remove('btn_cursor1');
        cursor2.classList.remove('btn_cursor2');
    });
});

swiperLists.forEach(list => {
    list.addEventListener('mousemove', () => {
        cursor.classList.add('swiper_cursor1');
    });
    list.addEventListener('mouseout', () => {
        cursor.classList.remove('swiper_cursor1');
    });
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
const blackBox = document.querySelector('.black_box');

const contactSec = document.querySelector('.contact_sec');


window.addEventListener('scroll', () => {
    let window_height = window.innerHeight;
    let window_scroll = window.scrollY;
    

    // header - circle scroll
    circle.style.transform = "rotate(" + window_scroll / 4 + "deg)";


    // about section2 - img
    let about_position = aboutSec.getBoundingClientRect().top;
    
    if(about_position < 400){
        peopleImgWrap.classList.add('active');
    }else {
        peopleImgWrap.classList.remove('active');
    }
    

    // about section2 - blackBox
    let bottomWrap_position = bottomWrap.getBoundingClientRect().top;
    let bottomWrap_offset = bottomWrap.offsetTop;
    
    if(bottomWrap_position < 700){
        blackBox.style.height = (window_scroll + window_height - bottomWrap_offset) - 100 + "px";
    }else {
        blackBox.style.height = 0;
    }
        // if(bottomWrap_position < 500){
        //     blackBox.style.height = Math.abs(about_position) * 2 + "px";
        // }

    if(bottomWrap_position < 100){
        peopleImgWrap.classList.add('active2');
    }else {
        peopleImgWrap.classList.remove('active2');
    }


    // proitro section4
    const prointroSec = document.querySelector('.prointro_sec');
    const prointroList = document.querySelector('.prointro_list');

    let prointro_position = prointroSec.getBoundingClientRect().top;

    if(prointro_position < 400){
        prointroList.style.left = (prointro_position + 200)/4 + "%";
    }

    // contact section5 - index
    const projeSec = document.querySelector('.proje_sec1');
    const projeSec2 = document.querySelector('.proje_sec2');
    const projects = document.querySelectorAll('.project');
    const index = document.querySelector('.index');
    const siv = document.querySelector('.siv');
    const indexLists = document.querySelectorAll('.index li');

    let proje_offset = projeSec.offsetTop;
    let proje_bottom = projeSec.getBoundingClientRect().bottom;
    let proje2_offset = projeSec2.offsetTop;

    if(window_scroll + window_height > proje_offset + 200 && proje_bottom - window_height > 0){
        index.classList.add('active');
    }else {
        index.classList.remove('active');
    }

    projects.forEach((pro, idx) => {
        if(pro.offsetTop + 100 < window_scroll + window_height){
            let idx = pro.getAttribute('data-num');

            indexLists.forEach(list => {
                list.classList.remove('active');
            });
            indexLists[idx].classList.add('active');
        }
    });


    // contact section7 - black gradation
    let contact_position = contactSec.getBoundingClientRect().top;
    let contact_offset = contactSec.offsetTop;
    
    if(window_scroll + window_height > contact_offset){
        contactSec.style.height = (window_scroll + window_height) - contact_offset + "px";
    }


    // svg
    const skillSec = document.querySelector('.skill_sec');
    const path2 = document.querySelector('.path2');
    const path3 = document.querySelector('.path3');
    const path4 = document.querySelector('.path4');
    const path5 = document.querySelector('.path5');
    const path6 = document.querySelector('.path6');

    const path2Length = path2.getTotalLength();
    const path3Length = path3.getTotalLength();
    const path4Length = path4.getTotalLength();
    const path5Length = path5.getTotalLength();
    const path6Length = path6.getTotalLength();

        path2.style.strokeDasharray  = path2Length;
        path2.style.strokeDashoffset  = path2Length;

        path3.style.strokeDasharray  = path3Length;
        path3.style.strokeDashoffset  = path3Length;

        path4.style.strokeDasharray  = path4Length;
        path4.style.strokeDashoffset  = path4Length;

        path5.style.strokeDasharray  = path5Length;
        path5.style.strokeDashoffset  = path5Length;

        path6.style.strokeDasharray  = path6Length;
        path6.style.strokeDashoffset  = path6Length;

        function calcDashoffset(scrollY, element, length) {
            const ratio = (scrollY - element.offsetTop) / element.offsetHeight
            const value = length - (length * ratio)
            return value < 0 ? 0 : value > length ? length : value
        }

        const scrollY = window.scrollY + (window.innerHeight / 2);

        path2.style.strokeDashoffset = calcDashoffset(scrollY, aboutSec, path2Length); 
        path3.style.strokeDashoffset = calcDashoffset(scrollY, skillSec, path3Length); 
        path4.style.strokeDashoffset = calcDashoffset(scrollY, prointroSec, path4Length);
        path5.style.strokeDashoffset = calcDashoffset(scrollY, projeSec2, path5Length);
        path6.style.strokeDashoffset = calcDashoffset(scrollY, contactSec, path6Length);

        console.log(path4);
});


// proje section6 - modal
const bodys = document.querySelector('body');
const modals = document.querySelectorAll('.modal');
const modalWrap = document.querySelector('.modal_wrap');
const blackWrap = document.querySelector('.black_wrap');

modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        e.preventDefault();

        modalWrap.style.display = "block";
        blackWrap.style.display = "block";

        bodys.classList.add('not_scroll');

        let modal_data = modal.getAttribute('data-img');
        let modal_href = modal.getAttribute('href')

        if(modal_data == 'jpg'){
            modalWrap.innerHTML = `<img src="${modal_href}" alt="">`;
        }else{
            modalWrap.innerHTML = `<video src="${modal_href}" autoplay loop muted poster="./img/loading.gif"></video>`
        }
    });
});

blackWrap.addEventListener('click', () => {
    blackWrap.style.display = "none";
    modalWrap.style.display = "none";

    bodys.classList.remove('not_scroll');

});


// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: { //반응형 조건 속성
        769: { //769 이상일 경우
            slidesPerView: 4,
        },
        1025: { //1025 이상일 경우
            slidesPerView: 7,
        },
    }
});


// AOS
AOS.init();