$(function(){
    //
    //

    // qr코드
    $('.faqbtn').click(function(){
        $('#faqpop').toggleClass('active');
    });
    $('#faqpop').click(function(){
        $('#faqpop').toggleClass('active');
    });

    // faq
    $(".acofaqtit").click(function(){
        $('.acofaqsub').stop().slideUp(400);
        $('.acofaqtit').removeClass('acoactive');
        $(this).next(".acofaqsub").stop().slideToggle(400);
        $(this).addClass('acoactive');
    });

    //
    //
});