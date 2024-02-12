class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }
    
    preload(){

    }

    create(){
        this.player = new Player(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0)
    }

    update(){
        
    }
}