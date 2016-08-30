
var game = null;

// STEP 1. Define non writable  HEIGHT Property and set it's value to 600
Object.defineProperties(window, {
    "WIDTH": {
        value: 800,
        writable: false
    },
    "HEIGHT": {
        value: 600,
        writable: false
    }
    // STEP 39. Add COOLDOWN property 
});

window.onload = function () {

    var mainPhaserMethods = {};
    mainPhaserMethods.preload = preload;
    mainPhaserMethods.create = create;
    // STEP 2. Add update property and assign update function to property
    mainPhaserMethods.update = update;


    game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '', mainPhaserMethods);
}

function preload() {
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    for (i = 0; i <= 7; i++) {
        this.load.image('asteroid' + i, 'assets/asteroid' + i + '.png');
    }
    this.load.image('bullet', 'assets/bullet.png');
}

function create() {

    // STEP 7. Change backgrounds from null to array. 
    this.backgrounds = [];

    this.backgrounds.push(new ScrollingBackground(game, this.add.sprite(0, 0, 'background')));
    // STEP 8. Create another background instance amd push it to array
    this.backgrounds.push(new ScrollingBackground(game, this.add.sprite(WIDTH, 0, 'background')));

    // STEP 16: Create player instance
    // Try running game after this step. There should be movable player. 
    this.player = new Player(game, this.add.sprite(100, 100, 'player'));


    // STEP 19. Create enemies property. It should be of type array. 
    this.enemies = [];


    // STEP 22. Uncomment spawn method and asteroidSpawnTimer
    this.spawnAsteroid = function () {
        // STEP 23. Create random int ( whole number) between 0 and 7 ( 0 and 7 included) and use it to create asteorid sprite. 
        // Use parseInt and Math.random functions. See asteorid sprite naming in preload function 
        // Create random y position for sprite that goes from yOffset to HEIGHT - yOffset. X position should be set to WIDTH + xOffset.
        // Best number for offset would be sprite.height / 2 (since scaling is set to 0.5 for most sprites)
        var index = parseInt(Math.random() * 8);
        var sprite = this.add.sprite(0, 0, 'asteroid' + index);
        var offset = sprite.height * 0.5;
        sprite.position.x = WIDTH + offset;
        sprite.position.y = (Math.random() * HEIGHT - offset) + offset;


        // STEP 24. Create asteorid, pass in this and sprite variable. Add asteroid to enemies array.

    }
    this.asteroidSpawnTimer = game.time.events.loop(Phaser.Timer.SECOND, this.spawnAsteroid, this);

    // STEP 36. create spawnRegularBullet method, which will just add new bullet. Use player position for bullet sprite position and set bullet direction.
    // Direction should be object with x and y properties.


    // STEP 37. Bind shooting key to player, space for example.

    // STEP 40. Add cooldown property and set it to 0
}

function update() {
    if (this.player && this.player.active) {
        this.player.update();
    }

    // STEP 9. Loop through backgrounds array and call update method for each entity.
    for (var i in this.backgrounds) {
        this.backgrounds[i].update();
    }

    // STEP 20. Loop through enemies array. Enemies array should loop from end of array to begining of array, starting at i = this.enemies.length - 1
    // uncomment for loop code when on this step.
    for (var i = this.enemies.length - 1; i >= 0; i--) {

        // STEP 25. Uncomment collision code and add index 
        //this.game.physics.arcade.collide(this.player.sprite, this.enemies[/* add index here */].sprite, playerEnemyCollision); 

        // STEP 44. Add for loop for bullets and check for collision between bullet and enemy. Pass bulletEnemyCollision to collide call

        // STEP 21. Update enemies. If enemies active property is set to false, And destroy it's sprite with sprite.destroy(), remove enemy from array. 
        // Use array splice method to do so.
        this.enemies[i].update();
        if (this.enemies[i].active == false) {
            this.enemies[i].sprite.destroy();
            this.enemies.splice(i, 1);
        }

    }

    // STEP 41. If game is run now bullets are spawned really fast, let's use cooldown property and reduce it by 
    // this.time.physicsElapsed        ref: http://phaser.io/docs/2.6.1/Phaser.Time.html#physicsElapsed

    // STEP 38. Check if shooting key is pressed. If so, call spawnRegularBullet 
    // STEP 42. Add check for cooldown <= 0 and reset this.cooldown to COOLDOWN inside if statement.


    // STEP 43. Add for loop for bullets starting from bullets end, update bullet, 
    // add check for inactive bullets,  if bullets is not active, remove it from array and destroy bullet sprite
}

function playerEnemyCollision(playerSprite, enemySprite) {
    // STEP 29. Decrease player health on collision with sprite. Use damage property added previously. Set enemy active property to false.
    playerSprite.object.health -= 0;

    // STEP 30. If player health is less then 0, set active property to false. Destroy player sprite.
    // Try to run game after this step.

}

function bulletEnemyCollision(bulletSprite, enemySprite) {
    // STEP 45. Set sprite objects active property to false
}
