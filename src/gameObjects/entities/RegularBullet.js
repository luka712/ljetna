function RegularBullet(game, sprite, dir) {
    var speed = 200;

    BaseGameObject.call(this, game, sprite);
    this.sprite.body.velocity.x = dir.x * speed;
    this.sprite.body.velocity.y = dir.y * speed;
}

RegularBullet.prototype = Object.create(BaseGameObject.prototype);


RegularBullet.prototype.update = function () {
    // STEP 32. Call base bullet update method 
    BaseBullet.prototype.update.call(this);
}