$(document).ready(function () {
    //Hover時顯示數據
    for (var i = 1; i <= 5; i++) {
        showData('.a' + i + ' .bar-chart--inner', '#barData' + i);
    }

    function showData(d1, d2) {
        $(d1).hover(function () {
            $(d2).addClass('dataShow');
        }, function () {
            $(d2).removeClass('dataShow');
        });
    }

    // 翻譯
    var $chinese, $english, $btnChinese, $btnEnglish;
    $btnChinese = $('#btnChinese');
    $btnEnglish = $('#btnEnglish');
    $chinese = ['這幾年被認為是人工智慧在全球範圍內受到極大關注， 如果你留意的話，幾乎每天都有新的人工智慧消息傳來。 人們總是一直擔心未來自己的工作會被機器人取代， 與其說被取代，學習新技能的需求更令人焦慮，未來AI到底有甚麼新趨勢呢?科技變化的速度之快，令人眼花撩亂，讓我們往下探索。 ',
        '趨勢一 : AI將成為核心技術', '趨勢二 : AI發展將更快速、更準確、更靈活', '趨勢三 : 未來手機晶片一定內建AI運算核心', '趨勢四：AI取代螢幕成為新UI / UX介面', '趨勢五：AI自主學習是終極目標',
        '以人工智慧為基礎所開發的系統在2018年開始進行各種商業測試，也會有許多供應商接著推出由AI所打造的資料分析商業軟體，幫助品牌預測影響客戶留存率的關鍵點或是提升品牌與客戶間的互動。',
        '當有了更多的回饋與改善，AI將為企業提供更精準的預測和建議。由於AI有助於產品開發和交付的自動化，未來各種創新產品和服務的上市時間會因此縮短。傳統大規模量產的作法也會逐漸減少，這是因為品牌在「生產」這個步驟多了一些選項—未來品牌可以少量開發客製化產品以瞄準利基市場，並可隨著客戶的品味變化改善產品設計與品質。 ',
        '現階段主流的ARM架構處理器速度不夠快，若要進行大量的圖像運算仍然不足，所以未來的手機晶片一定會內建AI運算核心。正如，蘋果將3D感測技術帶入iPhone之後，Android陣營智慧型手機也跟進導入3D感測相關應用。 ',
        '人工智慧透過自然語言處理與機器學習讓技術變得更為直觀，也變得較易操控，未來將可以取代螢幕在使用者介面與使用者體驗的地位。人工智慧除了在企業後端扮演重要角色外，在技術介面也可承擔更複雜角色。也就是說，人工智慧讓介面變得更為簡單且更有智慧，也因此設定了未來互動的高標準模式。 ',
        'AI的「大腦」變聰明是分階段進行，從機器學習進化到深度學習，再進化至自主學習。目前，仍處於機器學習及深度學習的階段，若要達到自主學習需要解決四大關鍵問題。首先，是為自主機器打造一個AI平台；還要提供一個能夠讓自主機器進行自主學習的虛擬環境，必須符合物理法則，碰撞，壓力，效果都要與現實世界一樣；然後再將AI的「大腦」放到自主機器的框架中；最後建立虛擬世界入口(VR)。 ',
        '全球人工智慧企業擁有數前五',
        '人工智慧肯定是未來趨勢，全球都在 AI 化，目前 AI 人才供應量最大的是美國， 此外，日本、印度、以色列、英國、法國、德國 和中國等國家也有很大需求，未來還會有更多國家開發更多AI企業。下表可看出各國 AI 供應差異。',
        '美國','中國','英國','以色列','加拿大'
    ];
    $english = ['In recent years, it has been considered that artificial intelligence has received great attention on a global scale. If you pay attention, new artificial intelligence news will come from almost every day. People always worry that their work will be replaced by robots in the future. Instead of being replaced, the need to learn new skills is even more anxious. What new trends are there in the future? The speed of technological change is dazzling. Let us explore.',
        'Trend 1 : AI will become the core technology','Trend 2 : AI development will be faster, more accurate and more flexible','Trend 3 : Future mobile phone chips must have built-in AI core','Trend 4 : AI replaces the screen as a new UI / UX interface','Trend 5 : AI self-learning is the ultimate goal',
        'Systems developed on the basis of artificial intelligence began various commercial tests in 2018, and many suppliers then launched data analysis commercial software created by AI to help brands predict key points affecting customer retention or enhance brands. Interaction with customers.',
        'When there is more feedback and improvement, AI will provide companies with more accurate forecasts and recommendations. As AI helps automate product development and delivery, the time to market for innovative products and services in the future will be reduced. Traditional mass production will also gradually decrease, because the brand has more options in the “production” step – the future brand can develop a small number of customized products to target the niche market, and can change with the taste of customers. Improve product design and quality.',
        'At this stage, the mainstream ARM architecture processor is not fast enough. If a large number of image operations are still insufficient, the future mobile phone chip will have built-in AI computing core. Just as Apple brought 3D sensing technology to the iPhone, the Android camp smart phone also followed up with the introduction of 3D sensing related applications.',
        "Artificial intelligence makes technology more intuitive and easier to manipulate through natural language processing and machine learning, and will replace the screen's user interface and user experience in the future. In addition to playing an important role in the back end of the enterprise, artificial intelligence can also take on more complex roles in the technical interface. In other words, artificial intelligence makes the interface simpler and smarter, and therefore sets a high standard mode for future interaction.",
        "AI's \"brain\" becomes smarter, in stages, from machine learning to deep learning, and then to self-learning. At present, it is still in the stage of machine learning and deep learning. To achieve self-learning, we need to solve four key problems. First of all, it is to build an AI platform for autonomous machines; it also provides a virtual environment that allows autonomous machines to learn autonomously. It must conform to the laws of physics, collisions, pressures, and effects in the same way as the real world; Put it into the framework of the autonomous machine; finally create a virtual world portal (VR).",
        'Global AI companies the top five',
        'Artificial intelligence is definitely the future trend. The world is AI. At present, the largest supply of AI talent is in the United States. In addition, Japan, India, Israel, the United Kingdom, France, Germany and China also have great demand, and there will be more in the future. Many countries develop more AI companies. The table below shows the differences in AI supply across countries.',
        'United States','China','British','Israel','Canada'       
    ];
    // 一開始載入中文
    var initLanguage = function () {
        // 前言
        $('.pageTitle').text($chinese[0]);
        // 趨勢標題
        $('.tab1 label').text($chinese[1]);
        $('.tab2 label').text($chinese[2]);
        $('.tab3 label').text($chinese[3]);
        $('.tab4 label').text($chinese[4]);
        $('.tab5 label').text($chinese[5]);
        // 趨勢內文
        $('.tab1 p').text($chinese[6]);
        $('.tab2 p').text($chinese[7]);
        $('.tab3 p').text($chinese[8]);
        $('.tab4 p').text($chinese[9]);
        $('.tab5 p').text($chinese[10]);
        // 圖表標題
        $('#article2 .header h2').text($chinese[11]);
        // 圖表內文
        $('#article2 .header p #chartWord').text($chinese[12]);
        // 圖表國家
        $('#article2 .a1 span:last').text($chinese[13]);
        $('#article2 .a2 span:last').text($chinese[14]);
        $('#article2 .a3 span:last').text($chinese[15]);
        $('#article2 .a4 span:last').text($chinese[16]);
        $('#article2 .a5 span:last').text($chinese[17]);
    }
    initLanguage();
    // 中文
    $btnChinese.on('click', function () { initLanguage(); });
    // 英文
    $btnEnglish.on('click', function () {
         // 前言
         $('.pageTitle').text($english[0]);
         // 趨勢標題
         $('.tab1 label').text($english[1]);
         $('.tab2 label').text($english[2]);
         $('.tab3 label').text($english[3]);
         $('.tab4 label').text($english[4]);
         $('.tab5 label').text($english[5]);
         // 趨勢內文
         $('.tab1 p').text($english[6]);
         $('.tab2 p').text($english[7]);
         $('.tab3 p').text($english[8]);
         $('.tab4 p').text($english[9]);
         $('.tab5 p').text($english[10]);
         // 圖表標題
         $('#article2 .header h2').text($english[11]);
         // 圖表內文
         $('#article2 .header p #chartWord').text($english[12]);
         // 圖表國家
         $('#article2 .a1 span:last').text($english[13]);
         $('#article2 .a2 span:last').text($english[14]);
         $('#article2 .a3 span:last').text($english[15]);
         $('#article2 .a4 span:last').text($english[16]);
         $('#article2 .a5 span:last').text($english[17]);
    });
});