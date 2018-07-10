function Game(ctx, width, height, floor){
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.floor = floor;
    this.cat = new Cat(this.floor);
    this.enemy = new Enemy(this.width, this.height, this.floor);
    this.obstacles = [];
    this.render = new Render(this.ctx, this.cat, this.enemy, this.obstacles);
    this.collisionWithEnemy = false;
    this.collisionWithObstacle = false;
};

Game.prototype.start = function(gameEnd){
    this._assignControlToKeys();
    this.gameEnd = gameEnd;
    this.throwObstacles();
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
            case 40: //arror down
                //some code
                break;
            case 39: //arrow right
                this.cat.move = true;
                this.cat.goRight();
                break; 
        }
    }.bind(this);

    document.onkeyup = function (e) {
        switch (e.keyCode) {
            case 37: //arrow left
                this.cat.move = false;
                break;
            case 40: //arror down
                //some code
                break;
            case 39: //arrow right
                this.cat.move = false;
                break; 
        }
    }.bind(this);
};

Game.prototype.doFrame = function (){
    this.render.drawBackground(this.width, this.height);
    this.render.drawEnviroment(this.width, this.height);
    this.render.drawCat();
    this.render.drawObstacles();
    this.render.drawEnemy();
    this.cat.run();
    this.cat.jump();
    this.checkObstacle();
    this.checkCollisionCatVsEnemy();
    this.checkCollisionCatVsObstacle();
    if(this.gameOver()){
        this.gameEnd();
    } else {
        this.intervalGame = window.requestAnimationFrame(this.doFrame.bind(this));
    }
};

// Game.prototype.stop = function(){};

Game.prototype.checkCollisionCatVsEnemy = function(){
    if (this.cat.x + this.cat.width >= this.enemy.x){
        this.collisionWithEnemy = true;
    } 
};

Game.prototype.throwObstacles = function(){
    this.intervalPepinil = setInterval(function(){
        this.obstacles.push(new Obstacle(this.width, this.floor));
    }.bind(this), 2000);
};

Game.prototype.checkCollisionCatVsObstacle = function(){
    this.obstacles.forEach(function(obstacle){
        if (this.cat.x + this.cat.width >= obstacle.x && this.cat.x <= obstacle.x + obstacle.width 
        && this.cat.y + this.cat.height >= obstacle.y && this.cat.y <= obstacle.y + obstacle.height){
            this.collisionWithObstacle = true;
        }
    }.bind(this));
};

Game.prototype.checkObstacle = function(){
    this.obstacles.forEach(function(obstacle, index, obstaclesArr){
        if(obstacle.x < 0){
            obstacle.clearIntervalId();
            obstaclesArr.shift();
        }
    }.bind(this));
    console.log(this.obstacles);
};

Game.prototype.gameOver = function(){
    if(this.collisionWithEnemy || this.collisionWithObstacle){
        return true;
    }
};