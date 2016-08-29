
// STEP 11. Add game and sprite parameters to Player constructor
function Player() {
     
     // STEP 12. Inherit from BaseGameObject. Tip: use call function
     
     
     // STEP 14. Make sprite body collidable with world. See http://phaser.io/docs/2.4.4/Phaser.Physics.Arcade.Body.html for reference.
     
     
     this.speed = 200;
     this.sprite.scale.setTo(0.5, 0.5);
     // Bind all keypresses here
     this.keys = this.game.input.keyboard.addKeys({
         up: Phaser.KeyCode.W,
         down: Phaser.KeyCode.S,
         left: Phaser.KeyCode.A,
         right: Phaser.KeyCode.D,
     });
     
     // STEP 27. Add health property and set it to 100
}

// STEP 13. Create Player prototype. Player prototype should inherit from BaseGameObject. See how it's done in ScrollingBackground.


Player.prototype.update = function(){
    
    if(this.keys.up.isDown){
        this.sprite.body.velocity.y = -this.speed;
    }else if(this.keys.down.isDown){
        this.sprite.body.velocity.y = this.speed;
    }else{
        this.sprite.body.velocity.y = 0;
    }
    
    // STEP 15. Add check for left and right keys and set x velocity
    
}

// STEP 33. Add bind key method, that takes 2 params, one is key ( property ) on this.keys , second one is phaser keyCode
// http://phaser.io/examples/v2/input/key


// STEP 34. Add check key down method, pass key as parameter

// STEP 35. Add getPosition method which will return sprite position
