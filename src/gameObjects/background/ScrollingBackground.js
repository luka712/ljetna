function ScrollingBackground(game, sprite){
    
    // STEP 5. Call base game object and pass arguments
    BaseGameObject.call(this, ,);
        
    // Sets sprite movement direction and speed.
    this.sprite.body.velocity.x = -30;
    this.sprite.anchor = new Phaser.Point(0,0);
}

ScrollingBackground.prototype = Object.create(BaseGameObject.prototype);

ScrollingBackground.prototype.update = function () {
    // STEP 10. Check if scrolling background position is is less or equal negative WIDTH. If so set it to positive WIDTH.
    // Use this.sprite.position.x to set position properly
    // Try running game to see if background is scrolling.
}