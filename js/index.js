$(document).ready(function () {
    // 翻譯
    var $chinese, $english, $btnChinese, $btnEnglish;
    $btnChinese = $('#btnChinese');
    $btnEnglish = $('#btnEnglish');
    $chinese = ['AI 介紹', 'AI 應用', '未來趨勢',
        'AI的研究已有50多年，近年在大量資料與機器運算關鍵技術突破等因素下，AI有極大的進展 ，不論是協助企業提升銷售量、改善作業流程、或是提升員工生產力。也刺激了軟硬體更廣 泛的運用 — 如我們生活中手錶、手機、甚至車輛中都能見到AI的蹤影。 雖然很多人擔心AI 會取代人類的工作，但只要擁抱數位醫療並互助共存，相信AI可以幫我們 減少重複性質高的工作... ',
        '近來隨著雲端運算與大數據分析的發展，結合人工智慧技術的各項創新應用不斷出現，愈來愈多應用開始在各種產業區塊中實現，已經創造出有別傳統的產業經營模式，已經擴散至各種應用情境與領域。讓我們來探索其中幾個最令人矚目的應用。',
        '這幾年被認為是人工智慧在全球範圍內受到極大關注， 如果你留意的話，幾乎每天都有新的人工智慧消息傳來。 人們總是一直擔心未來自己的工作會被機器人取代， 與其說被取代，學習新技能的需求更令人焦慮，未來AI到底有甚麼新趨勢呢?科技變化的速度之快，令人眼花撩亂，讓我們帶您探索... '];
    $english = ['AI Introduction', 'Use AI', 'Future trends',
        'AI has been researching for more than 50 years. In recent years, AI has made great progress under the factors of a large number of key breakthroughs in data and machine computing, whether it is to help companies increase sales, improve operations, or improve employee productivity. It also stimulates the wider use of hardware and software — as seen in watches, mobile phones, and even vehicles in our lives. Although many people worry that AI will replace the work of human beings, as long as they embrace digital medical care and coexist with each other, we believe that AI can help us reduce duplicative work...',
        'Recently, with the development of cloud computing and big data analytics, various innovative applications combining artificial intelligence technology have emerged. More and more applications have begun to be realized in various industrial blocks, and different traditional industrial business models have been created. Spread to a variety of application scenarios and areas. Let\'s explore some of the most eye - catching applications.',
        'In the past few years, it has been considered that artificial intelligence has received great attention on a global scale. If you pay attention, new AI messages are coming out almost every day. People are always worried that their future work will be replaced by robots. Instead of being replaced, the need to learn new skills is even more worrying. What are the new trends in AI in the future? The pace of technological change is dazzling. Let us take you to explore...'];
    // 一開始載入中文
    var initLanguage = function () {
        $('#section1 h2').text($chinese[0]);
        $('#section2 h2').text($chinese[1]);
        $('#section3 h2').text($chinese[2]);
        $('#section1 p').text($chinese[3]);
        $('#section2 p').text($chinese[4]);
        $('#section3 p').text($chinese[5]);
    }
    initLanguage();
    // 中文
    $btnChinese.on('click', function () { initLanguage(); });
    // 英文
    $btnEnglish.on('click', function () {
        $('#section1 h2').text($english[0]);
        $('#section2 h2').text($english[1]);
        $('#section3 h2').text($english[2]);
        $('#section1 p').text($english[3]);
        $('#section2 p').text($english[4]);
        $('#section3 p').text($english[5]);
    });
});