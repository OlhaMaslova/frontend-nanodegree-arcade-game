// Variables declaration
const boyIcon = document.querySelector('.boy');
const princessIcon = document.querySelector('.princess');
const catIcon = document.querySelector('.cat'); 
const modal = document.querySelector('.modal');
let playerImg;
let allEnemies = [];

// Enemies our player must avoid
class Enemy {
    constructor(x,y, speed){
        //Set image for enemy
        this.sprite = 'images/enemy-bug.png';
        //Set initial location
        this.x = x;
        this.y = y;
        //Set the speed
        this.speed = speed;
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x +=this.speed * dt;

        //Reset position if enemeny goes off screen
        if (this.x > 550){
            this.x = -100;
        }

        // Detect collisions
        if (player.x < this.x + 60 &&
            player.x + 30 > this.x &&
            player.y < this.y + 25 &&
            player.y + 30 > this.y) {
                player.sprite = 'images/explosion.png';
                this.x = -100;
                setTimeout(function(){
                    player.sprite = playerImg;
                    player.x = 200;
                    player.y = 400;
                }, 500);
        }
    }

    // Draw the enemy on the screen, required method for game
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Instantiate Enemies
let enemy = new Enemy (-100, 300, 100);
let enemy1 = new Enemy (-100, 200, 200);
let enemy2 = new Enemy (-100, 100, 300);
let enemy3 = new Enemy (-100, 300, 400);
let enemy4 = new Enemy (-100, 200, 500);
let enemy5 = new Enemy (-100, 100, 150);
let enemy6 = new Enemy (-100, 200, 250); 

allEnemies.push(enemy, enemy6, enemy5, enemy4, enemy3, enemy2, enemy1);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method. 
class Player {
    constructor(x, y, speed, sprite) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = sprite;
    }

    update() { 
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(keyEnter) {
        switch (keyEnter) {
            case 'left':
                this.x -= this.speed;
                if (this.x < 0) {
                    this.x = 0;
                }
                break;
            case 'right':
                this.x += this.speed;
                if (this.x > 400) {
                    this.x = 400;
                }
                break;
            case 'up':
                this.y -= this.speed;
                if (this.y < 0) {
                    this.x = 200;
                    this.y = 400;
                }
                break;
            case 'down':
                this.y += this.speed;
                if (this.y > 425) {
                    this.y = 425;
                }
                break;
        }
    }
}

// Instantiate Player
let player  = new Player(200, 400, 50);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function startGame(icon){
    if(icon==='boy'){
        player.sprite='images/char-boy.png';
        playerImg='images/char-boy.png';
    }
    if(icon==='princess'){
        player.sprite='images/char-princess-girl.png';
        playerImg='images/char-princess-girl.png';
    }
    if(icon==='cat'){
        player.sprite='images/char-cat-girl.png';
        playerImg='images/char-cat-girl.png';
    }
    modal.classList.remove('ShowModal');
}

boyIcon.addEventListener('click', startGame('boy'));
princessIcon.addEventListener('click', startGame('princess'));
catIcon.addEventListener('click', startGame('cat'));