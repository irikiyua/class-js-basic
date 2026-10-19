const btn = document.getElementById('btn');
const mainTitle = document.querySelector('#main-title');
const windowWidth = document.getElementById('window-width');
const windowHeight = document.getElementById('window-height');

// mouseover = マウスを指定したとこに乗せただけで変化する
//mouseout = マウスを指定したとこに乗せた後にそこからマウスを外すと変化する
btn.addEventListener('mouseout', () => {
    mainTitle.textContent = 'クリックされました。'
    mainTitle.style.color = 'red';
})


window.addEventListener('scroll', () => {
    console.log(`現在のスクロール量：${window.scrollY}px`);

    // スクロールするたびにボタンが回る
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    // 背景グラデーション
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

// ブラウザに表示する前の場合はこっち
/*
window.addEventListener('DOMcontentLoaded', () =>{})
        DOMツリーが完成したら実行する（ブラウザにはまだ表示されていない）
*/

// 画面に表示してから変えたい場合はこっち
//loadを使って再読み込みした時からちゃんと読み込まれるようにする
window.addEventListener('load', () => {
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
    mainTitle.style.fontSize = (`${window.innerWidth / 20}px`);
});

window.addEventListener('resize', () => {
    console.log(`現在のブラウザ幅：${window.innerWidth}px`)
})



// 外に書くことで読み込んだ後でも現在の横幅が出ている（これをつけないと0pxと最初に出る）
windowWidth.textContent = window.innerWidth;
windowHeight.textContent = window.innerHeight;

window.addEventListener('resize', () => {
    windowWidth.textContent = window.innerWidth;
    windowHeight.textContent = window.innerHeight;

    mainTitle.style.fontSize = (`${window.innerWidth / 20}px`);
})

// クラス名の追加
btn.classList.add('is-active', 'is-open');
// btn.classList.toggle('is-active', true); addと同じ
// クラス名の削除
btn.classList.remove('is-active');
// btn.classList.toggle('is-active', false); removeと同じ

btn.addEventListener('click', () => {
    // toggle・・・クラス名をつけたり消したりする
    // add、removeは複数クラス名をかけるが、toggleは１個のみ
    btn.classList.toggle('is-active');

    // is-activeというクラス名が含まれていたらアクティブ　なかったら通常
    if (btn.classList.contains('is-active')) {
        btn.textContent = 'アクティブ'
    } else {
        btn.textContent = '通常'
    }
})
