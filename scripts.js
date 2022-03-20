'use strict'
//Elements
let guessEl=document.getElementById('guess');
let inputEl=document.getElementById('input');

let btnEl=document.getElementById('btn-submit');
let btnAgain= document.getElementById('btn-again');

let scoreEl=document.getElementById('score');
let highScoreEl=document.getElementById('high-score');


//Variables

let score;
let highScore;
let secretNumber;
let input;

//Functions

const displayMessage=function(message){
    guessEl.textContent=message;
    }
    
const init=function(){
     score=20;
     highScore=0;
     secretNumber=Math.trunc(Math.random()*40+1);
     scoreEl.textContent=score;
     displayMessage('Guess My Number');
     document.querySelector('.main').style.backgroundColor="aqua";
     document.querySelector('.head').style.backgroundColor="aqua";
}

const check=function(){
    input=Number(inputEl.value);
if(!input){
    displayMessage('Please Type any Number')
}else if(input===secretNumber){
    displayMessage('You Are Correct!!!!');
    document.querySelector('.main').style.backgroundColor="#62F565";
    document.querySelector('.head').style.backgroundColor="#62F565";
    if(score>highScore){
        highScore=score;
        highScoreEl.textContent=highScore;
    }
    
}else{
    if(score>1){
        displayMessage(input >secretNumber ? 'Try to Select Small Number': 'Try to Select Big Number');
        score--;
        scoreEl.textContent=score;
        inputEl.value=null;

    }else{
        displayMessage('You Lost the Game!!!');
        scoreEl.textContent=0;
        inputEl.value=null;
        document.querySelector('.main').style.backgroundColor="#ed5353";
        document.querySelector('.head').style.backgroundColor="#ed5353";
    }
}
}
const again=function(){
    displayMessage('Guess MY Number');
    inputEl.value=null;
    scoreEl.textContent=20;
    scoreEl.value=20;
}

//Events
btnAgain.addEventListener('click', again);
btnEl.addEventListener('click', check);

//initial Settings
init();