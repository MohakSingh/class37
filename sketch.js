var database;
var form,game,player;
var gameState=0,playerCount;
var allPlayers;
var car1, car2, car3, car4;
var cars;
function setup(){
  database = firebase.database();
  
  
  createCanvas(displayWidth,displayHeight);
  game=new Game();
  game.getState();
  game.start();

  
}

function draw(){
if(playerCount===4){
  game.update(1);
}
if(gameState===1){
  game.play();
}
}
  