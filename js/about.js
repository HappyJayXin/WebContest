$(document).ready(function () {
    // 超連結開新視窗
    $('.content a').attr('target', '_blank');
    $('.reference ol li a').attr('target', '_blank');

    // 超連結加上類別
    $('.reference ol li a').addClass('effect_c');

    // email驗證
    $('.form i').addClass('alertHide');
    $email = $('#email').val();
    $emailRule = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    $('#contactBtn').on('click', function (e) {
        e.preventDefault();
        // 判斷是否為空
        $name = $('#name').val();
        $email = $('#email').val();
        $message = $('#message').val();
        var showbtn = 0;
        // -------------------綽號--------------------------
        if ($name == '') {
            controllError('', '.formName i', '#name', '');
            swing('#name');
        } else {
            controllError('.formName i', '', '', '#name');
            showbtn += 1;
        }
        // -------------------信箱--------------------------
        if ($email == '') {
            controllError('', '.formEmail i', '#email', '');
            swing('#email');
        } else {
            // 驗證信箱
            if ($email.search($emailRule) == -1) {
                // 錯
                controllError('', '.formEmail i', '#email', '');
                swing('#email');
            } else {
                // 對
                controllError('.formEmail i', '', '', '#email');
                showbtn += 1;
            }
        }
        // -------------------訊息--------------------------
        if ($message == '') {
            controllError('', '.formMsg i', '#message', '');
            swing('#message');
        } else {
            controllError('.formMsg i', '', '', '#message');
            showbtn += 1;
        }
        //表單若正確
        if (showbtn == 3) {
            var answer = confirm('確定送出你的意見嗎 ?');
            if (answer) {
                location.reload();
                // 清空表單資料
                $('.form input').val('');
                $('.form textarea').val('');
            }
        }
    });
    redForm();
    $(window).resize(function () {
        redForm();
    });
    function redForm() {
        if ($(window).width() <= 576) {
            //手機畫面把icon拿掉
            $('.form i').css('display', 'none');
        } else {
            //電腦畫面把icon放回來
            $('.form i').css('display', 'inline');
        }
    }
    function controllError(a1, a2, b1, b2) {
        // 控制錯誤icon
        $(a1).addClass('alertHide');
        $(a2).removeClass('alertHide');
        $(b1).addClass('alert');
        $(b2).removeClass('alert');
    }
    function swing(aims) {
        $(aims).addClass('sswing').delay(1000).queue(function (next) {
            $(this).removeClass('sswing');
            next();
        });
    }
    //解決ig icon無法旋轉，當滑到特定位置，移除animated class
    $(window).on('scroll', function () { 
        console.log($(window).scrollTop());        
        if($(window).scrollTop() > 600){            
            $('#article1 section .content a i').removeClass('animated bounceInRight delay-1250');        
        }
    });  
    

    // 翻譯
    var $chinese, $english, $btnChinese, $btnEnglish;
    $btnChinese = $('#btnChinese');
    $btnEnglish = $('#btnEnglish');
    $chinese = ["這次很高興我們可以參加今年「全國慈善/科技/人文網頁設計比賽暨行動App創作比賽」， 我們網站主要是以「人工智慧無所不在」的題目去設計網頁，想要以人工智慧(以下簡稱AI)為主題的原因是因為它最近這幾年真的很紅，未來發展更是深不可測 ! 所以我想藉由這次比賽去真的認識 AI，也把它做成網頁，讓使用者可以透過簡單的介紹了解AI。<br>製作網頁上還蠻順利的，其中用了很多 javascript 以及 jquery 來增加網頁上的一些互動性 。唯一不理想的是UIUX的部分沒有很懂，但這對我們 來說也是一個值得學習機會。",
        "第一次純手工刻出這麼一個大的網站，讓我學了不少經驗。很喜歡寫前端，如果你也喜歡前端，歡迎跟我交流，聯絡資料我放在頁尾。",
        "這比賽畫盡心思去整理資料，希望可以讓使用者獲得更多 AI 相關知識。現在最想做的事就是好好準備研究所，專心吃飯和睡覺。",
        '團隊成員','聯絡我們','參考資料',
        '網頁程式設計','資料想法提供'
    ];
    $english = ["This time, I am very pleased that we can participate in this year's \"National Charity/Technology/Humanistic Web Design Competition and Action App Creation Competition\". Our website is mainly designed with the theme of \"Artificial Wisdom is Everywhere\", and we want to use artificial intelligence (hereinafter referred to as AI). The reason for the theme is because it has been really red in recent years, and the future development is even more unfathomable! So I want to really know AI by this game, and also make it into a webpage, so that users can easily Introduction to understanding AI. <br>The production page is quite smooth, with a lot of javascript and jquery to increase some of the interactivity on the page. The only thing that is not ideal is that our team does not have an artist, and the UIUX part is also slightly understood, but it is also a worthwhile learning opportunity for us.",
        "The first time I handcrafted such a big website , for me, writing a program is like playing an electric toy. It is also a kind of leisure activity. I like to drink coffee and tap the keyboard in front of the computer to create any work with javascript!",
        "This game draws all the thoughts to organize the data, hoping to give users more knowledge about AI. The most important thing to do now is to prepare for the study and concentrate on eating and sleeping.",
        'Team Member','Contact Us','Reference Material',
        'Web programming','Information and idea Collection'
    ];
    // 一開始載入中文
    var initLanguage = function () {
        // 前言
        $('.pageTitle').html($chinese[0]);
        //卡片
        $('#aPerson').text($chinese[1]);
        $('#bPerson').text($chinese[2]);
        // 標題
        $('#article1 h2').text($chinese[3]);
        $('#article2 h2').text($chinese[4]);
        $('#article3 h2').text($chinese[5]);
        //卡片工作
        $('.c1 p').text($chinese[6]);
        $('.c2 p').text($chinese[7]);
        // 表格提示
        $('.formName input').attr('placeholder','你的綽號');
        $('.formEmail input').attr('placeholder','你的信箱');
        $('.formMsg textarea').attr('placeholder','提供意見');
        $('.formbtn button').text('送 出');
    }
    initLanguage();
    // 中文
    $btnChinese.on('click', function () { initLanguage(); });
    // 英文
    $btnEnglish.on('click', function () {
        // 前言
        $('.pageTitle').html($english[0]);
        //卡片
        $('#aPerson').text($english[1]);
        $('#bPerson').text($english[2]);
        // 標題
        $('#article1 h2').text($english[3]);
        $('#article2 h2').text($english[4]);
        $('#article3 h2').text($english[5]);
         //卡片工作
         $('.c1 p').text($english[6]);
         $('.c2 p').text($english[7]);
        //  表格提示
         $('.formName input').attr('placeholder','Your Nickname');
         $('.formEmail input').attr('placeholder','Your Email');
         $('.formMsg textarea').attr('placeholder','Your Opinions');
         $('.formbtn button').text('OK');
        });
});