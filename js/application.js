$(document).ready(function () {
    // 載入圖片
    var images = new Array();
    function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
        }
    }
    preload(
        "img/app1.jpg",
        "img/app4.jpg",
        "img/app5.jpg",
        "img/app8.jpg",
    )
    for (var j = 0; j < images.length; j++) {
        $('.cd' + (j + 1) + ' .cardTop').append(images[j]);
    }
    // 點選卡片    
    // ajax詳細文章
    $('#backk').hide();//一開始先不顯示返回選單按鈕
    $('.section').on('click', function (e) {
        e.preventDefault();
        $('#article1').fadeOut(250);
        url = this.id;
        $('.content').load('detail.html #' + url);
        $('#backk').show();       
        $('html, body').animate({
            scrollTop: $("#article1").offset().top - 90
        },800);
    });
    // 點選返回選單
    $('#backk').on('click', function (e) {
        e.preventDefault();
        $('.content').load('detail.html #artic0');
        $('#article1').fadeIn(250);
        $('#backk').hide();
    });
    var $chinese, $english, $btnChinese, $btnEnglish;
    $btnChinese = $('#btnChinese');
    $btnEnglish = $('#btnEnglish');
    $chinese = [
        '近來隨著雲端運算與大數據分析的發展，結合人工智慧技術的各項創新應用不斷出現，愈來愈多應用開始在各種產業區塊中實現，已經創造出有別傳統的產業經營模式，已經擴散至各種應用情境與領域。讓我們來看看其中幾個最令人矚目的應用。',
        '',
        '健康照護與醫療應用', '教育與研究應用', '商業情報分析', '智慧製造'
        ,' 返回選單',

    ];
    $english = [
        'Recently, with the development of cloud computing and big data analytics, various innovative applications combining artificial intelligence technology have emerged. More and more applications have begun to be realized in various industrial blocks, and different traditional industrial business models have been created. Spread to a variety of application scenarios and areas. Let\'s take a look at some of the most eye-catching applications.',
        '',
        'Health Care And Medical Applications', 'Education And Research Applications',
        'Business Intelligence Analysis', 'Smart Manufacturing',
        ' BACK',

    ];
    // 一開始載入中文
    var initLanguage = function () {
        // 前言
        $('.pageTitle').html($chinese[0]);
        // 標題 
        $('main h1').text($chinese[1]);
        // 卡片標題
        $('.cd1 h2').text($chinese[2]);
        $('.cd2 h2').text($chinese[3]);
        $('.cd3 h2').text($chinese[4]);
        $('.cd4 h2').text($chinese[5]);
        //article2
        $('#article2 #backk i').text($chinese[6]);
        $('#artic1 h2').text($chinese[2]);
        $('#artic2 h2').text($chinese[3]);
        $('#artic3 h2').text($chinese[4]);
        $('#artic4 h2').text($chinese[5]);
    }
    initLanguage();
    // 中文
    $btnChinese.on('click', function () {
        initLanguage();
        // 超出卡片解決
        $('.card h2').css('fontSize','2em');
    });
    // 英文
    $btnEnglish.on('click', function () {        
        // 前言
        $('.pageTitle').html($english[0]);
        // 標題 
        $('main h1').text($english[1]);
        // 卡片標題
        $('.cd1 h2').text($english[2]);
        $('.cd2 h2').text($english[3]);
        $('.cd3 h2').text($english[4]);
        $('.cd4 h2').text($english[5]);
        // 超出卡片解決
        $('.card h2').css('fontSize','1.5em');
        //article2
        $('#article2 #backk i').text($english[6]);
        $('#artic1 h2').text($english[2]);
        $('#artic2 h2').text($english[3]);
        $('#artic3 h2').text($english[4]);
        $('#artic4 h2').text($english[5]);
        alert('很抱歉 ! 文章部分中文無法翻譯 。');
    });
});
