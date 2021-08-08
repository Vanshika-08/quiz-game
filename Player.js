class Player{
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
        this.score = 0;
      }
    
      getCount(){
        var playerCountRef = database.ref('PlayerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          PlayerCount: count
        });
      }
    
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          answer:this.answer,
          score:this.score
        });
      }
    
      static getPlayerInfo(){
        var PlayerInfoRef = database.ref('players');
        PlayerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
}