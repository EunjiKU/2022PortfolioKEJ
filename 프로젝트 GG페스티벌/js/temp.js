$(function (){

  //햄버거 버튼
  $('#habbtn').click(function(){
    $(this).toggleClass('hamactive');
    });


  // 언어 - 한국어 & 영어
  var language = document.querySelectorAll('#language li a');
  for(var i = 0 ; language.length > i ; i++){
    language[i].addEventListener('click',function(e){
      for(var x = 0; x < language.length; x++){
        language[x].classList.remove('llactive');
        e.target.classList.add('llactive');
    }
    });
  }


  // 언어 - arrow
  $('#langbtn').click(function(){
    $("#langbtn i").toggleClass('arrowrotate');
    $(".delangpops").toggleClass('lactive');
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
  $('#p-nav #mainmenu').mouseover(function(){
    $('#header').addClass("heademouse");
    $('.hr').addClass("headhr");
    $('#header').removeClass("deheademouse");
    $('.hr').removeClass("deheadhr");
  });
  $('#p-nav #mainmenu').mouseleave(function(){
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


// //반응형 MOBILE 헤더
      $("#habbtn").click(function(){
        $(".m").toggleClass('menuactive');
        $(".menublack").toggleClass('blactive');
      });
      $("#m-nav #mainmenu > li").click(function(){
        $('#m-nav .submenu').stop().slideUp(400);
        $(this).children(".submenu").stop().slideToggle(400);
      })
});