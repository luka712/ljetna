// STEP 18. Create Asteroid class, add appropriate parameters. Inherit from BaseEnemy. Set negative velocity and random rotation for Asteroid.
// Create Asteroid prototype
function Asteroid(game, sprite){
    BaseEnemy.call(this, game, sprite);
    this.sprite.body.velocity.x = -(Math.random() * 50 + 50);
    this.rotation = (Math.random() - 0.5) * 10
}

Asteroid.prototype = Object.create(BaseEnemy.prototype);

// STEP 18. Uncomment this
 Asteroid.prototype.update = function () {
     BaseEnemy.prototype.update.call(this);
     
 }