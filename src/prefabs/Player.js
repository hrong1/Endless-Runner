class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.physics.add.existing(this)
        scene.add.existing(this)
        this.JUMP_VELOCITY = -700
        this.MAX_JUMPS = 2
        this.SCROLL_SPEED = 4
        this.jumping = false
        this.jumps = 2
    }

    update(){
        if(this.isGrounded) {
	    	this.jumps = this.MAX_JUMPS
	    	this.jumping = false
	    }
 
        if(this.jumps > 0 && Phaser.Input.Keyboard.JustDown(keySPACE)) {
	        this.body.velocity.y = this.JUMP_VELOCITY
	        this.jumping = true
	    } 
	    if(this.jumping && Phaser.Input.Keyboard.JustDown(keySPACE)) {
	    	this.jumps--
	    	this.jumping = false
	    }
    }
}