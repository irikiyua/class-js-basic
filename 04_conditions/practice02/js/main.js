const commentInput = document.getElementById('comment-input');
const charCount = document.getElementById('char-count');
const warningText = document.getElementById('warning-text');
const postBtn = document.getElementById('post-btn');

// 上限を表すときや、絶対に変わらない値を表すときなどは名前を全部大文字にするなどして区別する
const MAX_LENGTH = 15;

postBtn.setAttribute('disabled', 'true');

commentInput.addEventListener('input', () => {
    // 複数出てきて長いものは変数にしてしまう
    let value = commentInput.value.length;

    // valueは値  lengthは長さ
    console.log(`現在の入力文字数: ${value}文字`);
    charCount.textContent = value;

    if (value === 0) {
        postBtn.setAttribute('disabled', 'true');
        warningText.textContent = '';
        commentInput.classList.remove('is-error');
        warningText.classList.remove('is-error');
    } else if (value > MAX_LENGTH) {
        warningText.textContent = '文字数オーバーです！'
        commentInput.classList.add('is-error');
        warningText.classList.add('is-error');
    } else {
        postBtn.removeAttribute('disabled');
        warningText.textContent = '';
        commentInput.classList.remove('is-error');
        warningText.classList.remove('is-error');
    }
});
