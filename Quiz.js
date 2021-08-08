class Quiz{
    constructor(){}
    getState(){
        var gameStateRef  = database.ref('GameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          'GameState': state
        });
      }

      

   async start(){
        if(gameState === 0){
            
            player = new Player();
            var playerCountRef = await database.ref('PlayerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    play(){
        background("blue");
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            for(var plr in allPlayers){
                text("player1 : "+player[plr].score, 100, 100);
            }
        }
        
        
    }
}