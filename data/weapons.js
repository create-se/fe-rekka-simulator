/**
 * FE烈火の剣 武器データ
 * 参考: rrpg.jp, pegasusknight.com
 */

const WEAPONS = {
    // ===== 剣 =====
    swords: [
        { id: "iron_sword", name: "てつの剣", type: "sword", might: 5, weight: 5, hit: 90, crit: 0, range: [1], rank: "E" },
        { id: "steel_sword", name: "はがねの剣", type: "sword", might: 8, weight: 10, hit: 75, crit: 0, range: [1], rank: "D" },
        { id: "silver_sword", name: "ぎんの剣", type: "sword", might: 13, weight: 8, hit: 80, crit: 0, range: [1], rank: "A" },
        { id: "iron_blade", name: "てつの大剣", type: "sword", might: 9, weight: 12, hit: 70, crit: 0, range: [1], rank: "D" },
        { id: "steel_blade", name: "はがねの大剣", type: "sword", might: 11, weight: 14, hit: 65, crit: 0, range: [1], rank: "C" },
        { id: "silver_blade", name: "ぎんの大剣", type: "sword", might: 14, weight: 13, hit: 60, crit: 0, range: [1], rank: "B" },
        { id: "killing_edge", name: "キルソード", type: "sword", might: 9, weight: 7, hit: 75, crit: 30, range: [1], rank: "C" },
        { id: "wo_dao", name: "倭刀", type: "sword", might: 8, weight: 5, hit: 75, crit: 35, range: [1], rank: "C" },
        { id: "brave_sword", name: "勇者の剣", type: "sword", might: 9, weight: 12, hit: 75, crit: 0, range: [1], rank: "B", brave: true },
        { id: "lancereaver", name: "ランスバスター", type: "sword", might: 9, weight: 11, hit: 75, crit: 5, range: [1], rank: "C", reaver: true },
        { id: "armorslayer", name: "アーマーキラー", type: "sword", might: 8, weight: 11, hit: 80, crit: 0, range: [1], rank: "D", effective: ["armor"] },
        { id: "wyrmslayer", name: "ドラゴンキラー", type: "sword", might: 8, weight: 8, hit: 80, crit: 0, range: [1], rank: "B", effective: ["dragon"] },
        { id: "light_brand", name: "ライトブランド", type: "sword", might: 9, weight: 9, hit: 70, crit: 0, range: [1, 2], rank: "C", magic: true },
        { id: "rune_sword", name: "ルーンソード", type: "sword", might: 12, weight: 11, hit: 65, crit: 0, range: [1, 2], rank: "A", magic: true },
        { id: "mani_katti", name: "マーニ・カティ", type: "sword", might: 8, weight: 3, hit: 80, crit: 20, range: [1], rank: "Prf", effective: ["armor", "cavalry"] },
        { id: "sol_katti", name: "ソール・カティ", type: "sword", might: 12, weight: 14, hit: 95, crit: 25, range: [1], rank: "Prf", effective: ["dragon"] },
        { id: "durandal", name: "デュランダル", type: "sword", might: 17, weight: 16, hit: 90, crit: 0, range: [1], rank: "Prf", bonusStr: 5, effective: ["dragon"] },
        { id: "regal_blade", name: "レイピア", type: "sword", might: 7, weight: 5, hit: 95, crit: 10, range: [1], rank: "Prf", effective: ["armor", "cavalry"] },
    ],

    // ===== 槍 =====
    lances: [
        { id: "iron_lance", name: "てつの槍", type: "lance", might: 7, weight: 8, hit: 80, crit: 0, range: [1], rank: "E" },
        { id: "steel_lance", name: "はがねの槍", type: "lance", might: 10, weight: 13, hit: 70, crit: 0, range: [1], rank: "D" },
        { id: "silver_lance", name: "ぎんの槍", type: "lance", might: 14, weight: 10, hit: 75, crit: 0, range: [1], rank: "A" },
        { id: "javelin", name: "手槍", type: "lance", might: 6, weight: 11, hit: 65, crit: 0, range: [1, 2], rank: "E" },
        { id: "spear", name: "スレンドスピア", type: "lance", might: 10, weight: 10, hit: 70, crit: 0, range: [1, 2], rank: "B" },
        { id: "killer_lance", name: "キラーランス", type: "lance", might: 10, weight: 9, hit: 70, crit: 30, range: [1], rank: "C" },
        { id: "brave_lance", name: "勇者の槍", type: "lance", might: 10, weight: 14, hit: 70, crit: 0, range: [1], rank: "B", brave: true },
        { id: "axereaver", name: "アクスバスター", type: "lance", might: 10, weight: 11, hit: 70, crit: 5, range: [1], rank: "C", reaver: true },
        { id: "horseslayer", name: "ホースキラー", type: "lance", might: 7, weight: 13, hit: 70, crit: 0, range: [1], rank: "D", effective: ["cavalry"] },
        { id: "heavy_spear", name: "つらぬきのやり", type: "lance", might: 9, weight: 14, hit: 70, crit: 0, range: [1], rank: "C", effective: ["armor"] },
        { id: "short_spear", name: "ショートスピア", type: "lance", might: 9, weight: 12, hit: 60, crit: 0, range: [1, 2], rank: "C" },
        { id: "rex_hasta", name: "レクスハスタ", type: "lance", might: 21, weight: 11, hit: 80, crit: 0, range: [1], rank: "S" },
    ],

    // ===== 斧 =====
    axes: [
        { id: "iron_axe", name: "てつの斧", type: "axe", might: 8, weight: 10, hit: 75, crit: 0, range: [1], rank: "E" },
        { id: "steel_axe", name: "はがねの斧", type: "axe", might: 11, weight: 15, hit: 65, crit: 0, range: [1], rank: "D" },
        { id: "silver_axe", name: "ぎんの斧", type: "axe", might: 15, weight: 12, hit: 70, crit: 0, range: [1], rank: "A" },
        { id: "hand_axe", name: "手斧", type: "axe", might: 7, weight: 12, hit: 60, crit: 0, range: [1, 2], rank: "E" },
        { id: "tomahawk", name: "トマホーク", type: "axe", might: 13, weight: 14, hit: 65, crit: 0, range: [1, 2], rank: "A" },
        { id: "killer_axe", name: "キラーアクス", type: "axe", might: 11, weight: 11, hit: 65, crit: 30, range: [1], rank: "C" },
        { id: "brave_axe", name: "勇者の斧", type: "axe", might: 10, weight: 16, hit: 65, crit: 0, range: [1], rank: "B", brave: true },
        { id: "swordreaver", name: "ソードバスター", type: "axe", might: 11, weight: 13, hit: 65, crit: 5, range: [1], rank: "C", reaver: true },
        { id: "swordslayer", name: "ソードキラー", type: "axe", might: 11, weight: 13, hit: 80, crit: 5, range: [1], rank: "C", reaver: true, effective: ["myrmidon", "mercenary", "hero", "swordmaster", "lord_lyn", "blade_lord"] },
        { id: "halberd", name: "ハルバード", type: "axe", might: 10, weight: 12, hit: 60, crit: 0, range: [1], rank: "D", effective: ["cavalry"] },
        { id: "hammer", name: "ハンマー", type: "axe", might: 10, weight: 15, hit: 55, crit: 0, range: [1], rank: "D", effective: ["armor"] },
        { id: "devil_axe", name: "デビルアクス", type: "axe", might: 18, weight: 18, hit: 55, crit: 0, range: [1], rank: "E", devil: true },
        { id: "basilikos", name: "バシリコス", type: "axe", might: 22, weight: 13, hit: 75, crit: 0, range: [1], rank: "S" },
        { id: "armads", name: "アルマーズ", type: "axe", might: 18, weight: 18, hit: 85, crit: 0, range: [1], rank: "Prf", bonusDef: 5, effective: ["dragon"] },
        { id: "wolf_beil", name: "ヴォルフバイル", type: "axe", might: 10, weight: 10, hit: 75, crit: 5, range: [1], rank: "Prf", effective: ["armor", "cavalry"] },
    ],

    // ===== 弓 =====
    bows: [
        { id: "iron_bow", name: "てつの弓", type: "bow", might: 6, weight: 5, hit: 85, crit: 0, range: [2], rank: "E", effective: ["flying"] },
        { id: "steel_bow", name: "はがねの弓", type: "bow", might: 9, weight: 9, hit: 70, crit: 0, range: [2], rank: "D", effective: ["flying"] },
        { id: "silver_bow", name: "ぎんの弓", type: "bow", might: 13, weight: 6, hit: 75, crit: 0, range: [2], rank: "A", effective: ["flying"] },
        { id: "killer_bow", name: "キラーボウ", type: "bow", might: 9, weight: 7, hit: 75, crit: 30, range: [2], rank: "C", effective: ["flying"] },
        { id: "brave_bow", name: "勇者の弓", type: "bow", might: 10, weight: 12, hit: 70, crit: 0, range: [2], rank: "B", brave: true, effective: ["flying"] },
        { id: "short_bow", name: "ショートボウ", type: "bow", might: 5, weight: 3, hit: 85, crit: 10, range: [2], rank: "E", effective: ["flying"] },
        { id: "longbow", name: "ロングボウ", type: "bow", might: 5, weight: 10, hit: 65, crit: 0, range: [2, 3], rank: "D", effective: ["flying"] },
        { id: "rienfleche", name: "リーンフレシュ", type: "bow", might: 20, weight: 9, hit: 80, crit: 0, range: [2], rank: "S", effective: ["flying"] },
    ],

    // ===== 理魔法 =====
    anima: [
        { id: "fire", name: "ファイアー", type: "anima", might: 5, weight: 4, hit: 90, crit: 0, range: [1, 2], rank: "E" },
        { id: "thunder", name: "サンダー", type: "anima", might: 8, weight: 6, hit: 80, crit: 5, range: [1, 2], rank: "D" },
        { id: "elfire", name: "エルファイアー", type: "anima", might: 10, weight: 10, hit: 85, crit: 0, range: [1, 2], rank: "C" },
        { id: "bolting", name: "ボルティング", type: "anima", might: 12, weight: 20, hit: 60, crit: 0, range: [3, 10], rank: "A" },
        { id: "fimbulvetr", name: "フィンブル", type: "anima", might: 13, weight: 12, hit: 80, crit: 0, range: [1, 2], rank: "A" },
        { id: "excalibur", name: "エクスカリバー", type: "anima", might: 18, weight: 13, hit: 90, crit: 10, range: [1, 2], rank: "S", effective: ["flying"] },
        { id: "forblaze", name: "フォルブレイズ", type: "anima", might: 14, weight: 11, hit: 85, crit: 5, range: [1, 2], rank: "Prf", bonusRes: 5, effective: ["dragon"] },
    ],

    // ===== 光魔法 =====
    light: [
        { id: "lightning", name: "ライトニング", type: "light", might: 4, weight: 6, hit: 95, crit: 5, range: [1, 2], rank: "E" },
        { id: "shine", name: "シャイン", type: "light", might: 6, weight: 8, hit: 90, crit: 8, range: [1, 2], rank: "D" },
        { id: "divine", name: "ディヴァイン", type: "light", might: 8, weight: 12, hit: 85, crit: 10, range: [1, 2], rank: "C" },
        { id: "purge", name: "パージ", type: "light", might: 10, weight: 20, hit: 75, crit: 5, range: [3, 10], rank: "B", drain: true },
        { id: "aura", name: "アルジローレ", type: "light", might: 12, weight: 15, hit: 90, crit: 15, range: [1, 2], rank: "A" },
        { id: "luce", name: "ルーチェ", type: "light", might: 16, weight: 16, hit: 95, crit: 25, range: [1, 2], rank: "S" },
        { id: "aureola", name: "アーリアル", type: "light", might: 15, weight: 14, hit: 90, crit: 5, range: [1, 2], rank: "Prf", effective: ["monster"] },
    ],

    // ===== 闇魔法 =====
    dark: [
        { id: "flux", name: "ミィル", type: "dark", might: 7, weight: 8, hit: 80, crit: 0, range: [1, 2], rank: "D" },
        { id: "luna", name: "ルナ", type: "dark", might: 0, weight: 12, hit: 95, crit: 20, range: [1, 2], rank: "C", piercing: true },
        { id: "nosferatu", name: "リザイア", type: "dark", might: 10, weight: 14, hit: 70, crit: 0, range: [1, 2], rank: "C", drain: true },
        { id: "eclipse", name: "イクリプス", type: "dark", might: 0, weight: 12, hit: 30, crit: 0, range: [3, 10], rank: "A", halveHP: true },
        { id: "fenrir", name: "フェンリル", type: "dark", might: 15, weight: 18, hit: 70, crit: 0, range: [1, 2], rank: "A" },
        { id: "gespenst", name: "ゲスペンスト", type: "dark", might: 23, weight: 20, hit: 80, crit: 0, range: [1, 2], rank: "S" },
        { id: "ereshkigal", name: "エレシュキガル", type: "dark", might: 20, weight: 18, hit: 95, crit: 10, range: [1, 2], rank: "Prf" },
    ],
};

// 武器タイプの定義
const WEAPON_TYPES = {
    sword: { name: "剣", category: "physical" },
    lance: { name: "槍", category: "physical" },
    axe: { name: "斧", category: "physical" },
    bow: { name: "弓", category: "physical" },
    anima: { name: "理魔法", category: "magical" },
    light: { name: "光魔法", category: "magical" },
    dark: { name: "闇魔法", category: "magical" },
};

// 武器相性 (有利な組み合わせ)
const WEAPON_TRIANGLE = {
    sword: { strong: "axe", weak: "lance" },
    lance: { strong: "sword", weak: "axe" },
    axe: { strong: "lance", weak: "sword" },
    anima: { strong: "light", weak: "dark" },
    light: { strong: "dark", weak: "anima" },
    dark: { strong: "anima", weak: "light" },
};

// すべての武器をフラットな配列で取得
function getAllWeapons() {
    const allWeapons = [];
    for (const category of Object.values(WEAPONS)) {
        allWeapons.push(...category);
    }
    return allWeapons;
}

// IDで武器を取得
function getWeaponById(id) {
    return getAllWeapons().find(w => w.id === id);
}

