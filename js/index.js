var gameFn = require('./game');
game = gameFn();

var body = document.querySelector('body');
var playGameButton = document.querySelector('.play-game-button');
var gameScore = document.querySelector('.game-score');
var gameScoreMax = document.querySelector('.game-score-max');

var allScore = 0;
var maxScoreKey = 'bestScore';
var maxScore = localStorage.getItem(maxScoreKey) || 0;

gameScoreMax.innerText = maxScore;

playGameButton.onclick = function () {
    body.setAttribute('play-game','playing');

    game.play();

    allScore = 0;

    game.onStop(function () {
        console.log('stop');
        body.setAttribute('play-game','replay');

        playGameButton.innerText = '得分:'+allScore+',再来一次';
        gameScore.innerText = 0;
    });
    game.onScore(function(score){
        allScore++;

        if(parseInt(allScore) > parseInt(maxScore)){
            maxScore = allScore;
            gameScoreMax.innerText = allScore;
            localStorage.setItem(maxScoreKey,maxScore);
        }
        gameScore.innerText = allScore;
    });
};