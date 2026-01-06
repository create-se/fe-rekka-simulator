/**
 * FE烈火の剣 ボスデータ
 * 章順に並べています
 * 
 * difficulty: 'eliwood_normal' = エリウッド編ノーマル
 *             'hector_hard' = ヘクトル編ハード
 * 
 * 参考: モックアップ/烈火の剣ダメージ計算/data.js
 */

const BOSSES = [
    // ========================================
    // リン編（両ルート共通）
    // ========================================
    {
        id: "batta",
        name: "バッタ",
        chapter: "序章",
        classId: "brigand",
        className: "山賊",
        difficulty: "eliwood_normal",
        stats: { hp: 20, str: 5, skl: 1, spd: 3, lck: 2, def: 3, res: 0, con: 10 },
        weapon: { id: "iron_axe", name: "てつの斧", type: "axe", might: 8, weight: 10, hit: 75, crit: 0 },
        description: "リンの最初の敵。山賊の頭。"
    },
    {
        id: "zugu",
        name: "ズグ",
        chapter: "1章",
        classId: "brigand",
        className: "山賊",
        difficulty: "eliwood_normal",
        stats: { hp: 21, str: 6, skl: 1, spd: 3, lck: 2, def: 3, res: 0, con: 10 },
        weapon: { id: "iron_axe", name: "てつの斧", type: "axe", might: 8, weight: 10, hit: 75, crit: 0 },
        description: "サカ平原を荒らす山賊。"
    },
    {
        id: "migal",
        name: "ミガル",
        chapter: "2章",
        classId: "brigand",
        className: "山賊",
        difficulty: "eliwood_normal",
        stats: { hp: 22, str: 5, skl: 2, spd: 4, lck: 1, def: 4, res: 0, con: 11 },
        weapon: { id: "iron_axe", name: "てつの斧", type: "axe", might: 8, weight: 10, hit: 75, crit: 0 },
        description: "盗賊団の一味。"
    },
    {
        id: "carjiga",
        name: "カジガ",
        chapter: "3章",
        classId: "brigand",
        className: "山賊",
        difficulty: "eliwood_normal",
        stats: { hp: 23, str: 6, skl: 2, spd: 4, lck: 1, def: 4, res: 0, con: 11 },
        weapon: { id: "steel_axe", name: "はがねの斧", type: "axe", might: 11, weight: 15, hit: 65, crit: 0 },
        description: "山賊団のリーダー。"
    },
    {
        id: "glass",
        name: "グラス",
        chapter: "4章",
        classId: "mercenary",
        className: "傭兵",
        difficulty: "eliwood_normal",
        stats: { hp: 23, str: 7, skl: 11, spd: 10, lck: 3, def: 6, res: 0, con: 9 },
        weapon: { id: "steel_sword", name: "はがねの剣", type: "sword", might: 8, weight: 10, hit: 75, crit: 0 },
        description: "自らを「剣聖」と名乗る傭兵。"
    },
    {
        id: "bug",
        name: "バグ",
        chapter: "5章",
        classId: "brigand",
        className: "山賊",
        difficulty: "eliwood_normal",
        stats: { hp: 25, str: 7, skl: 3, spd: 5, lck: 0, def: 5, res: 0, con: 12 },
        weapon: { id: "steel_axe", name: "はがねの斧", type: "axe", might: 11, weight: 15, hit: 65, crit: 0 },
        description: "山賊。"
    },
    {
        id: "bool",
        name: "ブール",
        chapter: "6章",
        classId: "knight",
        className: "アーマーナイト",
        difficulty: "eliwood_normal",
        stats: { hp: 22, str: 8, skl: 4, spd: 2, lck: 3, def: 10, res: 0, con: 13 },
        weapon: { id: "iron_lance", name: "てつのやり", type: "lance", might: 7, weight: 8, hit: 80, crit: 0 },
        description: "キアラン城を守る兵士。"
    },
    {
        id: "heintz",
        name: "ハインツ",
        chapter: "7章",
        classId: "shaman",
        className: "シャーマン",
        difficulty: "eliwood_normal",
        stats: { hp: 23, str: 8, skl: 7, spd: 6, lck: 2, def: 4, res: 6, con: 7 },
        weapon: { id: "flux", name: "ミィル", type: "dark", might: 7, weight: 8, hit: 80, crit: 0 },
        description: "黒い牙の一員。闇魔道士。"
    },
    {
        id: "yogi",
        name: "ヨギ",
        chapter: "7章外伝",
        classId: "brigand",
        className: "山賊",
        difficulty: "eliwood_normal",
        stats: { hp: 27, str: 8, skl: 3, spd: 5, lck: 0, def: 5, res: 0, con: 12 },
        weapon: { id: "steel_axe", name: "はがねの斧", type: "axe", might: 11, weight: 15, hit: 65, crit: 0 },
        description: "山賊の頭。"
    },
    {
        id: "eagler",
        name: "イーグラー",
        chapter: "9章",
        classId: "paladin",
        className: "パラディン",
        difficulty: "eliwood_normal",
        stats: { hp: 30, str: 12, skl: 9, spd: 8, lck: 5, def: 9, res: 6, con: 11 },
        weapon: { id: "silver_lance", name: "ぎんのやり", type: "lance", might: 14, weight: 10, hit: 75, crit: 0 },
        description: "ラウス侯に仕える騎士。リンの祖父を狙う。"
    },
    {
        id: "lundgren",
        name: "ラングレン",
        chapter: "10章",
        classId: "general",
        className: "ジェネラル",
        difficulty: "eliwood_normal",
        stats: { hp: 33, str: 13, skl: 7, spd: 4, lck: 6, def: 15, res: 7, con: 14 },
        weapon: { id: "silver_lance", name: "ぎんのやり", type: "lance", might: 14, weight: 10, hit: 75, crit: 0 },
        description: "リンの大叔父。キアラン侯位を狙う。"
    },

    // ========================================
    // エリウッド編 ノーマル
    // ========================================
    {
        id: "groznyi_en",
        name: "グロズニイ",
        chapter: "11章",
        classId: "brigand",
        className: "山賊",
        difficulty: "eliwood_normal",
        stats: { hp: 28, str: 9, skl: 3, spd: 5, lck: 2, def: 5, res: 0, con: 12 },
        weapon: { id: "steel_axe", name: "はがねの斧", type: "axe", might: 11, weight: 15, hit: 65, crit: 0 },
        description: "ラウス領の山賊頭。"
    },
    {
        id: "boies_en",
        name: "ボイエス",
        chapter: "12章",
        classId: "knight",
        className: "アーマーナイト",
        difficulty: "eliwood_normal",
        stats: { hp: 26, str: 10, skl: 4, spd: 2, lck: 3, def: 12, res: 2, con: 14 },
        weapon: { id: "steel_lance", name: "はがねのやり", type: "lance", might: 10, weight: 13, hit: 70, crit: 0 },
        description: "サンタルーズ城を守る重騎士。"
    },
    {
        id: "puzon",
        name: "ピュゾン",
        chapter: "13章外伝",
        classId: "pirate",
        className: "海賊",
        difficulty: "eliwood_normal",
        stats: { hp: 32, str: 10, skl: 5, spd: 7, lck: 2, def: 6, res: 0, con: 11 },
        weapon: { id: "steel_axe", name: "はがねの斧", type: "axe", might: 11, weight: 15, hit: 65, crit: 0 },
        description: "海賊の頭。"
    },
    {
        id: "erik",
        name: "エリック",
        chapter: "14章",
        classId: "cavalier",
        className: "ソシアルナイト",
        difficulty: "eliwood_normal",
        stats: { hp: 28, str: 10, skl: 7, spd: 8, lck: 5, def: 8, res: 4, con: 10 },
        weapon: { id: "steel_lance", name: "はがねのやり", type: "lance", might: 10, weight: 13, hit: 70, crit: 0 },
        description: "ラウス侯の息子。エリウッドの幼馴染。"
    },
    {
        id: "sealen",
        name: "シーレン",
        chapter: "15章",
        classId: "nomadtrooper",
        className: "遊牧騎兵",
        difficulty: "eliwood_normal",
        stats: { hp: 30, str: 11, skl: 10, spd: 12, lck: 4, def: 8, res: 5, con: 8 },
        weapon: { id: "steel_bow", name: "はがねの弓", type: "bow", might: 9, weight: 9, hit: 70, crit: 0 },
        description: "サカ族の戦士。"
    },
    {
        id: "bauker_en",
        name: "ボイカー",
        chapter: "16章",
        classId: "knight",
        className: "アーマーナイト",
        difficulty: "eliwood_normal",
        stats: { hp: 28, str: 10, skl: 4, spd: 2, lck: 3, def: 12, res: 2, con: 14 },
        weapon: { id: "killer_lance", name: "キラーランス", type: "lance", might: 10, weight: 9, hit: 70, crit: 30 },
        description: "ラウス侯に仕える重騎士。"
    },
    {
        id: "bernard_en",
        name: "ベルナルド",
        chapter: "17章",
        classId: "general",
        className: "ジェネラル",
        difficulty: "eliwood_normal",
        stats: { hp: 34, str: 13, skl: 9, spd: 5, lck: 4, def: 16, res: 8, con: 15 },
        weapon: { id: "silver_lance", name: "ぎんのやり", type: "lance", might: 14, weight: 10, hit: 75, crit: 0 },
        description: "カアトレー城を守る将軍。"
    },
    {
        id: "damian_en",
        name: "ダミアン",
        chapter: "18章",
        classId: "paladin",
        className: "パラディン",
        difficulty: "eliwood_normal",
        stats: { hp: 34, str: 12, skl: 7, spd: 5, lck: 2, def: 14, res: 13, con: 11 },
        weapon: { id: "killing_edge", name: "キルソード", type: "sword", might: 9, weight: 7, hit: 75, crit: 30 },
        description: "黒い牙の一員。"
    },
    {
        id: "cameron",
        name: "キャメロン",
        chapter: "18章外伝",
        classId: "sniper",
        className: "スナイパー",
        difficulty: "eliwood_normal",
        stats: { hp: 33, str: 13, skl: 14, spd: 12, lck: 5, def: 9, res: 7, con: 9 },
        weapon: { id: "killer_bow", name: "キラーボウ", type: "bow", might: 9, weight: 7, hit: 75, crit: 30 },
        description: "黒い牙の一員。"
    },
    {
        id: "oleg",
        name: "オレグ",
        chapter: "19章",
        classId: "warrior",
        className: "ウォーリア",
        difficulty: "eliwood_normal",
        stats: { hp: 40, str: 15, skl: 9, spd: 9, lck: 3, def: 9, res: 2, con: 13 },
        weapon: { id: "killer_axe", name: "キラーアクス", type: "axe", might: 11, weight: 11, hit: 65, crit: 30 },
        description: "海賊の頭。盗んだ財宝を守る。"
    },
    {
        id: "eubans",
        name: "ユーバンス",
        chapter: "20章",
        classId: "hero",
        className: "勇者",
        difficulty: "eliwood_normal",
        stats: { hp: 38, str: 15, skl: 17, spd: 14, lck: 7, def: 11, res: 5, con: 11 },
        weapon: { id: "killing_edge", name: "キルソード", type: "sword", might: 9, weight: 7, hit: 75, crit: 30 },
        description: "傭兵団の団長。エリウッドたちを狙う。"
    },
    {
        id: "uhai",
        name: "ウハイ",
        chapter: "21章",
        classId: "nomadtrooper",
        className: "遊牧騎兵",
        difficulty: "eliwood_normal",
        stats: { hp: 35, str: 14, skl: 17, spd: 16, lck: 9, def: 10, res: 9, con: 9 },
        weapon: { id: "killer_bow", name: "キラーボウ", type: "bow", might: 9, weight: 7, hit: 75, crit: 30 },
        description: "四牙のひとり。「疾風」の異名を持つ。"
    },
    {
        id: "aion_en",
        name: "エイオン",
        chapter: "22章",
        classId: "wyvern",
        className: "ドラゴンナイト",
        difficulty: "eliwood_normal",
        stats: { hp: 36, str: 13, skl: 9, spd: 9, lck: 3, def: 14, res: 2, con: 12 },
        weapon: { id: "killer_lance", name: "キラーランス", type: "lance", might: 10, weight: 9, hit: 70, crit: 30 },
        description: "ベルン竜騎士団の将。"
    },
    {
        id: "lloyd_en",
        name: "ロイド",
        chapter: "23章",
        classId: "swordmaster",
        className: "ソードマスター",
        difficulty: "eliwood_normal",
        stats: { hp: 41, str: 19, skl: 21, spd: 22, lck: 16, def: 9, res: 16, con: 9 },
        weapon: { id: "light_brand", name: "ひかりの剣", type: "sword", might: 9, weight: 9, hit: 70, crit: 0 },
        description: "四牙のリーダー格。「白狼」の異名を持つ。"
    },
    {
        id: "linus_en",
        name: "ライナス",
        chapter: "24章",
        classId: "hero",
        className: "勇者",
        difficulty: "eliwood_normal",
        stats: { hp: 45, str: 22, skl: 20, spd: 15, lck: 14, def: 15, res: 13, con: 14 },
        weapon: { id: "brave_axe", name: "ゆうしゃの斧", type: "axe", might: 10, weight: 16, hit: 65, crit: 0 },
        description: "四牙のひとり。「狂犬」の異名を持つ。ロイドの弟。"
    },
    {
        id: "pascal",
        name: "パスカル",
        chapter: "25章",
        classId: "paladin",
        className: "パラディン",
        difficulty: "eliwood_normal",
        stats: { hp: 40, str: 15, skl: 14, spd: 13, lck: 9, def: 13, res: 11, con: 12 },
        weapon: { id: "silver_lance", name: "ぎんのやり", type: "lance", might: 14, weight: 10, hit: 75, crit: 0 },
        description: "ベルンの貴族。ソーニャに加担する。"
    },
    {
        id: "kenneth_en",
        name: "ケネス",
        chapter: "26章",
        classId: "bishop",
        className: "司祭",
        difficulty: "eliwood_normal",
        stats: { hp: 41, str: 20, skl: 18, spd: 16, lck: 6, def: 10, res: 22, con: 10 },
        weapon: { id: "aura", name: "アルジローレ", type: "light", might: 12, weight: 15, hit: 85, crit: 15 },
        description: "黒い牙に加担した司祭。"
    },
    {
        id: "jerme_en",
        name: "ジェルメ",
        chapter: "26章外伝",
        classId: "assassin",
        className: "アサシン",
        difficulty: "eliwood_normal",
        stats: { hp: 46, str: 19, skl: 20, spd: 20, lck: 10, def: 11, res: 15, con: 6 },
        weapon: { id: "light_brand", name: "ひかりの剣", type: "sword", might: 9, weight: 9, hit: 70, crit: 0 },
        description: "黒い牙の暗殺者。狂気に満ちた殺人鬼。"
    },
    {
        id: "ursula_en",
        name: "ウルスラ",
        chapter: "27章",
        classId: "valkyrie",
        className: "ヴァルキュリア",
        difficulty: "eliwood_normal",
        stats: { hp: 36, str: 18, skl: 19, spd: 22, lck: 12, def: 12, res: 28, con: 7 },
        weapon: { id: "elfire", name: "エルファイアー", type: "anima", might: 10, weight: 10, hit: 85, crit: 0 },
        description: "四牙のひとり。「蒼鴉」の異名を持つ魔道騎士。"
    },
    {
        id: "maxime_en",
        name: "マクシム",
        chapter: "27章",
        classId: "paladin",
        className: "パラディン",
        difficulty: "eliwood_normal",
        stats: { hp: 40, str: 15, skl: 14, spd: 16, lck: 5, def: 10, res: 16, con: 11 },
        weapon: { id: "silver_lance", name: "ぎんのやり", type: "lance", might: 14, weight: 10, hit: 75, crit: 0 },
        description: "黒い牙に加担した騎士。"
    },
    {
        id: "sonia_en",
        name: "ソーニャ",
        chapter: "27章外伝",
        classId: "sage",
        className: "賢者",
        difficulty: "eliwood_normal",
        stats: { hp: 44, str: 20, skl: 20, spd: 21, lck: 0, def: 20, res: 24, con: 7 },
        weapon: { id: "fimbulvetr", name: "フィンブル", type: "anima", might: 13, weight: 12, hit: 80, crit: 0 },
        description: "ネルガルの腹心。モルフ。"
    },
    {
        id: "lloyd2_en",
        name: "ロイド",
        chapter: "28章",
        classId: "swordmaster",
        className: "ソードマスター",
        difficulty: "eliwood_normal",
        stats: { hp: 52, str: 21, skl: 25, spd: 24, lck: 16, def: 16, res: 20, con: 9 },
        weapon: { id: "rune_sword", name: "ルーンソード", type: "sword", might: 12, weight: 11, hit: 65, crit: 0 },
        description: "モルフと化したロイド。"
    },
    {
        id: "linus2_en",
        name: "ライナス",
        chapter: "28章",
        classId: "hero",
        className: "勇者",
        difficulty: "eliwood_normal",
        stats: { hp: 58, str: 25, skl: 22, spd: 18, lck: 14, def: 20, res: 16, con: 14 },
        weapon: { id: "rune_sword", name: "ルーンソード", type: "sword", might: 12, weight: 11, hit: 65, crit: 0 },
        description: "モルフと化したライナス。"
    },
    {
        id: "georg_en",
        name: "ゲオルグ",
        chapter: "29章",
        classId: "berserker",
        className: "狂戦士",
        difficulty: "eliwood_normal",
        stats: { hp: 60, str: 28, skl: 19, spd: 16, lck: 0, def: 19, res: 21, con: 15 },
        weapon: { id: "tomahawk", name: "トマホーク", type: "axe", might: 13, weight: 14, hit: 65, crit: 0 },
        description: "モルフの戦士。"
    },
    {
        id: "limstella_en",
        name: "リムステラ",
        chapter: "30章",
        classId: "sage",
        className: "賢者",
        difficulty: "eliwood_normal",
        stats: { hp: 68, str: 25, skl: 22, spd: 20, lck: 0, def: 25, res: 28, con: 7 },
        weapon: { id: "fimbulvetr", name: "フィンブル", type: "anima", might: 13, weight: 12, hit: 80, crit: 0 },
        description: "ネルガルが作り出したモルフ。感情を持たない。"
    },
    {
        id: "nergal_en",
        name: "ネルガル",
        chapter: "終章",
        classId: "darkdruid",
        className: "ダークドルイド",
        difficulty: "eliwood_normal",
        stats: { hp: 50, str: 22, skl: 18, spd: 16, lck: 12, def: 16, res: 23, con: 10 },
        weapon: { id: "ereshkigal", name: "エレシュキガル", type: "dark", might: 20, weight: 18, hit: 95, crit: 10 },
        description: "全ての黒幕。竜の力「エーギル」を求める闇魔道士。"
    },
    {
        id: "dragon_en",
        name: "火竜",
        chapter: "終章",
        classId: "firedragon",
        className: "火竜",
        difficulty: "eliwood_normal",
        stats: { hp: 120, str: 25, skl: 18, spd: 10, lck: 8, def: 22, res: 28, con: 25 },
        weapon: { id: "flametongue", name: "火のブレス", type: "dragon", might: 18, weight: 0, hit: 90, crit: 0 },
        description: "ネルガルが呼び出した火竜。烈火の剣の最後の敵。"
    },

    // ========================================
    // ヘクトル編 ハード
    // ========================================
    {
        id: "wire_hh",
        name: "ワイア",
        chapter: "11章",
        classId: "brigand",
        className: "山賊",
        difficulty: "hector_hard",
        stats: { hp: 32, str: 11, skl: 5, spd: 7, lck: 3, def: 7, res: 0, con: 13 },
        weapon: { id: "steel_axe", name: "はがねの斧", type: "axe", might: 11, weight: 15, hit: 65, crit: 0 },
        description: "ヘクトル編11章のボス。"
    },
    {
        id: "groznyi_hh",
        name: "グロズニイ",
        chapter: "12章",
        classId: "brigand",
        className: "山賊",
        difficulty: "hector_hard",
        stats: { hp: 35, str: 12, skl: 5, spd: 7, lck: 3, def: 7, res: 0, con: 13 },
        weapon: { id: "killer_axe", name: "キラーアクス", type: "axe", might: 11, weight: 11, hit: 65, crit: 30 },
        description: "ラウス領の山賊頭。"
    },
    {
        id: "boies_hh",
        name: "ボイエス",
        chapter: "13章",
        classId: "general",
        className: "ジェネラル",
        difficulty: "hector_hard",
        stats: { hp: 36, str: 15, skl: 8, spd: 5, lck: 4, def: 18, res: 5, con: 16 },
        weapon: { id: "killer_lance", name: "キラーランス", type: "lance", might: 10, weight: 9, hit: 70, crit: 30 },
        description: "サンタルーズ城を守る将軍。"
    },
    {
        id: "puzon_hh",
        name: "ピュゾン",
        chapter: "14章外伝",
        classId: "pirate",
        className: "海賊",
        difficulty: "hector_hard",
        stats: { hp: 38, str: 13, skl: 7, spd: 9, lck: 3, def: 8, res: 0, con: 12 },
        weapon: { id: "killer_axe", name: "キラーアクス", type: "axe", might: 11, weight: 11, hit: 65, crit: 30 },
        description: "海賊の頭。"
    },
    {
        id: "erik_hh",
        name: "エリック",
        chapter: "15章",
        classId: "cavalier",
        className: "ソシアルナイト",
        difficulty: "hector_hard",
        stats: { hp: 34, str: 13, skl: 10, spd: 11, lck: 6, def: 11, res: 6, con: 11 },
        weapon: { id: "silver_lance", name: "ぎんのやり", type: "lance", might: 14, weight: 10, hit: 75, crit: 0 },
        description: "ラウス侯の息子。"
    },
    {
        id: "sealen_hh",
        name: "シーレン",
        chapter: "16章",
        classId: "nomadtrooper",
        className: "遊牧騎兵",
        difficulty: "hector_hard",
        stats: { hp: 36, str: 14, skl: 13, spd: 15, lck: 5, def: 10, res: 7, con: 9 },
        weapon: { id: "killer_bow", name: "キラーボウ", type: "bow", might: 9, weight: 7, hit: 75, crit: 30 },
        description: "サカ族の戦士。"
    },
    {
        id: "bauker_hh",
        name: "ボイカー",
        chapter: "17章",
        classId: "general",
        className: "ジェネラル",
        difficulty: "hector_hard",
        stats: { hp: 38, str: 16, skl: 8, spd: 5, lck: 4, def: 19, res: 5, con: 16 },
        weapon: { id: "spear", name: "スレンドスピア", type: "lance", might: 12, weight: 10, hit: 70, crit: 5 },
        description: "ラウス侯に仕える将軍。"
    },
    {
        id: "fergus_hh",
        name: "ファーガス",
        chapter: "17章外伝",
        classId: "berserker",
        className: "狂戦士",
        difficulty: "hector_hard",
        stats: { hp: 58, str: 24, skl: 15, spd: 14, lck: 15, def: 18, res: 17, con: 15 },
        weapon: { id: "silver_axe", name: "ぎんの斧", type: "axe", might: 15, weight: 12, hit: 70, crit: 0 },
        description: "黒い牙に雇われた傭兵。"
    },
    {
        id: "bernard_hh",
        name: "ベルナルド",
        chapter: "18章",
        classId: "general",
        className: "ジェネラル",
        difficulty: "hector_hard",
        stats: { hp: 42, str: 17, skl: 12, spd: 7, lck: 5, def: 20, res: 11, con: 16 },
        weapon: { id: "spear", name: "スレンドスピア", type: "lance", might: 12, weight: 10, hit: 70, crit: 5 },
        description: "カアトレー城を守る将軍。"
    },
    {
        id: "damian_hh",
        name: "ダミアン",
        chapter: "18章外伝",
        classId: "paladin",
        className: "パラディン",
        difficulty: "hector_hard",
        stats: { hp: 42, str: 16, skl: 10, spd: 8, lck: 3, def: 17, res: 16, con: 12 },
        weapon: { id: "killing_edge", name: "キルソード", type: "sword", might: 9, weight: 7, hit: 75, crit: 30 },
        description: "黒い牙の一員。"
    },
    {
        id: "cameron_hh",
        name: "キャメロン",
        chapter: "19章外伝",
        classId: "sniper",
        className: "スナイパー",
        difficulty: "hector_hard",
        stats: { hp: 40, str: 16, skl: 17, spd: 15, lck: 6, def: 12, res: 9, con: 10 },
        weapon: { id: "killer_bow", name: "キラーボウ", type: "bow", might: 9, weight: 7, hit: 75, crit: 30 },
        description: "黒い牙の一員。"
    },
    {
        id: "oleg_hh",
        name: "オレグ",
        chapter: "20章",
        classId: "warrior",
        className: "ウォーリア",
        difficulty: "hector_hard",
        stats: { hp: 48, str: 19, skl: 12, spd: 12, lck: 4, def: 12, res: 4, con: 14 },
        weapon: { id: "brave_axe", name: "ゆうしゃの斧", type: "axe", might: 10, weight: 16, hit: 65, crit: 0 },
        description: "海賊の頭。"
    },
    {
        id: "eubans_hh",
        name: "ユーバンス",
        chapter: "21章",
        classId: "hero",
        className: "勇者",
        difficulty: "hector_hard",
        stats: { hp: 46, str: 19, skl: 20, spd: 17, lck: 8, def: 14, res: 7, con: 12 },
        weapon: { id: "brave_sword", name: "ゆうしゃの剣", type: "sword", might: 9, weight: 12, hit: 75, crit: 0 },
        description: "傭兵団の団長。"
    },
    {
        id: "uhai_hh",
        name: "ウハイ",
        chapter: "22章",
        classId: "nomadtrooper",
        className: "遊牧騎兵",
        difficulty: "hector_hard",
        stats: { hp: 42, str: 17, skl: 20, spd: 19, lck: 11, def: 13, res: 12, con: 10 },
        weapon: { id: "brave_bow", name: "ゆうしゃの弓", type: "bow", might: 10, weight: 12, hit: 70, crit: 0 },
        description: "四牙のひとり。「疾風」の異名を持つ。"
    },
    {
        id: "aion_hh",
        name: "エイオン",
        chapter: "23章",
        classId: "wyvernlord",
        className: "ドラゴンマスター",
        difficulty: "hector_hard",
        stats: { hp: 44, str: 17, skl: 12, spd: 12, lck: 4, def: 18, res: 4, con: 13 },
        weapon: { id: "spear", name: "スレンドスピア", type: "lance", might: 12, weight: 10, hit: 70, crit: 5 },
        description: "ベルン竜騎士団の将。"
    },
    {
        id: "lloyd_hh",
        name: "ロイド",
        chapter: "24章",
        classId: "swordmaster",
        className: "ソードマスター",
        difficulty: "hector_hard",
        stats: { hp: 48, str: 22, skl: 24, spd: 25, lck: 18, def: 12, res: 19, con: 10 },
        weapon: { id: "silver_sword", name: "ぎんの剣", type: "sword", might: 13, weight: 8, hit: 80, crit: 0 },
        description: "四牙のリーダー格。「白狼」の異名を持つ。"
    },
    {
        id: "linus_hh",
        name: "ライナス",
        chapter: "25章",
        classId: "hero",
        className: "勇者",
        difficulty: "hector_hard",
        stats: { hp: 52, str: 25, skl: 23, spd: 18, lck: 15, def: 18, res: 15, con: 15 },
        weapon: { id: "brave_axe", name: "ゆうしゃの斧", type: "axe", might: 10, weight: 16, hit: 65, crit: 0 },
        description: "四牙のひとり。「狂犬」の異名を持つ。"
    },
    {
        id: "vaida_hh",
        name: "ヴァイダ",
        chapter: "26章",
        classId: "wyvernlord",
        className: "ドラゴンマスター",
        difficulty: "hector_hard",
        stats: { hp: 60, str: 25, skl: 23, spd: 22, lck: 0, def: 25, res: 20, con: 12 },
        weapon: { id: "spear", name: "スレンドスピア", type: "lance", might: 12, weight: 10, hit: 70, crit: 5 },
        description: "元ベルン竜騎士。仲間にもなる。"
    },
    {
        id: "kenneth_hh",
        name: "ケネス",
        chapter: "27章",
        classId: "bishop",
        className: "司祭",
        difficulty: "hector_hard",
        stats: { hp: 48, str: 23, skl: 21, spd: 19, lck: 7, def: 13, res: 25, con: 11 },
        weapon: { id: "aura", name: "アルジローレ", type: "light", might: 12, weight: 15, hit: 85, crit: 15 },
        description: "黒い牙に加担した司祭。"
    },
    {
        id: "jerme_hh",
        name: "ジェルメ",
        chapter: "27章外伝",
        classId: "assassin",
        className: "アサシン",
        difficulty: "hector_hard",
        stats: { hp: 53, str: 22, skl: 23, spd: 23, lck: 11, def: 14, res: 18, con: 7 },
        weapon: { id: "light_brand", name: "ひかりの剣", type: "sword", might: 9, weight: 9, hit: 70, crit: 0 },
        description: "黒い牙の暗殺者。"
    },
    {
        id: "ursula_hh",
        name: "ウルスラ",
        chapter: "28章",
        classId: "valkyrie",
        className: "ヴァルキュリア",
        difficulty: "hector_hard",
        stats: { hp: 42, str: 21, skl: 22, spd: 25, lck: 13, def: 15, res: 31, con: 8 },
        weapon: { id: "elfire", name: "エルファイアー", type: "anima", might: 10, weight: 10, hit: 85, crit: 0 },
        description: "四牙のひとり。「蒼鴉」の異名を持つ。"
    },
    {
        id: "maxime_hh",
        name: "マクシム",
        chapter: "28章",
        classId: "paladin",
        className: "パラディン",
        difficulty: "hector_hard",
        stats: { hp: 46, str: 18, skl: 17, spd: 19, lck: 6, def: 13, res: 19, con: 12 },
        weapon: { id: "silver_lance", name: "ぎんのやり", type: "lance", might: 14, weight: 10, hit: 75, crit: 0 },
        description: "黒い牙に加担した騎士。"
    },
    {
        id: "sonia_hh",
        name: "ソーニャ",
        chapter: "28章外伝",
        classId: "sage",
        className: "賢者",
        difficulty: "hector_hard",
        stats: { hp: 51, str: 23, skl: 23, spd: 24, lck: 0, def: 23, res: 27, con: 8 },
        weapon: { id: "fimbulvetr", name: "フィンブル", type: "anima", might: 13, weight: 12, hit: 80, crit: 0 },
        description: "ネルガルの腹心。モルフ。"
    },
    {
        id: "lloyd2_hh",
        name: "ロイド",
        chapter: "29章",
        classId: "swordmaster",
        className: "ソードマスター",
        difficulty: "hector_hard",
        stats: { hp: 58, str: 24, skl: 28, spd: 27, lck: 18, def: 19, res: 23, con: 10 },
        weapon: { id: "rune_sword", name: "ルーンソード", type: "sword", might: 12, weight: 11, hit: 65, crit: 0 },
        description: "モルフと化したロイド。"
    },
    {
        id: "linus2_hh",
        name: "ライナス",
        chapter: "29章",
        classId: "hero",
        className: "勇者",
        difficulty: "hector_hard",
        stats: { hp: 65, str: 28, skl: 25, spd: 21, lck: 15, def: 23, res: 19, con: 15 },
        weapon: { id: "rune_sword", name: "ルーンソード", type: "sword", might: 12, weight: 11, hit: 65, crit: 0 },
        description: "モルフと化したライナス。"
    },
    {
        id: "kaim_hh",
        name: "カイム",
        chapter: "30章",
        classId: "berserker",
        className: "狂戦士",
        difficulty: "hector_hard",
        stats: { hp: 65, str: 24, skl: 23, spd: 21, lck: 0, def: 19, res: 25, con: 16 },
        weapon: { id: "tomahawk", name: "トマホーク", type: "axe", might: 13, weight: 14, hit: 65, crit: 0 },
        description: "モルフの戦士。"
    },
    {
        id: "denning",
        name: "デニング",
        chapter: "31章",
        classId: "sniper",
        className: "スナイパー",
        difficulty: "hector_hard",
        stats: { hp: 50, str: 22, skl: 26, spd: 23, lck: 0, def: 18, res: 20, con: 12 },
        weapon: { id: "brave_bow", name: "ゆうしゃの弓", type: "bow", might: 10, weight: 12, hit: 70, crit: 0 },
        description: "モルフ。「ネルガルのもとへ参れ」としか話さない。"
    },
    {
        id: "limstella_hh",
        name: "リムステラ",
        chapter: "32章",
        classId: "sage",
        className: "賢者",
        difficulty: "hector_hard",
        stats: { hp: 75, str: 28, skl: 25, spd: 23, lck: 0, def: 28, res: 31, con: 8 },
        weapon: { id: "fimbulvetr", name: "フィンブル", type: "anima", might: 13, weight: 12, hit: 80, crit: 0 },
        description: "ネルガルが作り出した最高傑作のモルフ。"
    },
    {
        id: "nergal_hh",
        name: "ネルガル",
        chapter: "終章",
        classId: "darkdruid",
        className: "ダークドルイド",
        difficulty: "hector_hard",
        stats: { hp: 65, str: 28, skl: 24, spd: 22, lck: 16, def: 22, res: 28, con: 11 },
        weapon: { id: "ereshkigal", name: "エレシュキガル", type: "dark", might: 20, weight: 18, hit: 95, crit: 10 },
        description: "全ての黒幕。竜の力「エーギル」を求める闇魔道士。"
    },
    {
        id: "dragon_hh",
        name: "火竜",
        chapter: "終章",
        classId: "firedragon",
        className: "火竜",
        difficulty: "hector_hard",
        stats: { hp: 150, str: 32, skl: 24, spd: 14, lck: 12, def: 28, res: 35, con: 25 },
        weapon: { id: "flametongue", name: "火のブレス", type: "dragon", might: 18, weight: 0, hit: 90, crit: 0 },
        description: "ネルガルが呼び出した火竜。烈火の剣の最後の敵。"
    }
];

// ボスの総数
const TOTAL_BOSSES = BOSSES.length;

// 章でボスを検索
function getBossesByChapter(chapter) {
    return BOSSES.filter(boss => boss.chapter === chapter);
}

// IDでボスを検索
function getBossById(id) {
    return BOSSES.find(boss => boss.id === id);
}

// 難易度でボスを検索
function getBossesByDifficulty(difficulty) {
    return BOSSES.filter(boss => boss.difficulty === difficulty);
}
