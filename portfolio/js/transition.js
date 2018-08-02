$('.button').on('click', function(){
    $('body').addClass('active')
  });
  
  $('.close').on('click', function(){
    $('body').removeClass('active',200)
  })