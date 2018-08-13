$(document).ready(function () {
    // 移動到文章位置    
    scrollAi('#ai1', '#section_a');
    scrollAi('#ai2', '#section_b');
    scrollAi('#ai3', '#section_c');
    scrollAi('#ai4', '#section_d');

    function scrollAi(name, aims) {
        $(name).click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $(aims).offset().top - 100 //讓card在中間
            }, 1800);
            // 增加強調效果並在3.5秒後移除類別
            $(aims).addClass('swingg').delay(3500).queue(function (next) {
                $(this).removeClass('swingg');
                next();
            });
        });
    }
    // 翻譯
    var $chinese, $english, $btnChinese, $btnEnglish;
    $btnChinese = $('#btnChinese');
    $btnEnglish = $('#btnEnglish');
    $chinese = ['AI的研究已有50多年，近年在大量資料與機器運算關鍵技術突破等因素下，AI有極大的進展 ，不論是協助企業提升銷售量、改善作業流程、或是提升員工生產力。也刺激了軟硬體更廣 泛的運用 — 如我們生活中手錶、手機、甚至車輛中都能見到AI的蹤影。 雖然很多人擔心AI 會取代人類的工作，但只要擁抱數位醫療並互助共存，相信AI可以幫我們 減少重複性質高的工作。',
        '人工智慧',
        '知識工程',
        '機器學習',
        '機器知覺',
        '簡稱AI，由人製造出來的機器所表現出來的智慧。通常人工智慧是指通過普通電腦程式的手段實現的人類智慧技術。該詞也指出研究這樣的智慧系統是否能夠實現，以及如何實現的科學領域，為電腦科學的一個領域，概念是使電腦能有解決與人類智慧相關之問題。例如：抽象思考(Abstract Thinking)、展現創意(Creativity)等能力，能夠進行推理、規劃、學習、交流、感知和操作物體。',
        '是過去人工智慧研究的核心部位，可以看成是人工智慧在知識信息處理方面的發展，研究如何由電腦表示知識、進行問題的自動求解。發展的第一步，必須是讓機器大量的讀取資料，我們提供越多資料，它就會變得「越聰明」，而且學習得更快。並讓機器能夠判斷物件、進行歸類及統整，並能判斷資料間的關聯度。知識工程的發展讓機器能具備專業知識，但另一方面，讓機器擁有常識、推論思考並解決問體卻相對困難。',
        '是人工智慧發展的一個分支，可分成監督學習（Supervised Learning）與非監督學習（Unsupervised Learning）。其核心概念在於數據分析，在當前資訊科學領域的一大分支。機器學習是實現人工智慧的一個途徑，即以機器學習為手段解決人工智慧中的問題，目前已廣泛應用於資料探勘、搜尋引擎、醫學診斷、語音和手寫識別功能、戰略遊戲等領域。',
        '就意味著AI的技術，我們並不僅僅簡單說機器可以模擬股票市場，模擬氣象，或者人臉識別誰誰誰。我們是把這些AI內化了，現在並不是機器去模擬，或者建模整個世界，而是它在自我建模的世界。，機器利用數據相關方式來推導人類面對世界的感官領域，利用這些數據推導人類面對世界的感官領域，包含視覺（人臉識別）、聽覺（語音識別）、與觸覺等。機器知覺的最終目的是讓機器能夠像人類一樣看到，能夠感知世界，能夠以人為的方式解釋他們所做出的決定。'
    ];
    $english = ['AI has been researching for more than 50 years. In recent years, AI has made great progress under the factors of a large number of key breakthroughs in data and machine computing, whether it is to help companies increase sales, improve operations, or improve employee productivity. It also stimulates the wider use of hardware and software — as seen in watches, mobile phones, and even vehicles in our lives. Although many people are worried that AI will replace human work, as long as they embrace digital medicine and help each other, I believe that AI can help us reduce duplication of work.',
        'Artificial intelligence',
        'Knowledge Enginnering',
        'Machine learning',
        'Machine perception',
        'Referred to as AI, the wisdom expressed by machines made by people. Usually artificial intelligence refers to human intelligence technology realized by ordinary computer programs. The term also points out that the study of such a smart system can be achieved, and how to achieve the scientific field, is a field of computer science, the concept is to enable computers to solve problems related to human intelligence. For example, Abstract Thinking, Creativity, etc., can reason, plan, learn, communicate, perceive, and manipulate objects.',
        'It is the core part of the research of artificial intelligence in the past. It can be regarded as the development of artificial intelligence in the processing of knowledge information. The more information we provide, the more "smart" it becomes, and the faster it learns. And let the machine be able to judge the object, classify and integrate it, and judge the degree of correlation between the data. The development of knowledge engineering allows machines to have professional knowledge, but on the other hand, it is relatively difficult for machines to have common sense, inferential thinking, and solve problems.',
        'It is a branch of artificial intelligence development, which can be divided into Supervised Learning and Unsupervised Learning. Its core concept lies in data analysis, a major branch of the current information science field. Machine learning is a way to realize artificial intelligence, that is, solving problems in artificial intelligence by means of machine learning. It has been widely used in data exploration, search engine, medical diagnosis, speech and handwriting recognition functions, and strategic games.',
        "It means AI technology, we don't just say that machines can simulate stock market, simulate weather, or face recognition who is who. We internalize these AIs, and now it is not a machine to simulate, or to model the whole world. The machine uses data-related methods to derive the sensory field of human beings facing the world, and uses these data to derive human sensory fields facing the world, including vision (face recognition), auditory (speech recognition), and touch. The ultimate goal of machine perception is to enable machines to be seen like humans, to perceive the world, and to explain the decisions they make in an artificial way."
    ];
    // 一開始載入中文
    var initLanguage = function () {
        // 前言
        $('.pageTitle').text($chinese[0]);
        // 標題
        $('#section_a h1').text($chinese[1]);
        $('#section_b h1').text($chinese[2]);
        $('#section_c h1').text($chinese[3]);
        $('#section_d h1').text($chinese[4]);
        // 內文
        $('#section_a p').text($chinese[5]);
        $('#section_b p').text($chinese[6]);
        $('#section_c p').text($chinese[7]);
        $('#section_d p').text($chinese[8]);
    }
    initLanguage();
    // 中文
    $btnChinese.on('click', function () { initLanguage(); });
    // 英文
    $btnEnglish.on('click', function () {
        // 前言
        $('.pageTitle').text($english[0]);
        // 標題
        $('#section_a h1').text($english[1]);
        $('#section_b h1').text($english[2]);
        $('#section_c h1').text($english[3]);
        $('#section_d h1').text($english[4]);
        // 內文
        $('#section_a p').text($english[5]);
        $('#section_b p').text($english[6]);
        $('#section_c p').text($english[7]);
        $('#section_d p').text($english[8]);
    });
});