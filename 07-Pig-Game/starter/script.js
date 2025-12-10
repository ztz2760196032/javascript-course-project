'use strict';

//选择元素
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const init = function () {
//移除获胜标记
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
//隐藏骰子
    diceEl.classList.add('hidden');
//重置当前分数和总分
    current0El.textContent = 0;
    score0El.textContent = 0;
    current1El.textContent = 0;
    score1El.textContent = 0;
    currentScore = 0;//当前分数清0
    activePlayer = 0;//默认回到玩家0
    player0El.classList.add('player--active');//激活玩家0
    player1El.classList.remove('player--active');//禁用玩家1
    playing = true;
}


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function () {
    if (playing) {

        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            //切换到下一个玩家
            switchPlayer();

        }
    }

});

btnHold.addEventListener('click', function () {
    if (playing) {
        //添加currentscore到当前玩家分数
        scores[activePlayer] += currentScore;
        console.log(scores[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            // alert(`The game is over,the winner  is player${activePlayer}!😁`);
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        }//检查分数是否>=100
        //结束游戏
        else {
            switchPlayer();
        }//切换到下一个玩家
    }
})
btnNew.addEventListener('click', init)



