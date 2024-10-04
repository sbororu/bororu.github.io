//言語データの準備
const languageData = {
    'en': {
        'lead01': 'I am Boloro, a web designer with a passion for photography and digital art - currently based in Japan. I have been mainly involved in web design, graphic design such as business cards, flyers and logos etc.. My attraction to minimalism and sense of aesthetics are the two strengths that guide my design.',
        'lead02':'Capturing the unseen beauty of nature.',
        'lead03':'I love exploring and capturing beautiful details of the world and the soul of every moment. I love dramatic things so I bring a cinematic touch to everyphotos. "Life is romantic if you make it romantic."',
        'lead04':'Dancing lady in imagination.',
        'lead05':'Eagerly carving my path as a digital artist. I love bringing out the unique essence of each person through my drawing, whether it is a detailed digital portrait.',
        'lead06':'I would love to hear from you!',
        'lead07':'Whether you have a question, a project idea, or just want to say HELLO! feel free to reach out.'
    },
    'ja': {
        'lead01': 'Boloroは、ウェブ・グラフィックデザイナー。これまでは、主にウェブデザインからコーディング、名刺やパンプレットなどの印刷物、ロゴマークなどのグラフィックデザイン、撮影、デジタルイラストなどに携わって来た。私のデザインへ定義は「ミニマリズムへの魅力、美的センス」。',
        'lead02':'目に見えない世界をパシャッっと！',
        'lead03':'私は世界の美しいディテールやあらゆる瞬間の魂を探索し、シャッターを押しています。ドラマチックなものが大好きなので、写真にシネマチックなレタッチを加えています。 「ロマンチックにすれば、人生はロマンチックになる。」',
        'lead04':'想像の中で驚く女性',
        'lead05':'デジタルアーティストとしての道を熱心に切り開いています。私は、詳細なデジタル肖像画であろうと、自分の絵を通して各人のユニークな本質を引き出すのが大好きです。',
        'lead06':'お問い合わせお待ちしております。',
        'lead07':'ご質問やプロジェクトのアイディアなど、何でも構いませんので気なることがございましたらご自由にお問い合わせくださいませ。'
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