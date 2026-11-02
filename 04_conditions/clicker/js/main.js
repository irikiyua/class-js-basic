const MAX_HP = 100;
const DAMAGE = 25;
let currentHp = MAX_HP;
const BEFORE_IMG = 'https://picsum.photos/id/1025/400/250';
const AFTER_IMG = 'https://picsum.photos/id/1062/400/250';
const enemyImg = document.getElementById('enemy-img');
const hpDisplay = document.getElementById('hp-display');
const battleMessage = document.getElementById('battle-message');
const attackBtn = document.getElementById('attack-btn');
const resetBtn = document.getElementById('reset-btn');


let count = 100;

attackBtn.addEventListener('click', () => {

    currentHp -= DAMAGE;
    hpDisplay.textContent = `HP: ${currentHp} / 100`


    if (currentHp === 0) {
        battleMessage.textContent = 'モンスターをたおした！ゲームクリア！'
        enemyImg.setAttribute('src', AFTER_IMG);
        enemyImg.setAttribute('alt', '倒れたモンスター');
        attackBtn.setAttribute('disabled', true);
        hpDisplay.style.color = '#e74c3c';
    } else if (currentHp <= 50) {
        battleMessage.textContent = '相手はふらふらだ！あと少し！';
        hpDisplay.style.color = '#e67e22';
    } else {
        battleMessage.textContent = '効果的なダメージを与えた！'
        hpDisplay.style.color = '#333';
    }

})

resetBtn.addEventListener('click', () => {
    currentHp = MAX_HP;
    hpDisplay.textContent = `HP: ${currentHp} / 100`

    hpDisplay.style.color = '#333'
    enemyImg.setAttribute('src', BEFORE_IMG);
    enemyImg.setAttribute('alt', '元気なモンスター');
    attackBtn.removeAttribute('disabled');
})
