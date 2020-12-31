class Form {
    constructor(){
        this.title = createElement('h1'); 
         this.input=createInput("Name");
         this.button = createButton("play")
         this.greetings = createElement('h2');
    }
    display(){
     this.title.html("Car Racing Game");
        this.title.position(displayWidth/2,0);

        
               this.input.position(displayWidth/2,displayHeight/2-200);

 
this.button.position(displayWidth/2+100,displayHeight/2-150);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    this.greetings.html("Welcome "+player.name);
    this.greetings.position(displayWidth/2,displayHeight/2);
    playerCount=playerCount+1;
    player.index=playerCount;
    player.updateCount(playerCount);
    player.update(name);
})


    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greetings.hide();
    }
}