class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }
    init() {
        // variables and settings
        this.physics.world.gravity.y = 2600
        this.pause = false;
        this.point = 0
    }

    preload(){
        this.load.path = './asset/img/'
        this.load.image('ball', 'ball.png')
        this.load.image('background', 'Background.png')
        this.load.image('tile', 'tile.png')
    }

    create(){
        // Background
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0)

        this.player = new Player(this, borderUISize + borderPadding, game.config.height - borderUISize - borderPadding + 1000, 'ball').setOrigin(0.5, 0)
        
        this.score = this.add.text(game.config.width/2, 30, this.point, { 
            font: '28px Futura', 
            fill: '#00AA11' 
        }).setOrigin(0.5)

        this.ground = this.add.group()
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'tile').setScale(SCALE).setOrigin(0)
            groundTile.body.immovable = true
            groundTile.body.allowGravity = false
            this.ground.add(groundTile)
        }

        this.physics.add.collider(this.player, this.ground)


    }

    update(){
        this.player.update()
        
       
    }
}