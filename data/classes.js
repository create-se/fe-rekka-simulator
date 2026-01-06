/**
 * FE烈火の剣 クラスデータ
 * 必殺補正などを管理
 */

const CLASSES = {
    // ===== 歩兵・剣 =====
    lord: { name: "ロード", critBonus: 0, weapons: ["sword"], movement: "foot" },
    lord_lyn: { name: "ブレイドロード", critBonus: 0, weapons: ["sword", "bow"], movement: "foot" },
    lord_eliwood: { name: "ロードナイト", critBonus: 0, weapons: ["sword", "lance"], movement: "cavalry" },
    lord_hector: { name: "グレートロード", critBonus: 0, weapons: ["sword", "axe"], movement: "foot" },
    mercenary: { name: "傭兵", critBonus: 0, weapons: ["sword"], movement: "foot" },
    hero: { name: "勇者", critBonus: 0, weapons: ["sword", "axe"], movement: "foot" },
    myrmidon: { name: "剣士", critBonus: 0, weapons: ["sword"], movement: "foot" },
    swordmaster: { name: "ソードマスター", critBonus: 15, weapons: ["sword"], movement: "foot" },
    thief: { name: "盗賊", critBonus: 0, weapons: ["sword"], movement: "foot" },
    assassin: { name: "アサシン", critBonus: 0, weapons: ["sword"], movement: "foot", lethality: true },

    // ===== 騎兵 =====
    cavalier: { name: "ソシアルナイト", critBonus: 0, weapons: ["sword", "lance"], movement: "cavalry" },
    paladin: { name: "パラディン", critBonus: 0, weapons: ["sword", "lance", "axe"], movement: "cavalry" },
    troubadour: { name: "トルバドール", critBonus: 0, weapons: ["staff"], movement: "cavalry" },
    valkyrie: { name: "ヴァルキュリア", critBonus: 0, weapons: ["anima", "staff"], movement: "cavalry" },
    nomad: { name: "遊牧民", critBonus: 0, weapons: ["bow"], movement: "cavalry" },
    nomadtrooper: { name: "遊牧騎兵", critBonus: 0, weapons: ["bow", "sword"], movement: "cavalry" },

    // ===== 重装 =====
    knight: { name: "アーマーナイト", critBonus: 0, weapons: ["lance"], movement: "armor" },
    general: { name: "ジェネラル", critBonus: 0, weapons: ["lance", "axe"], movement: "armor" },

    // ===== 斧 =====
    fighter: { name: "戦士", critBonus: 0, weapons: ["axe"], movement: "foot" },
    warrior: { name: "ウォーリア", critBonus: 0, weapons: ["axe", "bow"], movement: "foot" },
    brigand: { name: "山賊", critBonus: 0, weapons: ["axe"], movement: "foot" },
    berserker: { name: "狂戦士", critBonus: 15, weapons: ["axe"], movement: "foot" },
    pirate: { name: "海賊", critBonus: 0, weapons: ["axe"], movement: "foot" },

    // ===== 弓 =====
    archer: { name: "アーチャー", critBonus: 0, weapons: ["bow"], movement: "foot" },
    sniper: { name: "スナイパー", critBonus: 0, weapons: ["bow"], movement: "foot" },

    // ===== 魔道士 =====
    mage: { name: "魔道士", critBonus: 0, weapons: ["anima"], movement: "foot" },
    sage: { name: "賢者", critBonus: 0, weapons: ["anima", "light", "staff"], movement: "foot" },
    monk: { name: "修道士", critBonus: 0, weapons: ["light"], movement: "foot" },
    bishop: { name: "司祭", critBonus: 0, weapons: ["light", "staff"], movement: "foot" },
    shaman: { name: "シャーマン", critBonus: 0, weapons: ["dark"], movement: "foot" },
    druid: { name: "ドルイド", critBonus: 0, weapons: ["dark", "staff"], movement: "foot" },
    darkdruid: { name: "ダークドルイド", critBonus: 0, weapons: ["dark"], movement: "foot" },

    // ===== 飛行 =====
    pegasus: { name: "ペガサスナイト", critBonus: 0, weapons: ["lance"], movement: "flying" },
    falcon: { name: "ファルコンナイト", critBonus: 0, weapons: ["lance", "sword"], movement: "flying" },
    wyvern: { name: "ドラゴンナイト", critBonus: 0, weapons: ["lance"], movement: "flying" },
    wyvernlord: { name: "ドラゴンマスター", critBonus: 0, weapons: ["lance", "sword", "axe"], movement: "flying" },

    // ===== その他 =====
    cleric: { name: "シスター", critBonus: 0, weapons: ["staff"], movement: "foot" },
    dancer: { name: "踊り子", critBonus: 0, weapons: ["sword"], movement: "foot" },
    bard: { name: "バード", critBonus: 0, weapons: [], movement: "foot" },

    // ===== モンスター =====
    firedragon: { name: "火竜", critBonus: 0, weapons: ["dragon"], movement: "foot" },
};

// クラスIDでクラス情報を取得
function getClassById(id) {
    return CLASSES[id] || null;
}

// 必殺補正を取得
function getCritBonus(classId) {
    const classInfo = CLASSES[classId];
    return classInfo ? classInfo.critBonus : 0;
}

// 移動タイプを取得
function getMovementType(classId) {
    const classInfo = CLASSES[classId];
    return classInfo ? classInfo.movement : "foot";
}

// 飛行ユニットかどうか
function isFlying(classId) {
    return getMovementType(classId) === "flying";
}

// 騎馬ユニットかどうか
function isCavalry(classId) {
    return getMovementType(classId) === "cavalry";
}

// 重装ユニットかどうか
function isArmored(classId) {
    return getMovementType(classId) === "armor";
}

