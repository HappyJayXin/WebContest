$(document).ready(function() {
    var contador = 1;
    $('.bt-menu').click(function(e) {
        e.preventDefault();
        // $('nav').toggle();
        if (contador == 1) {
            //開啟
            $('nav').animate({
                left: '0'
            }, 600);
            contador = 0; 
            $('main').addClass('upindex');
            $('footer').addClass('upindex');                      
        } else {
            //關
            $('nav').animate({
                left: '-100%'
            }, 300);
            contador = 1;            
        }        
    });
    // 有動畫的bar
    $('.icon').click(function(e) {
        e.preventDefault();
        $('.icon').toggleClass('active');
    });
});