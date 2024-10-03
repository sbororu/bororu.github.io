//言語データの準備
const languageData = {
    'en': {
        'lead01': 'I am Bolortsetseg, a web•graphic designer based in Japan.'
    },
    'ja': {
        'lead01': '私はウェブ・グラフィックデザイナー。これまでは、主にウェブデザインからコーディング、名刺やパンプレットなどの印刷物、ロゴマークなどのグラフィックデザイン、撮影、デジタルイラストなどに携わって来ました。'
    }
};

// セレクトボックスのchangeイベント設定
const langs =  document.getElementById('language');
langs.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

// changeイベントで実行する関数
// セレクトボックスから渡された値と言語データのキーを元に
// それぞれのHTMLタグに翻訳したテキストを設定する。
const changeLanguage = function(lang) {
    let elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(function (element) {
        let key = element.getAttribute('data-lang-key');
        let text = languageData[lang][key];
        element.textContent = text;
    });
}