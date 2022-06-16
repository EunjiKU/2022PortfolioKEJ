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
    var userid = $("input[name='userid']").val();
    if(!userid){
      $("#userid").addClass("error").removeClass("pass");
      $("#userid_box i").addClass("error").removeClass("pass");
    }else{
      $("#userid").addClass("pass").removeClass("error");
      $("#userid_box i").addClass("pass").removeClass("error");
    }
    if(!(userid.length > 7 && userid.length < 16)){
        $("#userid").addClass("error").removeClass("pass");
        $("#userid_box i").addClass("error").removeClass("pass");
    }else{
      $("#userid").addClass("pass").removeClass("error");
      $("#userid_box i").addClass("pass").removeClass("error");
    }
  });
  $("#password_box .input").keydown(function(){
    //비밀번호
    var password = $("input[name='password']").val();
    if(!password){
        $("#password").addClass("error").removeClass("pass");
        $("#password_box i").addClass("error").removeClass("pass");
    }else{
      $("#password").addClass("pass").removeClass("error");
      $("#password_box i").addClass("pass").removeClass("error");
    }
    if(!(password.length > 7 && password.length < 16)){
        $("#password").addClass("error").removeClass("pass");
        $("#password_box i").addClass("error").removeClass("pass");
    }else{
      $("#password").addClass("pass").removeClass("error");
      $("#password_box i").addClass("pass").removeClass("error");
    }
  })
      

  //버튼 유효성 검사
  $("#login").submit(function(){
    //아이디
    var userid = $("input[name='userid']").val();
    if(!userid){
        alert("아이디를 입력하세요.");
        $("input[name='userid']").focus();
        $("#userid").addClass("error").removeClass("pass");
        $("#userid_box i").addClass("error").removeClass("pass");
        return false;
    }else{
      $("#userid").addClass("pass").removeClass("error");
      $("#userid_box i").addClass("pass").removeClass("error");
    }
    if(!(userid.length > 7 && userid.length < 16)){
        alert("아이디는 8~15 이내로 입력하세요.");
        $("input[name='userid']").focus();
        $("#userid").addClass("error").removeClass("pass");
        $("#userid_box i").addClass("error").removeClass("pass");
        return false;
    }else{
      $("#userid").addClass("pass").removeClass("error");
      $("#userid_box i").addClass("pass").removeClass("error");
    }
    //비밀번호
    var password = $("input[name='password']").val();
    if(!password){
        alert("비밀번호를 입력하세요.");
        $("input[name='password']").focus();
        $("#password").addClass("error").removeClass("pass");
        $("#password_box i").addClass("error").removeClass("pass");
        return false;
    }else{
      $("#password").addClass("pass").removeClass("error");
      $("#password_box i").addClass("pass").removeClass("error");
    }
    if(!(password.length > 7 && password.length < 16)){
      alert("비밀번호 8~15 이내로 입력하세요.");
      $("input[name='password']").focus();
        $("#password").addClass("error").removeClass("pass");
        $("#password_box i").addClass("error").removeClass("pass");
      return false;
    }else{
      $("#password").addClass("pass").removeClass("error");
      $("#password_box i").addClass("pass").removeClass("error");
    }
    return true;
    // function gopagePost(){
    //   if(password && userid && (password.length > 7 && password.length < 16) && (userid.length > 7 && userid.length < 16)){
    //     alert("페이지이동");
    //     location.replace("main.html");
    //   }
    // }
    
  })
  //
  //
  //
  //
});