// console.log(`success!`);


// // 要素を取得

// //1.IDで取得
// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle); //結果   <h1 id="main-title">JavaScriptで画面を動かそう</h1>

// //2.CSSセレクタで取得
// //もし<p> を('p')で取得した時複数<p>がある場合は最初の方だけが取得される
// const title = document.querySelector('#main-title');
// // その要素の詳しい情報を知りたい時に使うのがdir
// console.dir(title);


// console.log(document.body);
// console.log(document.documentElement);


// // 練習
// const intro = document.getElementById('intro');
// console.log(intro);
// const changeBtn = document.querySelector('button');
// console.log(changeBtn);


// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle.textContent);


// const day = 12;
// const week = '月曜日'

// mainTitle.textContent = `今日は${day}日の${week}です。`;

// const introText = document.querySelector('#intro');
// console.log(introText.innerHTML);

// console.log(mainTitle.innerHTML);

// // innerHTMLはタグを書いてもちゃんと読み込まれる
// introText.innerHTML = `ようこそ!<strong>JS</strong>の世界へ`;

// // textContentは文字のみでる   読み取る時に使いがち
// // innerHTMLはタグなども含めてでる   書き換える時に使いがち
// console.log(document.body.textContent);
// console.log(document.body.innerHTML);

// introText.textContent = `ようこそ!<strong>JS</strong>の世界へ`;


// // 練習

// const mainTitle = document.querySelector('#main-title');
// mainTitle.textContent = `入木`;

// const introText = document.getElementById('intro');
// introText.innerHTML = `途中で<br>改行がある文章です。`

// const changeBtn = document.getElementById('change-btn');
// changeBtn.innerHTML = `<strong>内容を変更する</strong>`



// let newSize = 50;
// mainTitle.style.fontSize = `${newSize}px`;



// changeBtn.addEventListener('click', () => {
//     mainTitle.style.color = '#ff3366';
//     mainTitle.style.backgroundColor = ' #333333';

//     introText.style.letterSpacing = '1em';
//     introText.style.marginBottom = '50px';
//     introText.style.fontStyle = 'italic';
// });





// 課題

// 内容読み込み
const themeTitle = document.getElementById('theme-title');
const themeDesc = document.getElementById('theme-desc');
const body = document.body;

// ボタン読み込み
const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');
const btnPop = document.getElementById('btn-pop');



// ボタンクリック時
btnLight.addEventListener('click', () => {
    themeTitle.style.color = '#333';
    themeDesc.style.color = '#333';
    body.style.backgroundColor = '#fff';
})

btnDark.addEventListener('click', () => {
    themeTitle.style.color = '#fff';
    themeDesc.style.color = '#fff';
    body.style.backgroundColor = '#333';
})

btnPop.addEventListener('click', () => {
    themeTitle.style.color = '#56cbff';
    themeDesc.style.color = '#ee0077';
    body.style.backgroundColor = '#fef748';
})
