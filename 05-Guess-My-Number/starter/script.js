'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😀correct number！';
//.message表示class="message"
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 1;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //无输入
    if (!guess) {
        // document.querySelector('.message').textContent = '🥺 No Number!';
        displayMessage('🥺 No Number!');
    } else if (guess === secretNumber) {//猜对
        displayMessage('😁 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#4b94e8';
        document.querySelector('.number').style.width = '50rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '❗ Too high!' : '❗ Too low!';
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😢You lose the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});
/*} else if (guess > secretNumber) {//猜高了
    if (score > 1) {
        document.querySelector('.message').textContent = '❗ Too high!';
        score -= 1;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '😢You lose the game!';
        document.querySelector('.score').textContent = 0;
    }
} else if (guess < secretNumber) {//猜低了
    if (score > 1) {
        document.querySelector('.message').textContent = '❗ Too low!';
        score -= 1;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '😢You lost the game!';
        document.querySelector('.score').textContent = 0;
    }
}
});*/

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = '?';
})

