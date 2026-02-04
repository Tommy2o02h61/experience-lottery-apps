export const CATEGORIES = [
    { id: 'perspective', name: '日常の視点アップデート', description: '移動や食事の小さな変化' },
    { id: 'digital-detox', name: 'デジタルデトックス・思考整理', description: '情報の遮断と内省' },
    { id: 'creative', name: 'クリエイティブ・表現', description: '簡単なアウトプット' },
    { id: 'self-improvement', name: '自己研鑽・スキル', description: '学習や環境改善' },
];

export const MOODS = [
    { id: 'relaxed', label: 'まったり' },
    { id: 'active', label: 'アクティブ' },
    { id: 'focus', label: '集中したい' },
    { id: 'adventurous', label: '冒険したい' },
];

export const TIME_LIMITS = [
    { id: '5min', label: '5分' },
    { id: '30min', label: '30分' },
    { id: '1hour', label: '1時間〜' },
    { id: 'half-day', label: '半日' },
];

export const LOCATIONS = [
    { id: 'home', label: '自宅' },
    { id: 'outdoors', label: '外出先' },
    { id: 'work', label: '仕事場' },
    { id: 'travel', label: '旅行先' }, // Added as requested
];

// データベース: 本来はもっと多くのデータを用意しますが、ここではサンプルとして各カテゴリ・条件に対応するものを定義します
// category: カテゴリID
// suitableMoods: 推奨気分（空配列なら全気分OK）
// suitableTime: 推奨時間（適合する時間の配列）
// suitableLocation: 推奨場所（適合する場所の配列）
const EXPERIENCES_DB = [
    // --- 日常の視点アップデート ---
    {
        title: "いつもの窓から「新しい色」探し",
        action: "窓から見える景色の中で、今まで意識していなかった「色」を3つ見つけてスマホで撮影してください。",
        category: "日常の視点アップデート",
        suitableMoods: ['relaxed', 'focus'],
        suitableTime: ['5min', '30min'],
        suitableLocation: ['home', 'work', 'travel']
    },
    {
        title: "逆回りルートの冒険",
        action: "最寄り駅や目的地まで、いつもと違う道、あるいは「遠回り」を選んで歩いてみてください。",
        category: "日常の視点アップデート",
        suitableMoods: ['active', 'adventurous'],
        suitableTime: ['30min', '1hour'],
        suitableLocation: ['outdoors', 'travel']
    },
    {
        title: "五感テイスティング",
        action: "食事またお茶を飲むとき、最初の3口は「目をつぶって」味と香りだけに集中してください。",
        category: "日常の視点アップデート",
        suitableMoods: ['relaxed'],
        suitableTime: ['5min', '30min'],
        suitableLocation: ['home', 'outdoors', 'work', 'travel']
    },
    {
        title: "「音」の収集家",
        action: "スマホのボイスメモを起動し、家の中や外で「心地よい」と感じる音を3種類録音してください。",
        category: "日常の視点アップデート",
        suitableMoods: ['relaxed', 'focus'],
        suitableTime: ['5min'],
        suitableLocation: ['home', 'outdoors', 'work', 'travel']
    },
    {
        title: "定点観測",
        action: "自宅の窓から見える「特定の木」や「建物」を1つ決め、そこだけを1分間じっと観察してください。気づかなかったディテールを探します。",
        category: "日常の視点アップデート",
        suitableMoods: ['focus'],
        suitableTime: ['5min'],
        suitableLocation: ['home']
    },
    {
        title: "看板しりとり",
        action: "外を歩きながら、目に入る看板や文字で頭の中で「しりとり」を10回続けてください。",
        category: "日常の視点アップデート",
        suitableMoods: ['active'],
        suitableTime: ['30min', '1hour'],
        suitableLocation: ['outdoors', 'travel']
    },

    // --- デジタルデトックス・思考整理 ---
    {
        title: "「無音」ティータイム",
        action: "スマホを別の部屋に置き、15分間だけテレビも音楽も消して、飲み物を楽しむ時間を作ってください。",
        category: "デジタルデトックス・思考整理",
        suitableMoods: ['relaxed', 'focus'],
        suitableTime: ['30min', '1hour'],
        suitableLocation: ['home', 'travel']
    },
    {
        title: "思考のゴミ捨てライティング",
        action: "紙とペンを用意し、頭に浮かんだことを「判断せずに」3分間書き殴り続けてください。その後破り捨てましょう。",
        category: "デジタルデトックス・思考整理",
        suitableMoods: ['focus', 'relaxed'],
        suitableTime: ['5min'],
        suitableLocation: ['home', 'work', 'travel']
    },
    {
        title: "空の観察日記",
        action: "スマホを置いて、5分間ただ空を見上げてください。雲の動きや色の変化を言葉で実況してみましょう。",
        category: "デジタルデトックス・思考整理",
        suitableMoods: ['relaxed'],
        suitableTime: ['5min'],
        suitableLocation: ['outdoors', 'home', 'travel']
    },
    {
        title: "アナログ・ナナビゲーション",
        action: "目的地までのルートを地図アプリで見ず、頭の中の地図や現地の案内板だけで辿り着いてみてください。",
        category: "デジタルデトックス・思考整理",
        suitableMoods: ['adventurous'],
        suitableTime: ['30min', '1hour'],
        suitableLocation: ['outdoors', 'travel']
    },
    {
        title: "積読供養",
        action: "買ったまま読んでいない本、あるいは昔読んだ本を1冊手に取り、パッと開いたページだけを読んでください。",
        category: "デジタルデトックス・思考整理",
        suitableMoods: ['relaxed'],
        suitableTime: ['30min'],
        suitableLocation: ['home']
    },

    // --- クリエイティブ・表現 ---
    {
        title: "3行ラブレター",
        action: "身近な「物」（愛用のマグカップやペンなど）に対して、感謝の3行ラブレターを書いてください。",
        category: "クリエイティブ・表現",
        suitableMoods: ['relaxed', 'active'],
        suitableTime: ['5min', '30min'],
        suitableLocation: ['home', 'work', 'travel']
    },
    {
        title: "未来の自分への逆算インタビュー",
        action: "「3年後、最高に幸せな自分」になりきって、「あの時あれをやってよかった」と思うことを1つメモしてください。",
        category: "クリエイティブ・表現",
        suitableMoods: ['active', 'adventurous', 'focus'],
        suitableTime: ['5min', '30min'],
        suitableLocation: ['home', 'outdoors', 'work', 'travel']
    },
    {
        title: "即興フォトグラファー",
        action: "「赤いもの」または「丸いもの」をテーマに決めて、周囲にある該当するものを3枚、最高のアングルで撮影してください。",
        category: "クリエイティブ・表現",
        suitableMoods: ['active', 'adventurous'],
        suitableTime: ['5min', '30min'],
        suitableLocation: ['home', 'outdoors', 'travel']
    },
    {
        title: "架空のレビュー",
        action: "目の前にある「消しゴム」や「コップ」について、通販サイトに載せるような（あるいは詩的な）絶賛レビューをエアで考えてください。",
        category: "クリエイティブ・表現",
        suitableMoods: ['active'],
        suitableTime: ['5min'],
        suitableLocation: ['home', 'work', 'outdoors', 'travel']
    },
    {
        title: "自分サウンドトラック",
        action: "今の気分にぴったりの曲を1曲選び、それをBGMにして5分間だけドラマの主人公気分で行動してください。",
        category: "クリエイティブ・表現",
        suitableMoods: ['adventurous', 'active'],
        suitableTime: ['5min', '30min'],
        suitableLocation: ['home', 'travel']
    },

    // --- 自己研鑽・スキル ---
    {
        title: "マイクロ・ラーニング",
        action: "以前から気になっていたキーワードを1つ検索し、Wikipediaや解説記事を「最初の3行」だけ読んで要約してください。",
        category: "自己研鑽・スキル",
        suitableMoods: ['focus', 'active'],
        suitableTime: ['5min', '30min'],
        suitableLocation: ['home', 'work', 'outdoors', 'travel']
    },
    {
        title: "デスク/環境の1ミリ改善",
        action: "今いる場所を「少しだけ」快適にするために、何か1つ物を移動するか、片付けてください。",
        category: "自己研鑽・スキル",
        suitableMoods: ['focus', 'relaxed'],
        suitableTime: ['5min'],
        suitableLocation: ['home', 'work', 'travel']
    },
    {
        title: "非利き手の挑戦",
        action: "次の10分間、スマホの操作やドアの開閉など、日常動作をすべて「利き手じゃない方」で行ってみてください。",
        category: "自己研鑽・スキル",
        suitableMoods: ['active', 'adventurous'],
        suitableTime: ['5min', '30min'],
        suitableLocation: ['home', 'work', 'travel']
    },
    {
        title: "3分ストレッチ",
        action: "YouTubeで「3分 ストレッチ」と検索し、最初に出てきた動画をその場で実践してください。",
        category: "自己研鑽・スキル",
        suitableMoods: ['active'],
        suitableTime: ['5min'],
        suitableLocation: ['home', 'work']
    },
    {
        title: "異国の言葉",
        action: "「ありがとう」を、今まで知らなかった言語（スワヒリ語、フィンランド語など）でどう言うか調べて、1回だけ声に出して言ってみてください。",
        category: "自己研鑽・スキル",
        suitableMoods: ['focus'],
        suitableTime: ['5min'],
        suitableLocation: ['home', 'work', 'travel']
    },

    // --- 意外性・サプライズ（全カテゴリ共通枠として抽出可能）---
    {
        title: "サイコロ旅ごっこ",
        action: "目の前の交差点を「右」か「左」か、コインや直感で決めて進んでみてください。新しいお店や看板を見つけるまで。",
        category: "少し意外性のある面白い行動",
        suitableMoods: ['adventurous', 'active'],
        suitableTime: ['30min', '1hour', 'half-day'],
        suitableLocation: ['outdoors', 'travel']
    },
    {
        title: "現地の人におすすめを聞く",
        action: "ショップの店員さんやホテルの人に「この辺でお気に入りの場所はどこですか？」と勇気を出して聞いてみてください。",
        category: "少し意外性のある面白い行動",
        suitableMoods: ['adventurous'],
        suitableTime: ['30min', '1hour'],
        suitableLocation: ['travel']
    },
    {
        title: "コンビニ・ルーレット",
        action: "コンビニに入り、棚の「一番左上の商品」を（値段が許すなら）無条件で買ってみてください。",
        category: "少し意外性のある面白い行動",
        suitableMoods: ['adventurous'],
        suitableTime: ['5min', '30min'],
        suitableLocation: ['outdoors', 'travel']
    },
    {
        title: "自販機のミステリー",
        action: "自動販売機で、何を飲むか迷わず「一番端」のボタンを3秒以内に押してください。",
        category: "少し意外性のある面白い行動",
        suitableMoods: ['adventurous'],
        suitableTime: ['5min'],
        suitableLocation: ['outdoors', 'travel']
    }
];

/**
 * 条件に基づいて体験を3つ選出する関数
 */
export function drawLottery(mood, time, location) {
    // 1. 条件に合うものをフィルタリング
    let candidates = EXPERIENCES_DB.filter(exp => {
        // 条件が「指定なし」または適合リストに含まれているか
        const moodMatch = !exp.suitableMoods || exp.suitableMoods.length === 0 || exp.suitableMoods.includes(mood);
        const timeMatch = !exp.suitableTime || exp.suitableTime.length === 0 || exp.suitableTime.includes(time);
        const locMatch = !exp.suitableLocation || exp.suitableLocation.length === 0 || exp.suitableLocation.includes(location);
        return moodMatch && timeMatch && locMatch;
    });

    // 候補が極端に少ない場合は、条件を緩和して全リストから混ぜる（UX向上：結果ゼロを防ぐ）
    if (candidates.length < 3) {
        const others = EXPERIENCES_DB.filter(e => !candidates.includes(e));
        candidates = [...candidates, ...others];
    }

    // 2. シャッフルして3つ取得
    const shuffled = candidates.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    return selected;
}
