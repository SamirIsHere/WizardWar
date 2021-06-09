class Game {
  constructor(){

  }

  //Points to getstate, gets value in firebase database
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
  //Changes value of Player 1's power. Each power with number: 1 = Attack, 3 = Charge, 2, Defend
Player1Power(P1){
  var P1Data = database.ref('Player1/Power');
  P1Data.on("value", function(data){
    P1 = data.val();
  });
}

Player2Power(P2){
  var P2Data = database.ref('Player2/Power');
  P2Data.on("value", function(data){
    P2 = data.val();
  });
}
  //update = updates the value in your database.
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  updatePower1(Power01){
    database.ref('Player1').update({
      Power : Power01
    });
  }
  updatePower2(Power02){
    database.ref('Player2').update({
      Power : Power02
      });
  };
  
         
  

  //player is player in playercount, playerCount.ref = refers to playercount
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    Wizard = createSprite(100,200);
    WIzard.addImage("Wizard", Wizzy);
    Player = createSprite(300,200);
   Sorcerers = [Wizard, Player];

    if(allPlayers !== undefined){
      //var display_position = 100;
      //
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 0;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        Sorcerers[index-1].x = x;
        Sorcerers[index-1].y = y;

        if (index === player.index){
            Sorcerers[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = Sorcerers[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    drawSprites();
  }
  
}
