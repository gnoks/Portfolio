$(function () {
    request = window.location.hash;

    if (request == '#projets') {
        $('.page.hello').removeClass('hello');
        $('.page.curriculum').removeClass('curriculum');
        $('.page').addClass('projets');
    }

    

    $('nav a').click(function (e) {
        e.preventDefault();
        $('#canvas.active').removeClass('active')
        speed = 100;
        i = $(this).index();
        $('.page.hello').animate({
            opacity:0,
        }, speed, function () {
            $('#canvas').addClass('active')
            $(this).removeClass('hello');
            $('.page').eq(i).css('opacity', 0).animate({
                opacity: 0,
            }).addClass('hello');
            $('.page').eq(i).css('opacity', 1).animate({
                opacity: 1
            }).addClass('hello');
        });

    });



    $('.logo').click(function (e) {
        e.preventDefault();
        $(' #canvas.active').removeClass('active')
        speed = 200;
        i = $(this).index();
        $('.page.hello').animate({
            opacity: 0,
            marginTop: 0
        }, speed, function () {
            $('#canvas').addClass('active')
            $(this).removeClass('projets', 'curriculum');
            $('.page').eq(0).css('opacity', 1).animate({
                opacity: 1
            }).addClass('hello');
        });
    });
});

$(document).ready(function(){
    $("nav a").click(function(){
        $("a").removeClass("active");
        $(this).addClass("active");
    });
});



function domloaded(){
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    var j = 0, pixSize = 2, pixCount = 50;
    for(var r = 0; r < pixCount; r++) {
        for(var i = 0; i < pixCount; i++) {
            if(i % pixCount === 0) {
                j++;
            }
            ctx.fillStyle= 'hsl(' + 360 * Math.random() + ', 90%, 6%)';
            ctx.fillRect(i * pixSize, j * pixSize, 200, 200);
        }
    }
}

setInterval(domloaded, 200);