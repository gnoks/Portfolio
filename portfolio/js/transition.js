$(function() {
    request = window.location.hash;

    if(request == '#projets') {
      $('.page.hello').removeClass('hello');
      $('.page.curriculum').removeClass('curriculum');
      $('.page').addClass('projets');
    }
   
    // $('nav a').on('click', function(){
    //   $('.top').addClass('activetop');
    //   $('.bottom').addClass('activebottom');
    // });

    $('nav a').click(function(){
        speed = 200;
        i = $(this).index();
        $('.page.hello').animate({opacity: 0, marginTop: 80}, speed, function(){
            $(this).removeClass('hello');
            $('.page').eq(i).css('marginTop', 30).animate({opacity: 1}).addClass('hello');
        });
    });

    $('.logo').click(function(){
      speed = 200;
      i = $(this).index();
      $('.page.hello').animate({opacity: 0, marginTop: 80}, speed, function(){
          $(this).removeClass('projets', 'curriculum');
          $('.page').eq(0).css('marginTop', 0).animate({opacity: 1}).addClass('hello');
      });
  });
});


  