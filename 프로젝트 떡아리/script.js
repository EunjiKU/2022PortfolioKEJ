// bxslider
$('.bxslider').bxSlider({
    auto: true,
    pause: 3000,
    controls: false,
    pager: true,
});
$('.bx-promoSlider').bxSlider({
    auto: true,
    pause: 3000,
    controls: false,
    pager: false,
});


// 로딩창
const loading = document.querySelector('#loading');

window.addEventListener("load", () => {
    setTimeout(() => {
        loading.classList.add('active');
    }, 100);
});


// header
const openBtn = document.querySelector('.openBtn');
const hnav = document.querySelector('#hnav');
const closeBtn = document.querySelector('.closeBtn');
const blackWrap = document.querySelector('#blackWrap');
const bodys = document.querySelector('body');

openBtn.addEventListener('click', () => {
    hnav.style.left = "0%";
    blackWrap.classList.add('active');
    bodys.classList.add('not_scroll');
});
closeBtn.addEventListener('click', () => {
    hnav.style.left = "-70%";
    blackWrap.classList.remove('active');
    bodys.classList.remove('not_scroll');
});


// sec3
let menulist = ['"로제 떡볶이"', '"짜장 떡볶이"', '"치즈 떡볶이"', '"차돌박이 떡볶이"', '"분식 떡볶이"', '"카레 떡볶이"', '"해물 떡볶이"'];
const recomMenu = document.querySelector('.recomMenu');
const recomBtn = document.querySelector('.recomBtn');
const recomImg = document.querySelectorAll('.recomImgBox a img');

recomBtn.addEventListener('click', () => {
    let count = 0;

    let menurandom = setInterval(() => {
        let landomnum = Math.floor(Math.random() * menulist.length);
        recomMenu.innerText = menulist[landomnum];
        count++;
        // console.log(count);

        if(count > 10){
            clearInterval(menurandom);
            recomImg[0].src = `./img/recom${landomnum}-1.png`;
            recomImg[1].src = `./img/recom${landomnum}-2.png`;
        }
    }, 100);
    
});


// 스크랩, 찜 팝업창
const popupWrap = document.querySelector('#popupWrap');
const goBtn = document.querySelector('.goBtn');
const conBtn = document.querySelector('.conBtn');
conBtn.addEventListener('click', () => {
    popupWrap.classList.remove('active');
    blackWrap.classList.remove('active');
    bodys.classList.remove('not_scroll');
});


// sec 공통, star & bookmark
const bookmark = document.querySelectorAll('.bookmark');
const star = document.querySelectorAll('.star');

bookmark.forEach(bm => {
    let bmtf = false;
    bm.addEventListener('click', () => {
        bm.classList.toggle('active');

        if(bmtf == false){
            bmtf = true;
        }else {
            bmtf = false;
        }

        if(bmtf == true){
            popupWrap.classList.add('active');
            blackWrap.classList.add('active');
            bodys.classList.add('not_scroll');
        }
    });
});

star.forEach(st => {
    let sttf = false;
    st.addEventListener('click', () => {
        st.classList.toggle('active');

        if(sttf == false){
            sttf = true;
        }else {
            sttf = false;
        }

        if(sttf == true){
            popupWrap.classList.add('active');
            blackWrap.classList.add('active');
            bodys.classList.add('not_scroll');
        }
    });
});


// sec4
const brand_menuBtnList = document.querySelectorAll('.brand-menuBtnList li');
const BrandList = document.querySelectorAll('.BrandList li');

brand_menuBtnList.forEach((tab, idx) => {
    tab.addEventListener('click', () => {

        const target = document.querySelector(tab.dataset.target);

        BrandList.forEach((tc) => {
            tc.classList.remove('active');
        });
        target.classList.add('active');

        brand_menuBtnList.forEach((t) => {
            t.classList.remove('active');
        });
        tab.classList.add('active');
    });
});


// sec5
const recipe_menuBtnList = document.querySelectorAll('.recipe-menuBtnList li');
const RecipeList = document.querySelectorAll('.RecipeList li');

recipe_menuBtnList.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        RecipeList.forEach((tc) => {
            tc.classList.remove('active');
        });
        target.classList.add('active');

        recipe_menuBtnList.forEach((t) => {
            t.classList.remove('active');
        });
        tab.classList.add('active');
    });
});