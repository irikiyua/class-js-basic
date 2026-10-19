const btn = document.getElementById('menu-btn');
const nav = document.getElementById('nav-menu');


btn.addEventListener('click', () => {
    btn.classList.toggle('is-open');

    if (btn.classList.contains('is-open')) {
        nav.style.right = 0;
    } else {
        nav.style.right = '-260px';
    }
})


/* このやり方の方が楽
CSSは
.nav-menu.is-open {
    right: 0;
}
    これだけでいい

    自分でやったやり方でやると
    CSSで変化させようとした時に.nav-menuで書いたことを
    .nav-menu.is-openにした時にも書かないといけないのでめんどくさい
*/

// // 1. 操作したい要素を取得する
// const menuBtn = document.getElementById('menu-btn');
// const navMenu = document.getElementById('nav-menu');

// // 2. ボタンクリックでクラスをトグル（切り替え）する
// menuBtn.addEventListener('click', () => {
//     menuBtn.classList.toggle('is-open');
//     navMenu.classList.toggle('is-open');
// });
