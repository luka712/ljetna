function BaseEnemy(game, sprite) {
    BaseGameObject.call(this, game , sprite);

    this.sprite.scale.setTo(0.5, 0.5);
}

BaseEnemy.prototype = Object.create(BaseGameObject.prototype);

BaseEnemy.prototype.update = function () {
    // STEP 17. Check if sprite has passed left side of screen. Also take width of sprite into account. If passed, set active property to false.
    if(this.sprite.position.x <= 0 - this.sprite.width / 2){
        this.active = false;
    }
    
}