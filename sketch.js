var database;
var playerCount = 0;
var gameState = 0;
var quiz, player, form;


function setup() {
  createCanvas(800,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}

function draw() {
   if(playerCount == 2){
     quiz.update(1);
   }
  
}