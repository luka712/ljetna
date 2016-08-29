function BaseGameObject(game, sprite) {
    this.game = game;
    this.active = true;
    // STEP 3. Add sprite property ( in same way as game property)
    
     this.sprite.anchor = new Phaser.Point(0.5,0.5);
    
    // STEP 6. Pass sprite variable to enable physics engine for sprite
    game.physics.enable(, Phaser.Physics.ARCADE);
    
    // STEP 26. Add object property to sprite, and set it to this context 
}

BaseGameObject.prototype = {
    // STEP 4. Add update function 
}