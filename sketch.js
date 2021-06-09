var canvas;

var gameState = 0;
//Gamestate = 0 loading screen, insert name. 
//Gamestate = 1 clears loading sreen, asks to pick option 1, 2, 3.
//Gamestate = 2 game is looking at 2 inputs and using logic to decide who gets what hearts. 

var distance = 0;
var P1hearts = 3;
var P2hearts = 3;
var database;
var P1, P2;

var form, player, game;

var Player, Wizard;

function preload(){
  Attack = loadImage("../images/Untitled drawing.jpg")
 Defence = loadImage("../images/Untitled drawing(1).jpg")
 Charge = loadImage("../images/Untitled drawing(2).jpg")
 Wizzy = loadeImage("../images/Wizard.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  game = new Game();
  game.start();
}


function draw(){
  if(playerCount === 2){
    gameState = 1
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 1){
       
  }
  if(this.attack && gameState === 1){
    
  }

  if(P1 != 0 && P2 != 0 ){
    Battle();
  }

  function Battle(){
    if(P1 === 3 && P2 === 1){
      P1hearts = P1hearts - 1
      GameState = 2
    } else if(P1 === 2 && P2 === 1){
      P2hearts = P2hearts - 1
      GameState = 2
    } else if(P1 === 2 && P2 === 3){
      P1hearts = P1hearts - 1
      GameState = 2
    } else if(P2 === 3 && P1 === 1){
      P2hearts = P2hearts - 1
      GameState = 2
    } else if(P2 === 2 && P1 === 1){
      P1hearts = P1hearts - 1
      GameState = 2
    } else if(P2 === 2 && P1 === 3){
      P2hearts = P2hearts - 1
   GameState = 2
   }
  }
  if(GameState === 2){
    Game.updatePower1(0);
    Game.updatePower2(0);
    GameState = 1
  }

}