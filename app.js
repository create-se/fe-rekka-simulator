/**
 * FE烈火の剣 ボスラッシュシミュレーター
 * メインアプリケーション
 */

// 現在のモード
let currentMode = 'rush'; // 'rush' or '100battle'

// ===================================
// 初期化
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initUnitSelect();
    initClassSelect();
    initWeaponSelect();
    initEnemySelect();
    initEventListeners();
    
    // 初期ユニットを選択
    onUnitChange();
});

// ユニットセレクトボックスの初期化
function initUnitSelect() {
    const select = document.getElementById('unitName');
    
    for (const unit of UNITS) {
        const option = document.createElement('option');
        option.value = unit.id;
        option.textContent = unit.name;
        select.appendChild(option);
    }
}

// クラスセレクトボックスの初期化
function initClassSelect() {
    const select = document.getElementById('unitClass');
    
    // 全クラスを追加
    for (const [id, classInfo] of Object.entries(CLASSES)) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = classInfo.name;
        select.appendChild(option);
    }
}

// ユニット変更時の処理
function onUnitChange() {
    const unitId = document.getElementById('unitName').value;
    const unit = getUnitById(unitId);
    const classSelect = document.getElementById('unitClass');
    const weaponSelect = document.getElementById('weapon');
    const levelInput = document.getElementById('unitLevel');
    const ccCheckbox = document.getElementById('isClassChanged');
    
    if (unit && unit.id !== 'custom') {
        // クラスを自動選択
        classSelect.value = unit.classId;
        classSelect.disabled = true;
        
        // デフォルト武器を選択
        if (unit.defaultWeapon) {
            weaponSelect.value = unit.defaultWeapon;
        }
        
        // CC可能かどうかでチェックボックスを設定
        if (unit.ccFlag === 0) {
            // 初期上級職の場合
            ccCheckbox.checked = true;
            ccCheckbox.disabled = true;
            levelInput.max = 20;
        } else {
            // クラスチェンジ可能なユニット
            ccCheckbox.checked = true;
            ccCheckbox.disabled = false;
            levelInput.max = 20;
        }
        
        // 初期レベルを設定（上級職なら20想定）
        levelInput.value = 20;
        
        // 期待値を自動計算
        onCalcStats();
    } else {
        // カスタムの場合はクラス選択を有効化
        classSelect.disabled = false;
        ccCheckbox.disabled = false;
    }
}

// ステータス期待値を計算
function onCalcStats() {
    const unitId = document.getElementById('unitName').value;
    const unit = getUnitById(unitId);
    
    if (!unit || unit.id === 'custom') {
        return;
    }
    
    const level = parseInt(document.getElementById('unitLevel').value) || 1;
    const isClassChanged = document.getElementById('isClassChanged').checked;
    
    // 期待値を計算
    const stats = calculateExpectedStats(unit, level, isClassChanged);
    
    if (!stats) {
        return;
    }
    
    // 各ステータス入力欄に反映
    const statIds = ['hp', 'str', 'skl', 'spd', 'lck', 'def', 'res', 'con'];
    for (const statId of statIds) {
        const input = document.getElementById(statId);
        if (input && stats[statId] !== undefined) {
            input.value = stats[statId];
            // ハイライト
            input.classList.add('calculated');
            setTimeout(() => input.classList.remove('calculated'), 1000);
        }
    }
}

// 武器セレクトボックスの初期化
function initWeaponSelect() {
    const select = document.getElementById('weapon');
    const allWeapons = getAllWeapons();
    
    // カテゴリごとにグループ化
    const categories = {
        'swords': { label: '剣', weapons: [] },
        'lances': { label: '槍', weapons: [] },
        'axes': { label: '斧', weapons: [] },
        'bows': { label: '弓', weapons: [] },
        'anima': { label: '理魔法', weapons: [] },
        'light': { label: '光魔法', weapons: [] },
        'dark': { label: '闇魔法', weapons: [] },
    };
    
    // 武器をカテゴリに振り分け
    for (const [key, weapons] of Object.entries(WEAPONS)) {
        if (categories[key]) {
            categories[key].weapons = weapons;
        }
    }
    
    // セレクトボックスに追加
    for (const [key, category] of Object.entries(categories)) {
        if (category.weapons.length > 0) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = category.label;
            
            for (const weapon of category.weapons) {
                const option = document.createElement('option');
                option.value = weapon.id;
                option.textContent = `${weapon.name} (威力${weapon.might} 命中${weapon.hit})`;
                optgroup.appendChild(option);
            }
            
            select.appendChild(optgroup);
        }
    }
}

// 敵セレクトボックスの初期化（100連戦用）
function initEnemySelect() {
    updateEnemySelect();
}

// 難易度に応じて敵リストを更新
function updateEnemySelect() {
    const select = document.getElementById('targetEnemy');
    const difficulty = document.getElementById('difficulty').value;
    
    // 一度クリア
    select.innerHTML = '';
    
    // リン編（共通）のボスを追加
    const lynBosses = BOSSES.filter(boss => boss.difficulty === 'eliwood_normal' && 
        ['序章', '1章', '2章', '3章', '4章', '5章', '6章', '7章', '7章外伝', '9章', '10章'].includes(boss.chapter));
    
    if (lynBosses.length > 0) {
        const lynGroup = document.createElement('optgroup');
        lynGroup.label = 'リン編';
        for (const boss of lynBosses) {
            const option = document.createElement('option');
            option.value = boss.id;
            option.textContent = `${boss.name} (${boss.className} - ${boss.chapter})`;
            lynGroup.appendChild(option);
        }
        select.appendChild(lynGroup);
    }
    
    // 選択した難易度のボスを追加
    const mainBosses = BOSSES.filter(boss => boss.difficulty === difficulty && 
        !['序章', '1章', '2章', '3章', '4章', '5章', '6章', '7章', '7章外伝', '9章', '10章'].includes(boss.chapter));
    
    if (mainBosses.length > 0) {
        const mainGroup = document.createElement('optgroup');
        mainGroup.label = difficulty === 'eliwood_normal' ? 'エリウッド編' : 'ヘクトル編';
        for (const boss of mainBosses) {
            const option = document.createElement('option');
            option.value = boss.id;
            option.textContent = `${boss.name} (${boss.className} - ${boss.chapter})`;
            mainGroup.appendChild(option);
        }
        select.appendChild(mainGroup);
    }
}

// 選択した難易度のボスリストを取得
function getCurrentDifficultyBosses() {
    const difficulty = document.getElementById('difficulty').value;
    
    // リン編（共通）のボス
    const lynBosses = BOSSES.filter(boss => boss.difficulty === 'eliwood_normal' && 
        ['序章', '1章', '2章', '3章', '4章', '5章', '6章', '7章', '7章外伝', '9章', '10章'].includes(boss.chapter));
    
    // 選択した難易度のボス
    const mainBosses = BOSSES.filter(boss => boss.difficulty === difficulty && 
        !['序章', '1章', '2章', '3章', '4章', '5章', '6章', '7章', '7章外伝', '9章', '10章'].includes(boss.chapter));
    
    return [...lynBosses, ...mainBosses];
}

// モード切替処理
function onModeChange(mode) {
    currentMode = mode;
    
    // タブの表示切替
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });
    
    // 敵選択エリアの表示切替
    const enemyArea = document.getElementById('enemySelectArea');
    enemyArea.classList.toggle('hidden', mode !== '100battle');
    
    // HP回復オプションの表示切替（ボスラッシュのみ表示）
    const hpRecoveryOption = document.getElementById('hpRecoveryOption');
    hpRecoveryOption.classList.toggle('hidden', mode !== 'rush');
    
    // ボタンテキストの変更
    const btnText = document.getElementById('battleBtnText');
    btnText.textContent = mode === 'rush' ? 'ボスラッシュ開始！' : '100連戦開始！';
    
    // プレースホルダーの変更
    const placeholder = document.querySelector('#battleLog .placeholder');
    if (placeholder) {
        if (mode === 'rush') {
            placeholder.innerHTML = `
                <p>👆 ユニットのステータスを入力して</p>
                <p>「ボスラッシュ開始」を押してください</p>
            `;
        } else {
            placeholder.innerHTML = `
                <p>🎯 対戦相手を選んで</p>
                <p>「100連戦開始」を押してください</p>
            `;
        }
    }
}

// イベントリスナーの設定
function initEventListeners() {
    document.getElementById('unitName').addEventListener('change', onUnitChange);
    document.getElementById('calcStats').addEventListener('click', onCalcStats);
    document.getElementById('startBattle').addEventListener('click', onStartBattle);
    document.getElementById('difficulty').addEventListener('change', updateEnemySelect);
    
    // モード切替タブ
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => onModeChange(tab.dataset.mode));
    });
}

// 戦闘開始ボタンのハンドラ
function onStartBattle() {
    if (currentMode === 'rush') {
        startBossRush();
    } else {
        start100Battle();
    }
}

// ===================================
// 戦闘計算
// ===================================

/**
 * 特効判定
 * @param {Object} weapon - 武器データ
 * @param {string} targetClassId - 対象のクラスID
 * @returns {boolean} 特効が有効かどうか
 */
function isEffective(weapon, targetClassId) {
    if (!weapon.effective || !targetClassId) {
        return false;
    }
    
    for (const effectType of weapon.effective) {
        switch (effectType) {
            case 'armor':
                if (isArmored(targetClassId)) return true;
                break;
            case 'cavalry':
                if (isCavalry(targetClassId)) return true;
                break;
            case 'flying':
                if (isFlying(targetClassId)) return true;
                break;
            case 'dragon':
                // ドラゴン系クラス（火竜など）
                if (['firedragon', 'wyvern', 'wyvernlord'].includes(targetClassId)) return true;
                break;
            case 'monster':
                // モンスター系（烈火では火竜のみ）
                if (targetClassId === 'firedragon') return true;
                break;
        }
    }
    
    return false;
}

function isDragon(classId) {
    return ['firedragon', 'wyvern', 'wyvernlord'].includes(classId);
}

/**
 * 戦闘統計を計算する
 * @param {Object} unit - ユニットデータ
 * @param {Object} weapon - 武器データ
 * @param {Object} target - 攻撃対象データ
 * @param {string} classId - クラスID
 * @returns {Object} 計算結果
 */
function calculateBattleStats(unit, weapon, target, classId) {
    const stats = unit.stats || unit;
    const targetStats = target.stats || target;
    const targetWeapon = target.weapon || {};
    const targetClassId = target.classId || null;
    
    // 攻速計算
    const weightPenalty = Math.max(0, weapon.weight - stats.con);
    const attackSpeed = stats.spd - weightPenalty;
    
    // 武器相性
    const triangleBonus = getWeaponTriangleBonus(weapon.type, targetWeapon.type);
    
    // 特効判定（威力3倍、ただし竜特効は2倍、アーリアルは対竜でも3倍）
    const hasEffective = isEffective(weapon, targetClassId);
    let effectiveMight = weapon.might;

    if (hasEffective) {
        if (weapon.id === 'aureola') {
            // アーリアルは常に3倍
            effectiveMight = weapon.might * 3;
        } else if (isDragon(targetClassId)) {
            // 竜特効は通常2倍
            effectiveMight = weapon.might * 2;
        } else {
            // その他の特効（アーマー、騎馬など）は3倍
            effectiveMight = weapon.might * 3;
        }
    }
    
    // 攻撃力計算（魔法か物理か判定）
    const isMagic = ['anima', 'light', 'dark'].includes(weapon.type);
    
    // 固定ダメージ武器の判定（火竜のブレスなど）
    let damage;
    if (weapon.fixedDamage) {
        // 固定ダメージ武器は守備・魔防を無視
        damage = weapon.might;
    } else {
        const baseDamage = stats.str + effectiveMight + triangleBonus.might;
        
        // 守備か魔防で軽減
        let targetDef = isMagic ? targetStats.res : targetStats.def;
        
        // 防御無視（ルナなど）の場合、防御力を0として計算
        if (weapon.piercing) {
            targetDef = 0;
        }

        damage = Math.max(0, baseDamage - targetDef);
    }
    
    // 命中率計算
    const hitRate = weapon.hit + (stats.skl * 2) + Math.floor(stats.lck / 2) + triangleBonus.hit;
    
    // 回避率計算（敵側）
    const targetWeightPenalty = Math.max(0, (targetWeapon.weight || 0) - targetStats.con);
    const targetAS = targetStats.spd - targetWeightPenalty;
    const targetAvoid = (targetAS * 2) + targetStats.lck;
    
    // 最終命中率
    const finalHit = Math.min(100, Math.max(0, hitRate - targetAvoid));
    
    // 必殺率計算
    const classCritBonus = getCritBonus(classId);
    const critRate = weapon.crit + Math.floor(stats.skl / 2) + classCritBonus;
    const targetCritAvoid = targetStats.lck;
    const finalCrit = Math.min(100, Math.max(0, critRate - targetCritAvoid));
    
    // 追撃判定
    const canDouble = attackSpeed - targetAS >= 4;
    
    return {
        damage,
        hit: finalHit,
        crit: finalCrit,
        attackSpeed,
        canDouble,
        isMagic,
        triangleBonus: triangleBonus.advantage,
        hasEffective
    };
}

/**
 * 武器相性ボーナスを取得
 */
function getWeaponTriangleBonus(attackerType, defenderType) {
    const result = { hit: 0, might: 0, advantage: null };
    
    if (!attackerType || !defenderType) return result;
    
    const triangle = WEAPON_TRIANGLE[attackerType];
    if (!triangle) return result;
    
    if (triangle.strong === defenderType) {
        result.hit = 15;
        result.might = 1;
        result.advantage = 'advantage';
    } else if (triangle.weak === defenderType) {
        result.hit = -15;
        result.might = -1;
        result.advantage = 'disadvantage';
    }
    
    return result;
}

/**
 * 戦闘をシミュレーション（確率ベース）
 * ラウンド1: プレイヤー先攻 → ラウンド2: ボス先攻 → ラウンド3: プレイヤー先攻...
 */
function simulateBattle(playerStats, boss, playerHP) {
    let currentHP = playerHP;
    const bossHP = boss.stats.hp;
    let bossCurrentHP = bossHP;
    
    const log = [];
    let round = 0;
    const maxRounds = 20; // 無限ループ防止
    
    // ボスの戦闘統計を事前計算
    const bossStats = calculateBattleStats(
        boss, 
        boss.weapon, 
        { stats: playerStats.originalStats, classId: playerStats.classId }, 
        boss.classId
    );
    bossStats.classId = boss.classId;
    
    while (currentHP > 0 && bossCurrentHP > 0 && round < maxRounds) {
        round++;
        
        // 奇数ラウンド: プレイヤー先攻、偶数ラウンド: ボス先攻
        const isPlayerFirst = (round % 2 === 1);
        
        if (isPlayerFirst) {
            // === プレイヤー先攻ラウンド ===
            // プレイヤーの攻撃
            bossCurrentHP = doAttack(playerStats, bossCurrentHP, log, 'player', false, playerStats.classId, bossStats.classId);
            if (bossCurrentHP <= 0) break;
            
            // プレイヤーの追撃
            if (playerStats.canDouble) {
                bossCurrentHP = doAttack(playerStats, bossCurrentHP, log, 'player', true, playerStats.classId, bossStats.classId);
                if (bossCurrentHP <= 0) break;
            }
            
            // ボスの反撃
            currentHP = doAttack(bossStats, currentHP, log, 'boss', false, bossStats.classId, playerStats.classId);
            if (currentHP <= 0) break;
            
            // ボスの追撃
            if (bossStats.canDouble) {
                currentHP = doAttack(bossStats, currentHP, log, 'boss', true, bossStats.classId, playerStats.classId);
            }
        } else {
            // === ボス先攻ラウンド ===
            // ボスの攻撃
            currentHP = doAttack(bossStats, currentHP, log, 'boss', false, bossStats.classId, playerStats.classId);
            if (currentHP <= 0) break;
            
            // ボスの追撃
            if (bossStats.canDouble) {
                currentHP = doAttack(bossStats, currentHP, log, 'boss', true, bossStats.classId, playerStats.classId);
                if (currentHP <= 0) break;
            }
            
            // プレイヤーの反撃
            bossCurrentHP = doAttack(playerStats, bossCurrentHP, log, 'player', false, playerStats.classId, bossStats.classId);
            if (bossCurrentHP <= 0) break;
            
            // プレイヤーの追撃
            if (playerStats.canDouble) {
                bossCurrentHP = doAttack(playerStats, bossCurrentHP, log, 'player', true, playerStats.classId, bossStats.classId);
            }
        }
    }
    
    // 必殺発生回数をカウント
    const playerCrits = log.filter(entry => entry.attacker === 'player' && entry.crit).length;
    const bossCrits = log.filter(entry => entry.attacker === 'boss' && entry.crit).length;
    
    return {
        win: currentHP > 0,
        playerHP: Math.max(0, currentHP),
        bossHP: Math.max(0, bossCurrentHP),
        rounds: round,
        log,
        playerCrits,
        bossCrits
    };
}

/**
 * 攻撃を実行してダメージを適用
 * @param {Object} attackerStats - 攻撃者の戦闘統計
 * @param {number} targetHP - 対象の現在HP
 * @param {Array} log - 戦闘ログ
 * @param {string} attackerType - 'player' or 'boss'
 * @param {boolean} isFollow - 追撃かどうか
 * @param {string} attackerClassId - 攻撃者のクラスID
 * @param {string} targetClassId - 対象のクラスID
 * @returns {number} 対象の残りHP
 */
function doAttack(attackerStats, targetHP, log, attackerType, isFollow, attackerClassId, targetClassId) {
    const hits = rollHit(attackerStats.hit);
    if (hits) {
        let isCrit = rollHit(attackerStats.crit);
        let dmg = isCrit ? Math.max(0, attackerStats.damage * 3) : Math.max(0, attackerStats.damage);
        
        // アサシンの「瞬殺」判定 (必殺発動時、50%の確率で即死)
        // ただし、火竜には無効
        let isLethality = false;
        if (isCrit && attackerClassId === 'assassin' && targetClassId !== 'firedragon') {
            if (Math.random() < 0.5) {
                isLethality = true;
                dmg = targetHP; // 残りHP分のダメージを与えて即死させる
            }
        }

        // ダメージは0未満にならない
        if (dmg < 0) dmg = 0;

        targetHP -= dmg;
        log.push({ attacker: attackerType, damage: dmg, crit: isCrit, lethality: isLethality, follow: isFollow });
    } else {
        log.push({ attacker: attackerType, damage: 0, miss: true, follow: isFollow });
    }
    return Math.max(0, targetHP);
}

/**
 * 命中判定（FEは2回乱数方式だが、簡易版として1回で計算）
 */
function rollHit(hitRate) {
    // 2RN方式（True Hit）: GBA版FEと同じ仕組み
    // 2つの乱数の平均を使うことで、高命中はより当たりやすく、低命中はより外れやすくなる
    const roll1 = Math.random() * 100;
    const roll2 = Math.random() * 100;
    const trueHit = (roll1 + roll2) / 2;
    return trueHit < hitRate;
}

// ===================================
// UI制御
// ===================================

/**
 * ボスラッシュを開始
 */
function startBossRush() {
    // 入力値を取得
    const unitId = document.getElementById('unitName').value;
    const unit = getUnitById(unitId);
    const unitName = unit ? unit.name : 'ユニット';
    const classId = document.getElementById('unitClass').value;
    const weaponId = document.getElementById('weapon').value;
    
    const playerStats = {
        hp: parseInt(document.getElementById('hp').value) || 30,
        str: parseInt(document.getElementById('str').value) || 12,
        skl: parseInt(document.getElementById('skl').value) || 14,
        spd: parseInt(document.getElementById('spd').value) || 15,
        lck: parseInt(document.getElementById('lck').value) || 10,
        def: parseInt(document.getElementById('def').value) || 8,
        res: parseInt(document.getElementById('res').value) || 6,
        con: parseInt(document.getElementById('con').value) || 5
    };
    
    const weapon = getWeaponById(weaponId);
    if (!weapon) {
        alert('武器を選択してください');
        return;
    }
    
    // 結果表示エリアを初期化
    const resultSummary = document.getElementById('resultSummary');
    const result100Summary = document.getElementById('result100Summary');
    const battleLog = document.getElementById('battleLog');
    
    resultSummary.classList.remove('hidden');
    result100Summary.classList.add('hidden');
    battleLog.innerHTML = '';
    
    // 難易度に応じたボスリストを取得
    const bosses = getCurrentDifficultyBosses();
    
    // HP回復オプションを取得
    const hpRecovery = document.querySelector('input[name="hpRecovery"]:checked').value;
    const fullRecovery = (hpRecovery === 'full');
    
    // ボスラッシュ実行
    let defeatedCount = 0;
    let currentHP = playerStats.hp;
    const results = [];
    
    for (const boss of bosses) {
        // 毎回全回復モードの場合はHPをリセット
        if (fullRecovery) {
            currentHP = playerStats.hp;
        }
        
        // 戦闘統計を計算
        const battleStats = calculateBattleStats(
            { stats: playerStats },
            weapon,
            boss,
            classId
        );
        battleStats.originalStats = playerStats;
        battleStats.classId = classId; // クラスIDを追加
        
        // 戦闘シミュレーション
        const result = simulateBattle(battleStats, boss, currentHP);
        
        results.push({
            boss,
            battleStats,
            result
        });
        
        if (result.win) {
            defeatedCount++;
            currentHP = result.playerHP; // HPを引き継ぎ（全回復モードでも次のループでリセットされる）
        } else {
            // 敗北したらここで終了
            break;
        }
    }
    
    // 結果表示
    displayResults(results, defeatedCount, unitName, bosses.length);
}

/**
 * 結果を表示
 */
function displayResults(results, defeatedCount, unitName, totalBosses) {
    
    // サマリー更新
    document.getElementById('defeatedCount').textContent = defeatedCount;
    document.getElementById('totalBosses').textContent = totalBosses;
    
    // ランク計算
    const percentage = (defeatedCount / totalBosses) * 100;
    let rank, rankClass;
    if (percentage === 100) {
        rank = 'S';
        rankClass = 'rank-s';
    } else if (percentage >= 80) {
        rank = 'A';
        rankClass = 'rank-a';
    } else if (percentage >= 60) {
        rank = 'B';
        rankClass = 'rank-b';
    } else if (percentage >= 40) {
        rank = 'C';
        rankClass = 'rank-c';
    } else {
        rank = 'D';
        rankClass = 'rank-d';
    }
    
    const rankElement = document.getElementById('rank');
    rankElement.textContent = rank;
    rankElement.className = `summary-rank ${rankClass}`;
    
    // バトルログ表示
    const battleLog = document.getElementById('battleLog');
    
    for (let i = 0; i < results.length; i++) {
        const { boss, battleStats, result } = results[i];
        const card = createBattleCard(boss, battleStats, result, i);
        battleLog.appendChild(card);
        
        // アニメーション用の遅延
        setTimeout(() => {
            card.style.opacity = '1';
        }, i * 100);
    }
}

/**
 * バトルカードを作成
 */
function createBattleCard(boss, battleStats, result, index) {
    const card = document.createElement('div');
    card.className = `battle-card ${result.win ? 'win' : 'lose'}`;
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // 武器相性の表示
    let triangleIcon = '';
    if (battleStats.triangleBonus === 'advantage') {
        triangleIcon = '🔼';
    } else if (battleStats.triangleBonus === 'disadvantage') {
        triangleIcon = '🔽';
    }
    
    // 特効の表示
    const effectiveIcon = battleStats.hasEffective ? '⚔️特効' : '';
    
    // 必殺発生の表示
    let critDisplay = '';
    if (result.playerCrits > 0 || result.bossCrits > 0) {
        const playerCritText = result.playerCrits > 0 ? `<span class="crit-player">💥×${result.playerCrits}</span>` : '';
        const bossCritText = result.bossCrits > 0 ? `<span class="crit-boss">💢×${result.bossCrits}</span>` : '';
        critDisplay = `<div class="crit-display">${playerCritText}${bossCritText}</div>`;
    }
    
    card.innerHTML = `
        <div class="battle-card-header">
            <div>
                <span class="boss-name">${boss.name}</span>
                <span class="boss-class">${boss.className} (${boss.chapter})</span>
                ${effectiveIcon ? `<span class="effective-badge">${effectiveIcon}</span>` : ''}
            </div>
            <span class="battle-result ${result.win ? 'win' : 'lose'}">
                ${result.win ? '👍 WIN' : '💀 LOSE'}
            </span>
        </div>
        <div class="battle-stats">
            <div class="battle-stats-row">
                <span>与ダメージ: ${battleStats.damage} ${triangleIcon}</span>
                <span>命中率: ${battleStats.hit}%</span>
            </div>
            <div class="battle-stats-row">
                <span>必殺率: ${battleStats.crit}%</span>
                <span>追撃: ${battleStats.canDouble ? '◯' : '✕'}</span>
            </div>
        </div>
        ${critDisplay}
        <div class="battle-detail">
            ${result.win 
                ? `残りHP: ${result.playerHP} (${result.rounds}ラウンド)`
                : `${result.rounds}ラウンドで敗北`
            }
        </div>
    `;
    
    return card;
}

// ===================================
// 100連戦モード
// ===================================

/**
 * 100連戦を開始
 */
function start100Battle() {
    // 入力値を取得
    const classId = document.getElementById('unitClass').value;
    const weaponId = document.getElementById('weapon').value;
    const enemyId = document.getElementById('targetEnemy').value;
    
    const playerStats = {
        hp: parseInt(document.getElementById('hp').value) || 30,
        str: parseInt(document.getElementById('str').value) || 12,
        skl: parseInt(document.getElementById('skl').value) || 14,
        spd: parseInt(document.getElementById('spd').value) || 15,
        lck: parseInt(document.getElementById('lck').value) || 10,
        def: parseInt(document.getElementById('def').value) || 8,
        res: parseInt(document.getElementById('res').value) || 6,
        con: parseInt(document.getElementById('con').value) || 5
    };
    
    const weapon = getWeaponById(weaponId);
    if (!weapon) {
        alert('武器を選択してください');
        return;
    }
    
    const enemy = getBossById(enemyId);
    if (!enemy) {
        alert('対戦相手を選択してください');
        return;
    }
    
    // 結果表示エリアを初期化
    document.getElementById('resultSummary').classList.add('hidden');
    document.getElementById('result100Summary').classList.remove('hidden');
    
    const battleLog = document.getElementById('battleLog');
    battleLog.innerHTML = '<div class="battle-100-log"></div>';
    const logContainer = battleLog.querySelector('.battle-100-log');
    
    // 敵の名前を表示
    document.getElementById('targetEnemyName').textContent = enemy.name;
    
    // プレイヤーの戦闘統計を計算（100連戦では毎回同じ値）
    const playerBattleStats = calculateBattleStats(
        { stats: playerStats },
        weapon,
        enemy,
        classId
    );
    playerBattleStats.originalStats = playerStats;
    playerBattleStats.classId = classId; // クラスIDを追加
    
    // ボスの戦闘統計を計算（被ダメージ用）
    const bossBattleStats = calculateBattleStats(
        enemy,
        enemy.weapon,
        { stats: playerStats, classId: classId },
        enemy.classId
    );
    
    // 100連戦実行
    const battleCount = 100;
    let wins = 0;
    let losses = 0;
    let totalWinHP = 0;
    let totalRounds = 0;
    const results = [];
    
    for (let i = 0; i < battleCount; i++) {
        // 戦闘シミュレーション（毎回HPをリセット）
        const result = simulateBattle(playerBattleStats, enemy, playerStats.hp);
        results.push(result);
        
        if (result.win) {
            wins++;
            totalWinHP += result.playerHP;
        } else {
            losses++;
        }
        totalRounds += result.rounds;
    }
    
    // 結果を表示
    display100BattleResults(results, wins, losses, totalWinHP, totalRounds, enemy, logContainer, playerBattleStats, bossBattleStats);
}

/**
 * 100連戦の結果を表示
 */
function display100BattleResults(results, wins, losses, totalWinHP, totalRounds, enemy, logContainer, playerBattleStats, bossBattleStats) {
    // サマリー更新
    document.getElementById('winCount').textContent = wins;
    document.getElementById('loseCount').textContent = losses;
    
    const winRate = Math.round((wins / results.length) * 100);
    document.getElementById('winRate').textContent = winRate;
    document.getElementById('winRateBar').style.width = `${winRate}%`;
    
    // 平均値
    const avgWinHP = wins > 0 ? Math.round(totalWinHP / wins) : 0;
    const avgRounds = Math.round((totalRounds / results.length) * 10) / 10;
    
    document.getElementById('avgWinHP').textContent = wins > 0 ? `${avgWinHP} HP` : '-';
    document.getElementById('avgRounds').textContent = `${avgRounds} ラウンド`;
    
    // 戦闘統計を表示
    document.getElementById('playerDamage').textContent = playerBattleStats.damage;
    document.getElementById('playerHit').textContent = `${playerBattleStats.hit}%`;
    document.getElementById('playerCrit').textContent = `${playerBattleStats.crit}%`;
    document.getElementById('playerDouble').textContent = playerBattleStats.canDouble ? '◯' : '✕';
    
    document.getElementById('bossDamage').textContent = bossBattleStats.damage;
    document.getElementById('bossHit').textContent = `${bossBattleStats.hit}%`;
    document.getElementById('bossCrit').textContent = `${bossBattleStats.crit}%`;
    document.getElementById('bossDouble').textContent = bossBattleStats.canDouble ? '◯' : '✕';
    
    // 特効表示
    const effectiveEl = document.getElementById('effectiveStatus');
    if (playerBattleStats.hasEffective) {
        effectiveEl.innerHTML = '<span class="effective-badge">⚔️特効</span>';
    } else {
        effectiveEl.textContent = '';
    }
    
    // 必殺発生回数を集計
    const totalPlayerCrits = results.reduce((sum, r) => sum + r.playerCrits, 0);
    const totalBossCrits = results.reduce((sum, r) => sum + r.bossCrits, 0);
    
    document.getElementById('playerCritCount').textContent = totalPlayerCrits;
    document.getElementById('bossCritCount').textContent = totalBossCrits;
    
    // 各戦闘結果をタイルで表示
    results.forEach((result, index) => {
        const tile = document.createElement('div');
        
        // 必殺発生時はクラスを追加
        let tileClass = `battle-100-item ${result.win ? 'win' : 'lose'}`;
        if (result.playerCrits > 0) tileClass += ' player-crit';
        if (result.bossCrits > 0) tileClass += ' boss-crit';
        tile.className = tileClass;
        
        // 必殺発生時はアイコン表示
        if (result.playerCrits > 0 || result.bossCrits > 0) {
            tile.innerHTML = `<span class="tile-num">${index + 1}</span><span class="tile-crit">💥</span>`;
        } else {
            tile.textContent = index + 1;
        }
        
        // ツールチップ
        let critInfo = '';
        if (result.playerCrits > 0) critInfo += ` 自必殺×${result.playerCrits}`;
        if (result.bossCrits > 0) critInfo += ` 敵必殺×${result.bossCrits}`;
        
        tile.title = result.win 
            ? `第${index + 1}戦: 勝利 (残HP: ${result.playerHP}, ${result.rounds}R)${critInfo}`
            : `第${index + 1}戦: 敗北 (${result.rounds}R)${critInfo}`;
        
        // アニメーション遅延
        tile.style.opacity = '0';
        tile.style.animation = 'fadeIn 0.2s ease-out forwards';
        tile.style.animationDelay = `${index * 10}ms`;
        
        logContainer.appendChild(tile);
    });
}

/**
 * ボスをIDで取得
 */
function getBossById(id) {
    return BOSSES.find(boss => boss.id === id);
}

