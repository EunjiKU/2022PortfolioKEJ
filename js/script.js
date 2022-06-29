// 로딩창
const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.display = "none";
    }, 800);

    AOS.init();
    mousecursorFunc();
    circleFunc();
});


// mouse cursor
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const bottomWrap = document.querySelector('.bottom_wrap');
const swiperLists = document.querySelectorAll('.swiper-slide');
const btns = document.querySelectorAll('.btn');

function mousecursorFunc (){
    document.addEventListener('mousemove', e => {
        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });        
};

bottomWrap.addEventListener('mouseover', () => {
    cursor.classList.add('about_cursor1');
    cursor2.classList.add('about_cursor2');
});
bottomWrap.addEventListener('mouseout', () => {
    cursor.classList.remove('about_cursor1');
    cursor2.classList.remove('about_cursor2');
});

btns.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        cursor.classList.add('btn_cursor1');
        cursor2.classList.add('btn_cursor2');
    });
    btn.addEventListener('mouseout', () => {
        cursor.classList.remove('btn_cursor1');
        cursor2.classList.remove('btn_cursor2');
    });
});

swiperLists.forEach(list => {
    list.addEventListener('mouseover', () => {
        cursor.classList.add('swiper_cursor1');
    });
    list.addEventListener('mouseout', () => {
        cursor.classList.remove('swiper_cursor1');
    });
});


// header - circle rotate
const circle = document.querySelector('.circle');
const arrowImg = document.querySelector('.arrowImg img')
const text = document.querySelector('.circle p');

function circleFunc(){
    text.innerHTML = text.innerText.split("").map(
        (char, i) =>
            `<span style="transform:rotate(${i * 17}deg)">${char}</span>`
    ).join("");    
}

// header - circle click window scroll top
circle.addEventListener('click',function(){
    scrollToTop();
});



function scrollToTop(){
    let scrollInterval = setInterval(function(){
        if(window.scrollY != 0){
            window.scrollBy(0,-200);
        }else{
            clearInterval(scrollInterval);
        }
    },15);
}


// All scroll 
const mainSec = document.querySelector('.main_sec');
const peopleImgWrap = document.querySelector('.peopleimg_wrap');

const aboutSec = document.querySelector('.about_sec');
const blackBox = document.querySelector('.black_box');

const skillSec = document.querySelector('.skill_sec');

const prointroSec = document.querySelector('.prointro_sec');
const prointroList = document.querySelector('.prointro_list');

const projeSec = document.querySelector('.proje_sec1');
const projects = document.querySelectorAll('.project');
const index = document.querySelector('.index');
const indexLists = document.querySelectorAll('.index li');
const siv = document.querySelector('.siv');

const projeSec2 = document.querySelector('.proje_sec2');

const contactSec = document.querySelector('.contact_sec');

// svg
const path1 = document.querySelector('.path1');
const path2 = document.querySelector('.path2');
const path3 = document.querySelector('.path3');
const path4 = document.querySelector('.path4');
const path5 = document.querySelector('.path5');

const path1Length = path1.getTotalLength();
const path2Length = path2.getTotalLength();
const path3Length = path3.getTotalLength();
const path4Length = path4.getTotalLength();
const path5Length = path5.getTotalLength();

path1.style.strokeDasharray  = path1Length;
path1.style.strokeDashoffset =  path1Length;

path2.style.strokeDasharray  = path2Length;
path2.style.strokeDashoffset  = path2Length;

path3.style.strokeDasharray  = path3Length;
path3.style.strokeDashoffset  = path3Length;

path4.style.strokeDasharray  = path4Length;
path4.style.strokeDashoffset  = path4Length;

path5.style.strokeDasharray  = path5Length;
path5.style.strokeDashoffset  = path5Length;


// 
window.addEventListener('scroll', () => {
    let window_height = window.innerHeight;
    let window_scroll = window.scrollY;

    // header - circle scroll top
    if(document.body.scrollHeight < window_scroll + window_height + 100){
        arrowImg.classList.add('active');
    }else{
        arrowImg.classList.remove('active');
    }


    // header - circle scroll
    circle.style.transform = "rotate(" + window_scroll / 4 + "deg)";


    // about section2 - img
    let about_position = aboutSec.getBoundingClientRect().top;

    if (about_position < 400) {
        peopleImgWrap.classList.add('active');
    } else {
        peopleImgWrap.classList.remove('active');
    }


    // about section2 - blackBox
    // top 현재 위치 기준높이
    let bottomWrap_position = bottomWrap.getBoundingClientRect().top;
    let bottomWrapHeight = bottomWrap.getBoundingClientRect().height;
    // offset 전체 높이 기준 위치
    let bottomWrap_offset = bottomWrap.offsetTop;

    if (bottomWrap_position < bottomWrap_offset - bottomWrapHeight) {
        blackBox.style.height = (window_scroll + window_height - bottomWrap_offset) - 100 + "px";
    } else {
        blackBox.style.height = 0;
    }

    if (bottomWrap_position < 100) {
        peopleImgWrap.classList.add('active2');
    } else {
        peopleImgWrap.classList.remove('active2');
    }


    // proitro section4
    let prointro_position = prointroSec.getBoundingClientRect().top;

    if (prointro_position < 400) {
        prointroList.style.left = (prointro_position + 200) / 4 + "%";
    }


    // contact section5 - index
    let proje_offset = projeSec.offsetTop;
    let proje_bottom = projeSec.getBoundingClientRect().bottom;
    let proje2_offset = projeSec2.offsetTop;

    if (window_scroll + window_height > proje_offset + 200 && proje_bottom - window_height > 0) {
        index.classList.add('active');
    } else {
        index.classList.remove('active');
    }

    projects.forEach((pro, idx) => {
        if (pro.offsetTop + 100 < window_scroll + window_height) {
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

    if (window_scroll + window_height > contact_offset) {
        contactSec.style.height = (window_scroll + window_height) - contact_offset + "px";
    }

    
    // svg
    const svgBox1 = document.querySelector('.svg_box1');
    const skillText = document.querySelector('.skill_text');
    const svgBox2 = document.querySelector('.svg_box2');

    function calcDashoffset(scrollY, element, length) {
        const ratio = (scrollY - element.offsetTop) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    const scrollY = window.scrollY + (window.innerHeight / 7);
    const scrollY2 = window.scrollY + (window.innerHeight / 2);

    path1.style.strokeDashoffset = calcDashoffset(scrollY, mainSec, path1Length); 
    path2.style.strokeDashoffset = calcDashoffset(scrollY2, svgBox1, path2Length); 
    path3.style.strokeDashoffset = calcDashoffset(scrollY2, skillSec, path3Length); 
    path4.style.strokeDashoffset = calcDashoffset(scrollY2, prointroSec, path4Length);
    path5.style.strokeDashoffset = calcDashoffset(scrollY2, svgBox2, path5Length);
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

        if (modal_data == 'jpg') {
            modalWrap.innerHTML = `<img src="${modal_href}" alt="">`;
        } else {
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
    spaceBetween: 10,
    loop: true,
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1025: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
    }
});


// 
const bottomTit = document.querySelector('.bottom_tit');

function mobiletitFunc() {
    if (window.innerWidth < 769) {
        bottomTit.innerHTML = '<h3 class="bottom_tit">저의 커리어를</br>보여드릴게요.</h3>'
    } else {
        bottomTit.innerHTML = '<h3 class="bottom_tit">저의 커리어를 보여드릴게요.</h3>'
    }
}

mobiletitFunc();
window.addEventListener('resize', () => {
    mobiletitFunc();
});