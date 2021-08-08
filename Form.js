class Form{
    constructor(){
        this.input = createInput();
        this.play = createButton('Submit');
        this.header = createElement('h1');       
        this.reset = createButton('reset'); 
    }
    display(){
        
        background("purple");
        this.header.html("START QUIZ");
        this.header.position(200, 20);
        this.input.position(400, 100);
        this.play.position(400, 200);
        this.reset.position(600, 10);
        

            this.play.mousePressed(()=>{
            this.header.hide();
            this.input.hide();
            this.play.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        });
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            quiz.update(0);
            var PlayerInfoRef = database.ref('players');
            PlayerInfoRef.remove();
        })
    }
}