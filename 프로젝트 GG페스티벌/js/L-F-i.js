$(function (){
  //
  //
  //
  //

  // focus
  $(".input").focus(function(){
    $(this).next("#login i").css({"opacity":1});
    $(this).css({"opacity":1});
  });
  $(".input").blur(function(){
    $("#login i").css({"opacity":0.5});
    $(this).css({"opacity":0.5});
  });

  // 키다운 유효성검사
  $("#userid_box .input").keydown(function(){
    //이름
    var userid = $("input[name='userid']").val();
    if(!userid){
      $("#userid").addClass("error").removeClass("pass");
      $("#userid_box i").addClass("error").removeClass("pass");
    }else{
      $("#userid").addClass("pass").removeClass("error");
      $("#userid_box i").addClass("pass").removeClass("error");
    }
  });
  $("#password_box .input").keydown(function(){
    //전화번호
    var password = $("input[name='password']").val();
    if(!password){
        $("#password").addClass("error").removeClass("pass");
        $("#password_box i").addClass("error").removeClass("pass");
    }else{
      $("#password").addClass("pass").removeClass("error");
      $("#password_box i").addClass("pass").removeClass("error");
    }
    if(!(password.length == 10)){
        $("#password").addClass("error").removeClass("pass");
        $("#password_box i").addClass("error").removeClass("pass");
    }else{
      $("#password").addClass("pass").removeClass("error");
      $("#password_box i").addClass("pass").removeClass("error");
    }
  })
      

  //버튼 유효성 검사
  $("#login").submit(function(){
    //이름
    var userid = $("input[name='userid']").val();
    if(!userid){
        alert("이름을 입력하세요.");
        $("input[name='userid']").focus();
        $("#userid").addClass("error").removeClass("pass");
        $("#userid_box i").addClass("error").removeClass("pass");
        return false;
    }else{
      $("#userid").addClass("pass").removeClass("error");
      $("#userid_box i").addClass("pass").removeClass("error");
    }
    //전화번호
    var password = $("input[name='password']").val();
    if(!password){
        alert("전화번호를 입력하세요.");
        $("input[name='password']").focus();
        $("#password").addClass("error").removeClass("pass");
        $("#password_box i").addClass("error").removeClass("pass");
        return false;
    }else{
      $("#password").addClass("pass").removeClass("error");
      $("#password_box i").addClass("pass").removeClass("error");
    }
    if(!(password.length == 11)){
      alert("전화번호 '-'를 제외한 11자리를 입력하세요.");
      $("input[name='password']").focus();
        $("#password").addClass("error").removeClass("pass");
        $("#password_box i").addClass("error").removeClass("pass");
      return false;
    }else{
      $("#password").addClass("pass").removeClass("error");
      $("#password_box i").addClass("pass").removeClass("error");
    }
  })

  //
  //
  //
  //
});