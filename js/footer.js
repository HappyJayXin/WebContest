$(document).ready(function () {
    $(".rotate").textrotator({
        animation: "flip",
        separator: ",", 
        speed: 2000
    });
    $('#footerRight ul li a').attr('target','_blank');    
});