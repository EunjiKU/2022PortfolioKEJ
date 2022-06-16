$(function (){
  // AOS Instance
  AOS.init(); 

  //팝업
  var popupbtn = document.querySelector('.popupbtn');
  var popupblack = document.querySelector('#popup_sec');

  popupbtn.addEventListener('click',function(){
    popupblack.style.display = 'none';
    });

  //햄버거 버튼
  $('#habbtn').click(function(){
    $(this).toggleClass('hamactive');
    });

  // 언어
  var language = document.querySelectorAll('#language li a');
  for(var i = 0 ; language.length > i ; i++){
    language[i].addEventListener('click',function(e){
      for(var x = 0; x < language.length; x++){
        language[x].classList.remove('llactive');
        e.target.classList.add('llactive');
    }
    });
  }
  // 언어
  $('#langbtn').click(function(){
    $("#langbtn i").toggleClass('arrowrotate');
  });
  $('#langbtn').click(function(){
    $(".delangpops").toggleClass('lactive');
  });
  $('#langbtn').click(function(){
    $(".delangpop").toggleClass('lactive');
  });

  //헤더 스크롤 효과
  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("#header").removeClass("deheadactive");
        $("#header").addClass("headactive");
    }else{
        $("#header").removeClass("headactive");
        $("#header").addClass("deheadactive");
    }
  })

  //반응형 PC 헤더
  $('#mainmenu').mouseover(function(){
    $('#header').addClass("heademouse");
    $('.hr').addClass("headhr");
    $('#header').removeClass("deheademouse");
    $('.hr').removeClass("deheadhr");
  });
  $('#mainmenu').mouseleave(function(){
    $('#header').addClass("deheademouse");
    $('.hr').addClass("deheadhr");
    $('#header').removeClass("heademouse");
    $('.hr').removeClass("headhr");
  });

  const mainmenuLi = document.querySelectorAll('#mainmenu > li > a');
  mainmenuLi.forEach( li => {
    li.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });


  $(window).resize(function (){  
    if (window.innerWidth <= 1024) {
      // //반응형 MOBILE 헤더
      $("#habbtn").click(function(){
        $(".menuboxs").toggleClass('menuactive');
        $(".menublack").toggleClass('blactive');
      });
      $("#mainmenu > li").click(function(){
        $('.submenu').stop().slideUp(400);
        $(this).children(".submenu").stop().slideToggle(400);
      })
    }
  })

  // 메인 슬라이드
  var swiper = new Swiper(".mainslide", {
    slidesPerView:1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },
      autoplay: {
        delay: 2500,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 이벤트 슬라이드
  var swiper = new Swiper(".eventslide", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { //반응형 조건 속성
      768: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 60,
      },
      1300: {
        spaceBetween: 60,

      }
    }
  });

  // 파트너 슬라이드
  var swiper = new Swiper(".partnerslide", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween:60,
    autoplay: {
      delay: 2500,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },breakpoints: { //반응형 조건 속성
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 5,
      }
    }
  });

  // 탭스
  var targetLink = document.querySelectorAll('.tab-menu a');
  var tabContent = document.querySelectorAll('#tab-content > div');
  for(var i = 0; i < targetLink.length; i++){
    targetLink[i].addEventListener('click',function(e){
      e.preventDefault();
      var orgTarget = e.target.getAttribute('href');
      var tabTarget = orgTarget.replace('#','');
      for(var j = 0; j < tabContent.length; j++){
          tabContent[j].style.display='none';
      }
      document.getElementById(tabTarget).style.display = 'block';
      for(var x = 0; x < targetLink.length; x++){
          targetLink[x].classList.remove('gactive');
          e.target.classList.add('gactive');
      }
    });
  }
  document.getElementById('tabs-1').style.display = 'block';

});