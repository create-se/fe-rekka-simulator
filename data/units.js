/**
 * FE烈火の剣 味方ユニットデータ
 * ユニット名と上級クラス、成長率の紐付け
 * 参考: モックアップ/烈火の剣ダメージ計算/data.js
 */

const UNITS = [
    // ===== 主人公 =====
    {
        id: "lyn", name: "リン", classId: "lord_lyn", className: "ブレイドロード", defaultWeapon: "sol_katti",
        gender: "female", advancedClassName: "ブレイドロード",
        baseLevel: 4, baseClass: "ロード(l)",
        baseStats: { hp: 18, str: 5, skl: 10, spd: 11, lck: 5, def: 2, res: 0, con: 5 },
        growthRates: { hp: 0.70, str: 0.40, skl: 0.60, spd: 0.60, lck: 0.55, def: 0.20, res: 0.30 },
        ccBonus: { hp: 3, str: 2, skl: 2, spd: 0, lck: 0, def: 3, res: 5, con: 1 },
        ccFlag: 1 // 0=初期上級職, 1=クラスチェンジ可能
    },
    {
        id: "eliwood", name: "エリウッド", classId: "lord_eliwood", className: "ロードナイト", defaultWeapon: "durandal",
        gender: "male", advancedClassName: "ロードナイト",
        baseLevel: 1, baseClass: "ロード(e)",
        baseStats: { hp: 18, str: 5, skl: 5, spd: 7, lck: 7, def: 5, res: 0, con: 7 },
        growthRates: { hp: 0.80, str: 0.45, skl: 0.50, spd: 0.40, lck: 0.45, def: 0.30, res: 0.35 },
        ccBonus: { hp: 4, str: 2, skl: 0, spd: 1, lck: 0, def: 1, res: 3, con: 2 },
        ccFlag: 1
    },
    {
        id: "hector", name: "ヘクトル", classId: "lord_hector", className: "グレートロード", defaultWeapon: "armads",
        gender: "male", advancedClassName: "グレートロード",
        baseLevel: 1, baseClass: "ロード(h)",
        baseStats: { hp: 19, str: 7, skl: 4, spd: 5, lck: 3, def: 8, res: 0, con: 13 },
        growthRates: { hp: 0.90, str: 0.60, skl: 0.45, spd: 0.35, lck: 0.30, def: 0.50, res: 0.25 },
        ccBonus: { hp: 3, str: 0, skl: 2, spd: 3, lck: 0, def: 1, res: 5, con: 2 },
        ccFlag: 1
    },
    
    // ===== 剣士系 =====
    {
        id: "guy", name: "ギィ", classId: "swordmaster", className: "ソードマスター", defaultWeapon: "killing_edge",
        gender: "male", advancedClassName: "ソードマスター(男)",
        baseLevel: 3, baseClass: "剣士",
        baseStats: { hp: 21, str: 6, skl: 11, spd: 11, lck: 5, def: 5, res: 0, con: 5 },
        growthRates: { hp: 0.75, str: 0.30, skl: 0.50, spd: 0.70, lck: 0.45, def: 0.15, res: 0.25 },
        ccBonus: { hp: 5, str: 2, skl: 0, spd: 0, lck: 0, def: 2, res: 1, con: 1 },
        ccFlag: 1
    },
    {
        id: "karel", name: "カレル", classId: "swordmaster", className: "ソードマスター", defaultWeapon: "wo_dao",
        gender: "male", advancedClassName: "ソードマスター(男)",
        baseLevel: 8, baseClass: "ソードマスター(男)",
        baseStats: { hp: 31, str: 16, skl: 23, spd: 20, lck: 15, def: 13, res: 12, con: 9 },
        growthRates: { hp: 0.70, str: 0.30, skl: 0.50, spd: 0.50, lck: 0.30, def: 0.10, res: 0.15 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    {
        id: "raven", name: "レイヴァン", classId: "hero", className: "勇者", defaultWeapon: "brave_sword",
        gender: "male", advancedClassName: "勇者",
        baseLevel: 5, baseClass: "傭兵",
        baseStats: { hp: 25, str: 8, skl: 11, spd: 13, lck: 2, def: 5, res: 1, con: 8 },
        growthRates: { hp: 0.85, str: 0.55, skl: 0.40, spd: 0.45, lck: 0.35, def: 0.25, res: 0.15 },
        ccBonus: { hp: 4, str: 0, skl: 2, spd: 2, lck: 0, def: 2, res: 2, con: 1 },
        ccFlag: 1
    },
    {
        id: "harken", name: "ハーケン", classId: "hero", className: "勇者", defaultWeapon: "brave_sword",
        gender: "male", advancedClassName: "勇者",
        baseLevel: 8, baseClass: "勇者",
        baseStats: { hp: 38, str: 21, skl: 20, spd: 17, lck: 12, def: 15, res: 10, con: 11 },
        growthRates: { hp: 0.80, str: 0.35, skl: 0.30, spd: 0.40, lck: 0.20, def: 0.30, res: 0.25 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    
    // ===== 騎兵系 =====
    {
        id: "kent", name: "ケント", classId: "paladin", className: "パラディン", defaultWeapon: "silver_lance",
        gender: "male", advancedClassName: "パラディン(男)",
        baseLevel: 5, baseClass: "ソシアルナイト",
        baseStats: { hp: 23, str: 8, skl: 7, spd: 8, lck: 4, def: 6, res: 1, con: 9 },
        growthRates: { hp: 0.85, str: 0.40, skl: 0.50, spd: 0.45, lck: 0.20, def: 0.25, res: 0.25 },
        ccBonus: { hp: 2, str: 1, skl: 1, spd: 1, lck: 0, def: 2, res: 1, con: 2 },
        ccFlag: 1
    },
    {
        id: "sain", name: "セイン", classId: "paladin", className: "パラディン", defaultWeapon: "silver_lance",
        gender: "male", advancedClassName: "パラディン(男)",
        baseLevel: 4, baseClass: "ソシアルナイト",
        baseStats: { hp: 22, str: 9, skl: 5, spd: 7, lck: 5, def: 7, res: 0, con: 9 },
        growthRates: { hp: 0.80, str: 0.60, skl: 0.35, spd: 0.40, lck: 0.35, def: 0.20, res: 0.20 },
        ccBonus: { hp: 2, str: 1, skl: 1, spd: 1, lck: 0, def: 2, res: 1, con: 2 },
        ccFlag: 1
    },
    {
        id: "lowen", name: "ローウェン", classId: "paladin", className: "パラディン", defaultWeapon: "silver_lance",
        gender: "male", advancedClassName: "パラディン(男)",
        baseLevel: 2, baseClass: "ソシアルナイト",
        baseStats: { hp: 23, str: 7, skl: 5, spd: 7, lck: 3, def: 7, res: 0, con: 10 },
        growthRates: { hp: 0.90, str: 0.30, skl: 0.30, spd: 0.30, lck: 0.50, def: 0.40, res: 0.30 },
        ccBonus: { hp: 2, str: 1, skl: 1, spd: 1, lck: 0, def: 2, res: 1, con: 2 },
        ccFlag: 1
    },
    {
        id: "marcus", name: "マーカス", classId: "paladin", className: "パラディン", defaultWeapon: "silver_lance",
        gender: "male", advancedClassName: "パラディン(男)",
        baseLevel: 1, baseClass: "パラディン(男)",
        baseStats: { hp: 31, str: 15, skl: 15, spd: 11, lck: 8, def: 10, res: 8, con: 11 },
        growthRates: { hp: 0.65, str: 0.30, skl: 0.50, spd: 0.25, lck: 0.30, def: 0.15, res: 0.35 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    {
        id: "isadora", name: "イサドラ", classId: "paladin", className: "パラディン", defaultWeapon: "silver_sword",
        gender: "female", advancedClassName: "パラディン(女)",
        baseLevel: 1, baseClass: "パラディン(女)",
        baseStats: { hp: 28, str: 13, skl: 12, spd: 16, lck: 10, def: 8, res: 6, con: 6 },
        growthRates: { hp: 0.75, str: 0.30, skl: 0.35, spd: 0.50, lck: 0.45, def: 0.20, res: 0.25 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    
    // ===== 重装系 =====
    {
        id: "oswin", name: "オズイン", classId: "general", className: "ジェネラル", defaultWeapon: "silver_lance",
        gender: "male", advancedClassName: "ジェネラル",
        baseLevel: 9, baseClass: "アーマーナイト",
        baseStats: { hp: 28, str: 13, skl: 9, spd: 5, lck: 3, def: 13, res: 3, con: 14 },
        growthRates: { hp: 0.90, str: 0.40, skl: 0.30, spd: 0.30, lck: 0.35, def: 0.55, res: 0.30 },
        ccBonus: { hp: 4, str: 2, skl: 2, spd: 3, lck: 0, def: 2, res: 3, con: 2 },
        ccFlag: 1
    },
    {
        id: "wallace", name: "ウォレス", classId: "general", className: "ジェネラル", defaultWeapon: "silver_lance",
        gender: "male", advancedClassName: "ジェネラル",
        baseLevel: 12, baseClass: "ジェネラル",
        baseStats: { hp: 30, str: 13, skl: 7, spd: 5, lck: 10, def: 15, res: 2, con: 13 },
        growthRates: { hp: 0.70, str: 0.45, skl: 0.40, spd: 0.20, lck: 0.30, def: 0.35, res: 0.35 },
        ccBonus: { hp: 4, str: 2, skl: 2, spd: 3, lck: 0, def: 2, res: 3, con: 2 },
        ccFlag: 0
    },
    
    // ===== 斧系 =====
    {
        id: "dorcas", name: "ドルカス", classId: "warrior", className: "ウォーリア", defaultWeapon: "silver_axe",
        gender: "male", advancedClassName: "ウォーリアー",
        baseLevel: 3, baseClass: "戦士",
        baseStats: { hp: 30, str: 7, skl: 7, spd: 6, lck: 3, def: 3, res: 0, con: 14 },
        growthRates: { hp: 0.80, str: 0.60, skl: 0.40, spd: 0.20, lck: 0.45, def: 0.25, res: 0.15 },
        ccBonus: { hp: 3, str: 1, skl: 2, spd: 0, lck: 0, def: 3, res: 3, con: 2 },
        ccFlag: 1
    },
    {
        id: "bartre", name: "バアトル", classId: "warrior", className: "ウォーリア", defaultWeapon: "silver_axe",
        gender: "male", advancedClassName: "ウォーリアー",
        baseLevel: 2, baseClass: "戦士",
        baseStats: { hp: 29, str: 9, skl: 5, spd: 3, lck: 4, def: 4, res: 0, con: 13 },
        growthRates: { hp: 0.85, str: 0.50, skl: 0.35, spd: 0.40, lck: 0.30, def: 0.30, res: 0.25 },
        ccBonus: { hp: 3, str: 1, skl: 2, spd: 0, lck: 0, def: 3, res: 3, con: 2 },
        ccFlag: 1
    },
    {
        id: "hawkeye", name: "ホークアイ", classId: "berserker", className: "狂戦士", defaultWeapon: "killer_axe",
        gender: "male", advancedClassName: "狂戦士",
        baseLevel: 4, baseClass: "狂戦士",
        baseStats: { hp: 50, str: 18, skl: 14, spd: 11, lck: 13, def: 14, res: 10, con: 16 },
        growthRates: { hp: 0.50, str: 0.40, skl: 0.30, spd: 0.25, lck: 0.40, def: 0.20, res: 0.35 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    {
        id: "dart", name: "ダーツ", classId: "berserker", className: "狂戦士", defaultWeapon: "killer_axe",
        gender: "male", advancedClassName: "狂戦士",
        baseLevel: 8, baseClass: "海賊",
        baseStats: { hp: 34, str: 12, skl: 8, spd: 8, lck: 3, def: 6, res: 1, con: 10 },
        growthRates: { hp: 0.70, str: 0.65, skl: 0.20, spd: 0.60, lck: 0.35, def: 0.20, res: 0.15 },
        ccBonus: { hp: 4, str: 1, skl: 1, spd: 1, lck: 0, def: 2, res: 2, con: 3 },
        ccFlag: 1
    },
    
    // ===== 弓系 =====
    {
        id: "rebecca", name: "レベッカ", classId: "sniper", className: "スナイパー", defaultWeapon: "silver_bow",
        gender: "female", advancedClassName: "スナイパー",
        baseLevel: 1, baseClass: "アーチャー(女)",
        baseStats: { hp: 17, str: 4, skl: 5, spd: 6, lck: 4, def: 3, res: 1, con: 5 },
        growthRates: { hp: 0.60, str: 0.40, skl: 0.50, spd: 0.60, lck: 0.50, def: 0.15, res: 0.30 },
        ccBonus: { hp: 3, str: 1, skl: 2, spd: 2, lck: 0, def: 2, res: 3, con: 1 },
        ccFlag: 1
    },
    {
        id: "wil", name: "ウィル", classId: "sniper", className: "スナイパー", defaultWeapon: "silver_bow",
        gender: "male", advancedClassName: "スナイパー",
        baseLevel: 4, baseClass: "アーチャー(男)",
        baseStats: { hp: 21, str: 6, skl: 5, spd: 6, lck: 7, def: 5, res: 1, con: 6 },
        growthRates: { hp: 0.75, str: 0.50, skl: 0.50, spd: 0.40, lck: 0.40, def: 0.20, res: 0.25 },
        ccBonus: { hp: 3, str: 1, skl: 2, spd: 2, lck: 0, def: 2, res: 3, con: 1 },
        ccFlag: 1
    },
    {
        id: "louise", name: "ルイーズ", classId: "sniper", className: "スナイパー", defaultWeapon: "silver_bow",
        gender: "female", advancedClassName: "スナイパー",
        baseLevel: 1, baseClass: "スナイパー",
        baseStats: { hp: 28, str: 12, skl: 14, spd: 17, lck: 16, def: 9, res: 12, con: 6 },
        growthRates: { hp: 0.60, str: 0.40, skl: 0.40, spd: 0.40, lck: 0.30, def: 0.20, res: 0.30 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    {
        id: "rath", name: "ラス", classId: "nomadtrooper", className: "遊牧騎兵", defaultWeapon: "killer_bow",
        gender: "male", advancedClassName: "遊牧騎兵",
        baseLevel: 9, baseClass: "遊牧民",
        baseStats: { hp: 27, str: 9, skl: 10, spd: 11, lck: 5, def: 8, res: 2, con: 7 },
        growthRates: { hp: 0.80, str: 0.50, skl: 0.40, spd: 0.50, lck: 0.30, def: 0.10, res: 0.25 },
        ccBonus: { hp: 3, str: 2, skl: 1, spd: 1, lck: 0, def: 3, res: 3, con: 1 },
        ccFlag: 1
    },
    
    // ===== 飛行系 =====
    {
        id: "florina", name: "フロリーナ", classId: "falcon", className: "ファルコンナイト", defaultWeapon: "silver_lance",
        gender: "female", advancedClassName: "ファルコンナイト",
        baseLevel: 3, baseClass: "ペガサスナイト",
        baseStats: { hp: 18, str: 6, skl: 8, spd: 9, lck: 8, def: 4, res: 5, con: 4 },
        growthRates: { hp: 0.60, str: 0.40, skl: 0.50, spd: 0.55, lck: 0.50, def: 0.15, res: 0.35 },
        ccBonus: { hp: 5, str: 2, skl: 0, spd: 0, lck: 0, def: 2, res: 2, con: 1 },
        ccFlag: 1
    },
    {
        id: "fiora", name: "フィオーラ", classId: "falcon", className: "ファルコンナイト", defaultWeapon: "silver_lance",
        gender: "female", advancedClassName: "ファルコンナイト",
        baseLevel: 7, baseClass: "ペガサスナイト",
        baseStats: { hp: 21, str: 8, skl: 11, spd: 13, lck: 6, def: 6, res: 7, con: 5 },
        growthRates: { hp: 0.70, str: 0.35, skl: 0.60, spd: 0.50, lck: 0.30, def: 0.20, res: 0.50 },
        ccBonus: { hp: 5, str: 2, skl: 0, spd: 0, lck: 0, def: 2, res: 2, con: 1 },
        ccFlag: 1
    },
    {
        id: "farina", name: "ファリナ", classId: "falcon", className: "ファルコンナイト", defaultWeapon: "silver_lance",
        gender: "female", advancedClassName: "ファルコンナイト",
        baseLevel: 12, baseClass: "ペガサスナイト",
        baseStats: { hp: 24, str: 10, skl: 13, spd: 14, lck: 10, def: 10, res: 12, con: 5 },
        growthRates: { hp: 0.75, str: 0.50, skl: 0.40, spd: 0.45, lck: 0.45, def: 0.25, res: 0.30 },
        ccBonus: { hp: 5, str: 2, skl: 0, spd: 0, lck: 0, def: 2, res: 2, con: 1 },
        ccFlag: 1
    },
    {
        id: "heath", name: "ヒース", classId: "wyvernlord", className: "ドラゴンマスター", defaultWeapon: "silver_lance",
        gender: "male", advancedClassName: "ドラゴンマスター(男)",
        baseLevel: 7, baseClass: "ドラゴンナイト",
        baseStats: { hp: 28, str: 11, skl: 8, spd: 7, lck: 7, def: 10, res: 1, con: 9 },
        growthRates: { hp: 0.80, str: 0.50, skl: 0.50, spd: 0.45, lck: 0.20, def: 0.30, res: 0.20 },
        ccBonus: { hp: 4, str: 0, skl: 2, spd: 2, lck: 0, def: 0, res: 2, con: 1 },
        ccFlag: 1
    },
    {
        id: "vaida", name: "ヴァイダ", classId: "wyvernlord", className: "ドラゴンマスター", defaultWeapon: "spear",
        gender: "female", advancedClassName: "ドラゴンマスター(女)",
        baseLevel: 9, baseClass: "ドラゴンマスター(女)",
        baseStats: { hp: 43, str: 20, skl: 19, spd: 13, lck: 11, def: 21, res: 6, con: 12 },
        growthRates: { hp: 0.60, str: 0.45, skl: 0.25, spd: 0.40, lck: 0.30, def: 0.25, res: 0.15 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    
    // ===== 魔道士系 =====
    {
        id: "erk", name: "エルク", classId: "sage", className: "賢者", defaultWeapon: "elfire",
        gender: "male", advancedClassName: "賢者(男)",
        baseLevel: 1, baseClass: "魔道士(男)",
        baseStats: { hp: 17, str: 5, skl: 6, spd: 7, lck: 3, def: 2, res: 4, con: 5 },
        growthRates: { hp: 0.65, str: 0.40, skl: 0.40, spd: 0.50, lck: 0.30, def: 0.20, res: 0.40 },
        ccBonus: { hp: 4, str: 1, skl: 0, spd: 0, lck: 0, def: 3, res: 3, con: 1 },
        ccFlag: 1
    },
    {
        id: "pent", name: "パント", classId: "sage", className: "賢者", defaultWeapon: "elfire",
        gender: "male", advancedClassName: "賢者(男)",
        baseLevel: 6, baseClass: "賢者(男)",
        baseStats: { hp: 33, str: 18, skl: 21, spd: 17, lck: 14, def: 11, res: 16, con: 8 },
        growthRates: { hp: 0.50, str: 0.30, skl: 0.20, spd: 0.40, lck: 0.40, def: 0.30, res: 0.35 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    {
        id: "nino", name: "ニノ", classId: "sage", className: "賢者", defaultWeapon: "elfire",
        gender: "female", advancedClassName: "賢者(女)",
        baseLevel: 5, baseClass: "魔道士(女)",
        baseStats: { hp: 19, str: 7, skl: 8, spd: 11, lck: 10, def: 4, res: 7, con: 3 },
        growthRates: { hp: 0.55, str: 0.50, skl: 0.55, spd: 0.60, lck: 0.45, def: 0.15, res: 0.50 },
        ccBonus: { hp: 4, str: 1, skl: 0, spd: 0, lck: 0, def: 3, res: 3, con: 1 },
        ccFlag: 1
    },
    {
        id: "athos", name: "アトス", classId: "sage", className: "賢者（アーシャード）", defaultWeapon: "forblaze",
        gender: "male", advancedClassName: "大賢者",
        baseLevel: 20, baseClass: "大賢者",
        baseStats: { hp: 40, str: 30, skl: 24, spd: 20, lck: 25, def: 20, res: 28, con: 9 },
        growthRates: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    {
        id: "lucius", name: "ルセア", classId: "bishop", className: "司祭", defaultWeapon: "aura",
        gender: "male", advancedClassName: "司祭(男)",
        baseLevel: 3, baseClass: "修道士",
        baseStats: { hp: 18, str: 7, skl: 6, spd: 10, lck: 2, def: 1, res: 6, con: 6 },
        growthRates: { hp: 0.55, str: 0.60, skl: 0.50, spd: 0.40, lck: 0.20, def: 0.10, res: 0.60 },
        ccBonus: { hp: 3, str: 2, skl: 1, spd: 0, lck: 0, def: 3, res: 2, con: 1 },
        ccFlag: 1
    },
    {
        id: "canas", name: "カナス", classId: "druid", className: "ドルイド", defaultWeapon: "nosferatu",
        gender: "male", advancedClassName: "ドルイド",
        baseLevel: 8, baseClass: "シャーマン",
        baseStats: { hp: 21, str: 10, skl: 9, spd: 8, lck: 7, def: 5, res: 8, con: 7 },
        growthRates: { hp: 0.70, str: 0.45, skl: 0.40, spd: 0.35, lck: 0.25, def: 0.25, res: 0.45 },
        ccBonus: { hp: 4, str: 0, skl: 0, spd: 3, lck: 0, def: 2, res: 2, con: 1 },
        ccFlag: 1
    },
    {
        id: "priscilla", name: "プリシラ", classId: "valkyrie", className: "ヴァルキュリア", defaultWeapon: "elfire",
        gender: "female", advancedClassName: "ヴァルキュリア",
        baseLevel: 3, baseClass: "トルバドール",
        baseStats: { hp: 16, str: 6, skl: 6, spd: 8, lck: 7, def: 3, res: 6, con: 4 },
        growthRates: { hp: 0.45, str: 0.40, skl: 0.50, spd: 0.40, lck: 0.65, def: 0.15, res: 0.50 },
        ccBonus: { hp: 3, str: 2, skl: 1, spd: 0, lck: 0, def: 2, res: 3, con: 1 },
        ccFlag: 1
    },
    
    // ===== 盗賊系 =====
    {
        id: "matthew", name: "マシュー", classId: "assassin", className: "アサシン", defaultWeapon: "killing_edge",
        gender: "male", advancedClassName: "アサシン",
        baseLevel: 2, baseClass: "盗賊",
        baseStats: { hp: 18, str: 4, skl: 4, spd: 11, lck: 2, def: 3, res: 0, con: 7 },
        growthRates: { hp: 0.75, str: 0.30, skl: 0.40, spd: 0.70, lck: 0.50, def: 0.25, res: 0.20 },
        ccBonus: { hp: 3, str: 1, skl: 0, spd: 0, lck: 0, def: 2, res: 2, con: 0 },
        ccFlag: 1
    },
    {
        id: "legault", name: "ラガルト", classId: "assassin", className: "アサシン", defaultWeapon: "killing_edge",
        gender: "male", advancedClassName: "アサシン",
        baseLevel: 12, baseClass: "盗賊",
        baseStats: { hp: 26, str: 8, skl: 11, spd: 15, lck: 10, def: 8, res: 3, con: 9 },
        growthRates: { hp: 0.60, str: 0.25, skl: 0.45, spd: 0.60, lck: 0.60, def: 0.25, res: 0.25 },
        ccBonus: { hp: 3, str: 1, skl: 0, spd: 0, lck: 0, def: 2, res: 2, con: 0 },
        ccFlag: 1
    },
    {
        id: "jaffar", name: "ジャファル", classId: "assassin", className: "アサシン", defaultWeapon: "killing_edge",
        gender: "male", advancedClassName: "アサシン",
        baseLevel: 13, baseClass: "アサシン",
        baseStats: { hp: 34, str: 19, skl: 25, spd: 24, lck: 10, def: 15, res: 11, con: 8 },
        growthRates: { hp: 0.65, str: 0.15, skl: 0.40, spd: 0.35, lck: 0.20, def: 0.30, res: 0.30 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    
    // ===== 踊り子・バード =====
    {
        id: "ninian", name: "ニニアン", classId: "dancer", className: "踊り子", defaultWeapon: "iron_sword",
        gender: "female", advancedClassName: "バード/踊り子",
        baseLevel: 1, baseClass: "バード/踊り子",
        baseStats: { hp: 14, str: 0, skl: 0, spd: 12, lck: 10, def: 5, res: 4, con: 4 },
        growthRates: { hp: 0.85, str: 0.05, skl: 0.05, spd: 0.70, lck: 0.80, def: 0.30, res: 0.70 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    {
        id: "nils", name: "ニルス", classId: "bard", className: "バード", defaultWeapon: null,
        gender: "male", advancedClassName: "バード/踊り子",
        baseLevel: 1, baseClass: "バード/踊り子",
        baseStats: { hp: 14, str: 0, skl: 0, spd: 12, lck: 10, def: 5, res: 4, con: 3 },
        growthRates: { hp: 0.85, str: 0.05, skl: 0.05, spd: 0.70, lck: 0.80, def: 0.30, res: 0.70 },
        ccBonus: { hp: 0, str: 0, skl: 0, spd: 0, lck: 0, def: 0, res: 0, con: 0 },
        ccFlag: 0
    },
    
    // ===== その他 =====
    {
        id: "serra", name: "セーラ", classId: "bishop", className: "司祭", defaultWeapon: "shine",
        gender: "female", advancedClassName: "司祭(女)",
        baseLevel: 1, baseClass: "シスター",
        baseStats: { hp: 17, str: 2, skl: 5, spd: 8, lck: 6, def: 2, res: 5, con: 4 },
        growthRates: { hp: 0.50, str: 0.50, skl: 0.30, spd: 0.40, lck: 0.60, def: 0.15, res: 0.55 },
        ccBonus: { hp: 3, str: 1, skl: 2, spd: 1, lck: 0, def: 2, res: 2, con: 1 },
        ccFlag: 1
    },
];

// ユニットIDでユニットを取得
function getUnitById(id) {
    return UNITS.find(unit => unit.id === id);
}

/**
 * レベルからステータス期待値を計算
 * 参考: VisualStudio/RekkaUnit/RekkaUnit/Unit.vb のCalcStatus関数
 * 
 * @param {Object} unit - ユニットデータ
 * @param {number} level - 現在のレベル
 * @param {boolean} isClassChanged - クラスチェンジ済みかどうか
 * @returns {Object} 計算されたステータス
 */
function calculateExpectedStats(unit, level, isClassChanged) {
    if (!unit || unit.id === 'custom') {
        return null;
    }
    
    const base = unit.baseStats;
    const growth = unit.growthRates;
    const ccBonus = unit.ccBonus;
    
    // レベルアップ回数を計算
    let levelUpCount;
    if (unit.ccFlag === 0 || !isClassChanged) {
        // 初期上級職 or クラスチェンジしていない場合
        levelUpCount = level - unit.baseLevel;
    } else {
        // クラスチェンジ済みの場合（下級職レベル20でCC想定）
        // 現在レベル + 20 - 初期レベル
        levelUpCount = (level + 20) - unit.baseLevel;
    }
    
    // レベルアップ回数が負になる場合は0に
    levelUpCount = Math.max(0, levelUpCount);
    
    // ステータス計算（期待値）
    const stats = {
        hp: Math.floor(base.hp + growth.hp * levelUpCount),
        str: Math.floor(base.str + growth.str * levelUpCount),
        skl: Math.floor(base.skl + growth.skl * levelUpCount),
        spd: Math.floor(base.spd + growth.spd * levelUpCount),
        lck: Math.floor(base.lck + growth.lck * levelUpCount),
        def: Math.floor(base.def + growth.def * levelUpCount),
        res: Math.floor(base.res + growth.res * levelUpCount),
        con: base.con
    };
    
    // クラスチェンジボーナスを加算
    if (isClassChanged && unit.ccFlag === 1) {
        stats.hp += ccBonus.hp;
        stats.str += ccBonus.str;
        stats.skl += ccBonus.skl;
        stats.spd += ccBonus.spd;
        stats.lck += ccBonus.lck;
        stats.def += ccBonus.def;
        stats.res += ccBonus.res;
        stats.con += ccBonus.con;
    }
    
    // クラス上限値を適用
    const caps = getStatCaps(unit, isClassChanged);
    if (caps) {
        stats.hp = Math.min(stats.hp, caps.hp);
        stats.str = Math.min(stats.str, caps.str);
        stats.skl = Math.min(stats.skl, caps.skl);
        stats.spd = Math.min(stats.spd, caps.spd);
        stats.lck = Math.min(stats.lck, caps.lck);
        stats.def = Math.min(stats.def, caps.def);
        stats.res = Math.min(stats.res, caps.res);
    }
    
    return stats;
}

/**
 * クラス上限値データ
 * 参考: モックアップ/烈火の剣ダメージ計算/data.js
 * 男女で上限が異なるクラスは別々に定義
 */
const CLASS_CAPS = {
    // === 下級職（共通：HP60, 他20, 幸運30） ===
    "ロード(e)": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "ロード(h)": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "ロード(l)": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "剣士": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "傭兵": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "ソシアルナイト": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "ペガサスナイト": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "ドラゴンナイト": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "海賊": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "戦士": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "アーマーナイト": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "盗賊": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "アーチャー(男)": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "アーチャー(女)": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "遊牧民": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "シスター": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "トルバドール": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "魔道士(男)": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "魔道士(女)": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "修道士": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    "シャーマン": { hp: 60, str: 20, skl: 20, spd: 20, lck: 30, def: 20, res: 20 },
    
    // === 上級職 ===
    "ロードナイト": { hp: 60, str: 27, skl: 26, spd: 24, lck: 30, def: 23, res: 25 },
    "グレートロード": { hp: 60, str: 30, skl: 24, spd: 24, lck: 30, def: 29, res: 20 },
    "ブレイドロード": { hp: 60, str: 24, skl: 29, spd: 30, lck: 30, def: 22, res: 22 },
    "ソードマスター(男)": { hp: 60, str: 24, skl: 29, spd: 30, lck: 30, def: 22, res: 23 },
    "ソードマスター(女)": { hp: 60, str: 22, skl: 29, spd: 30, lck: 30, def: 22, res: 25 },
    "勇者": { hp: 60, str: 25, skl: 30, spd: 26, lck: 30, def: 25, res: 22 },
    "パラディン(男)": { hp: 60, str: 25, skl: 26, spd: 24, lck: 30, def: 25, res: 25 },
    "パラディン(女)": { hp: 60, str: 23, skl: 27, spd: 25, lck: 30, def: 24, res: 26 },
    "ファルコンナイト": { hp: 60, str: 23, skl: 25, spd: 28, lck: 30, def: 23, res: 26 },
    "ドラゴンマスター(男)": { hp: 60, str: 27, skl: 25, spd: 23, lck: 30, def: 28, res: 22 },
    "ドラゴンマスター(女)": { hp: 60, str: 25, skl: 26, spd: 24, lck: 30, def: 27, res: 23 },
    "狂戦士": { hp: 60, str: 30, skl: 29, spd: 28, lck: 30, def: 23, res: 21 },
    "ウォーリアー": { hp: 60, str: 30, skl: 28, spd: 26, lck: 30, def: 26, res: 22 },
    "ジェネラル": { hp: 60, str: 29, skl: 27, spd: 24, lck: 30, def: 30, res: 25 },
    "アサシン": { hp: 60, str: 20, skl: 30, spd: 30, lck: 30, def: 20, res: 20 },
    "スナイパー": { hp: 60, str: 25, skl: 30, spd: 28, lck: 30, def: 25, res: 23 },
    "遊牧騎兵": { hp: 60, str: 25, skl: 28, spd: 30, lck: 30, def: 24, res: 23 },
    "司祭(男)": { hp: 60, str: 25, skl: 26, spd: 24, lck: 30, def: 22, res: 30 },
    "司祭(女)": { hp: 60, str: 25, skl: 25, spd: 26, lck: 30, def: 21, res: 30 },
    "ヴァルキュリア": { hp: 60, str: 25, skl: 24, spd: 25, lck: 30, def: 24, res: 28 },
    "賢者(男)": { hp: 60, str: 28, skl: 30, spd: 26, lck: 30, def: 21, res: 25 },
    "賢者(女)": { hp: 60, str: 30, skl: 28, spd: 26, lck: 30, def: 21, res: 25 },
    "ドルイド": { hp: 60, str: 29, skl: 26, spd: 26, lck: 30, def: 21, res: 28 },
    "大賢者": { hp: 60, str: 30, skl: 30, spd: 25, lck: 30, def: 20, res: 30 },
    "バード/踊り子": { hp: 60, str: 10, skl: 10, spd: 30, lck: 30, def: 24, res: 26 },
};

/**
 * ユニットのクラス上限値を取得
 * @param {Object} unit - ユニットデータ
 * @param {boolean} isClassChanged - クラスチェンジ済みかどうか
 * @returns {Object|null} 上限値
 */
function getStatCaps(unit, isClassChanged) {
    // カスタムユニットの場合は上限なし
    if (!unit || unit.id === 'custom') {
        return null;
    }
    
    // 使用するクラス名を決定
    let className;
    if (isClassChanged || unit.ccFlag === 0) {
        // CC済み or 初期上級職の場合は上級クラスの上限を使用
        className = unit.advancedClassName || unit.className;
    } else {
        // 下級職の場合は下級クラスの上限を使用
        className = unit.baseClass;
    }
    
    // クラス上限値を取得
    let caps = CLASS_CAPS[className];
    
    // 見つからない場合は汎用的なクラス名で再検索
    if (!caps) {
        // 性別なしのクラス名で試す
        const genericName = className.replace(/\(男\)|\(女\)/g, '').trim();
        caps = CLASS_CAPS[genericName];
    }
    
    return caps || null;
}
