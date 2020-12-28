class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }

    update(state){
    database.ref('/').update({
    gameState: state
    });
      }

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
     
     ball = createSprite(100,200);
     ball.addImage("ball",ball_img);
    
     player1 = createSprite(100,200);
     player1.addImage("player1",red_img);
    }

    play(){
      form.hide();

      Player.getPlayerInfo();

      

      if(allPlayers !== undefined){
        background(rgb(198,135,13));
        image(ground, 0,0, 1367,657);

        var index = 0;

        var x;
        var y;

        for(var plr in allPlayers){

          index = index + 1 ;

          y = displayHeight - allPlayers[plr].distance;
          players[index-1].x = x;
          players[index-1].y = y;

        console.log(index, player.index)
        }
      

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }


    }

    var location = database.ref("ball/position");
    location.on("value", readPosition, showError);

    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
      // changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }

    function writePosition(x,y){
    
      database.ref("ball/position").set({
          'x': position.x + x,
          'y': position.y + y,
  
      })
    }

    function readPosition(data){
      position = data.val();

      ball.x = position.x + x;
      ball.y = position.y + y;
    }
  } 
}  