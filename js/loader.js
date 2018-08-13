$(document).ready(function () {
    
});
$(window).load(function(){
    //取消loader.css中按鍵隱藏
    $('.bt-menu').attr("style", "display: inline-block !important");
    $('main').removeClass('hide'); 
    $('footer').removeClass('hide');    
    $('#loading').hide(0);
});