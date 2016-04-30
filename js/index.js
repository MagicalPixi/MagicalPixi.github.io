var gameFn = require('./game');
game = gameFn();

var body = document.querySelector('body');
var playGameButton = document.querySelector('.play-game-button');
var gameScore = document.querySelector('.game-score');

var allScore = 0;

playGameButton.onclick = function () {
    body.setAttribute('play-game','playing');

    game.play();

    allScore = 0;

    game.onStop(function () {
        console.log('stop');
        body.setAttribute('play-game','replay');

        playGameButton.innerText = '得分:'+allScore+',再来一次';
        gameScore.innerText = '分数:0';
    });
    game.onScore(function(score){
        allScore++;

        gameScore.innerText = '分数:'+allScore;
    });
};