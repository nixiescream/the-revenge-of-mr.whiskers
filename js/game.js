function Game(ctx, width, height, floor){
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.floor = floor;
    this.cat = new Cat(this.floor);
    this.enemy = new Enemy(this.width, this.height, this.floor);
    this.obstacles = [];
    this.bullets = [];
    this.render = new Render(this.ctx, this.cat, this.enemy, this.obstacles, this.bullets);
    this.score = 0;
    this.shooting = false;
};

Game.prototype.start = function(gameEnd){
    this._assignControlToKeys();
    this.gameEnd = gameEnd;
    this.intervalGame = window.requestAnimationFrame(this.doFrame.bind(this));
};

Game.prototype._assignControlToKeys = function(){
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 38: //arrow up
                this.cat.up = true;
                break;
            case 37: //arrow left
                this.cat.move = true;
                this.cat.goLeft();
                break;
            case 40: //arrow down
                this.cat.teaBag = true;
                this.cat.teaBagging();
                break;
            case 39: //arrow right
                this.cat.move = true;
                this.cat.goRight();
                break;
            case 88: //x
                this.shooting = true;
                break; 
        }
    }.bind(this);

    document.onkeyup = function (e) {
        switch (e.keyCode) {
            case 37: //arrow left
                this.cat.move = false;
                break;
            case 40: //arrow down
                this.cat.teaBag = false;
                this.cat.teaBagging();
                break;
            case 39: //arrow right
                this.cat.move = false;
                break; 
            case 88: //x
                this.shooting = false;
                break;
        }
    }.bind(this);
};

Game.prototype.doFrame = function (){
    this.cat.run();
    this.cat.jump();
    this.shoot();
    this.throwObstacles();
    this.checkObstacle();
    this.checkCollisionCatVsEnemy();
    this.checkCollisionCatVsObstacle();
    this.checkCollisionEnemyVsBullet();
    this.render.drawBackground(this.width, this.height);
    this.render.drawEnviroment(this.width, this.height);
    this.render.drawCat();
    this.render.drawObstacles();
    this.render.drawBullet();
    this.render.drawEnemy();
    this.render.drawCatLife();
    this.render.drawEnemyLife();
    if(this.gameOver() === 'GameOver'){
        this.gameEnd('GameOver');
    } else if(this.gameOver() === 'Win'){
        this.gameEnd('Win');
    } else {
        this.intervalGame = window.requestAnimationFrame(this.doFrame.bind(this));
    }

    this.countBullet++;
    this.countObstacles++;
};

// Game.prototype.stop = function(){};

Game.prototype.checkCollisionCatVsEnemy = function(){
    if (this.cat.x + this.cat.width >= this.enemy.x){
        this.cat.life--;
    } 
};

Game.prototype.shoot = function(){
    if(this.countBullet <= 20){return}
    if(this.shooting){
        if(this.cat.teaBag && this.shooting){
            this.cat.image.src="images/sprites/cat-teabag2.png";
        }else{
            this.cat.image.src="images/sprites/cat2.png";
        }
        this.bullets.push(new Bullet(this.cat.x, this.cat.y, this.cat.width, this.cat.height));
        this.countBullet = 0;
    } else {
        if(this.cat.teaBag && !this.shooting){
            this.cat.image.src="images/sprites/cat-teabag1.png";
        }else if(!this.cat.teaBag && !this.shooting){
            this.cat.image.src="images/sprites/cat1.png";
        }
        this.bullets.forEach(function(bullet, index, bulletsArr){
            if(bullet.x < 0){
                bulletsArr.shift();
            }
        }.bind(this));
    }
};

Game.prototype.clearShoot = function(){
    this.bullets.shift();
};

Game.prototype.throwObstacles = function(){
    var maxObstacles = Math.floor(Math.random()*(400 - 20)) + 20;
    if(this.countObstacles <= maxObstacles){return}
    this.obstacles.push(new Obstacle(this.width, this.floor));
    this.countObstacles = 0;
};

Game.prototype.checkCollisionCatVsObstacle = function(){
    this.obstacles.forEach(function(obstacle){
        if (this.cat.x + this.cat.width >= obstacle.x && this.cat.x <= obstacle.x + obstacle.width 
        && this.cat.y + this.cat.height >= obstacle.y && this.cat.y <= obstacle.y + obstacle.height){
            if(!obstacle.collision){
                obstacle.collision = true;
                this.cat.life--;
            }
        }
    }.bind(this));
};

Game.prototype.checkCollisionEnemyVsBullet = function(){
    this.bullets.forEach(function(bullet){
        if (bullet.x + bullet.width >= this.enemy.x){
            this.enemy.collision = false;
            if(!(this.enemy.collision) && this.enemy.life > 0){
                this.enemy.collision = true;
                this.enemy.life = this.enemy.life - bullet.damage;
                this.clearShoot();
            }
        }
    }.bind(this));
};

Game.prototype.checkObstacle = function(){
    this.obstacles.forEach(function(obstacle, index, obstaclesArr){
        if(obstacle.x < 0 || obstacle.collision === true){
            obstacle.clearIntervalId();
            obstaclesArr.shift();
        }
    }.bind(this));
};

Game.prototype.gameOver = function(){
    if(this.cat.life === 0){
        return 'GameOver';
    } else if(this.enemy.life === 0){
        return 'Win';
    }
};