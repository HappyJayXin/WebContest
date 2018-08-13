$(document).ready(function () {  
    //回到最上面css在global.css
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()*2 ) {            
            $(".m-backtotop").addClass("active");		
        } else {            
            $(".m-backtotop").removeClass("active");		
        }
    });
    $(".m-backtotop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});