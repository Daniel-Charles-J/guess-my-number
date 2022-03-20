'use strict';
let guessEl=document.getElementById('guess');
let inputEl=document.getElementById('input');
let btnEl=document.getElementById('btn-submit');
let score=20;
let highScore=0;
let scoreEl=document.getElementById('score');
let highScoreEl=document.getElementById('high-score');
let btnAgain= document.getElementById('btn-again')
let secretNumber=Math.trunc(Math.random()*40+1);

btnEl.addEventListener('click',function(){
    let input= Number(inputEl.value);
    if(score>=1){
    if(!input){
        document.querySelector('.guess').textContent='Please Type any Number'
        }else if(input=== secretNumber){
            document.querySelector('.guess').textContent='You Are Correct!!!!';
            document.querySelector('.main').style.backgroundColor="#62F565";
            document.querySelector('.head').style.backgroundColor="#62F565";
            document.getElementById('btn-submit').textContent=" YOU WIN"
            if(score>highScore){
                highScore=score;
                highScoreEl.textContent=highScore;

            }
        }else if(input > secretNumber){
            document.querySelector('.guess').textContent='Try to Select Small Number';
            score--;
            scoreEl.textContent=score;
            inputEl.value=null;
        }else if(input < secretNumber){
            document.querySelector('.guess').textContent='Try to Select Big Number';
            score--;
            scoreEl.textContent=score;
            inputEl.value=null;
        }
    }if(score<=0){
        document.querySelector('.main').style.backgroundColor="#ed5353";
        document.querySelector('.head').style.backgroundColor="#ed5353";
    }
}
)
btnAgain.addEventListener('click', function(){
    scoreEl.textContent=20;
    secretNumber=Math.trunc(Math.random()*40+1);
    document.querySelector('.main').style.backgroundColor="aqua";
    document.querySelector('.head').style.backgroundColor="aqua";
    inputEl.value=null;
    document.getElementById('btn-submit').textContent="Submit Guess";
    document.getElementById('head').textContent="Number Guessing Game";

})