function Game(ctx, width, height, floor){
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.floor = floor;
    this.cat = new Cat(this.floor);
    this.enemy = new Enemy(this.width, this.height, this.floor);
    this.obstacles = [];
    this.bullets = [];
    this.render = new Render(this.ctx, this.cat, this.enemy, this.obstacles);
    this.score = 0;
};

Game.prototype.start = function(gameEnd){
    this._assignControlToKeys();
    this.gameEnd = gameEnd;
    this.throwObstacles();
    this.getScore();
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
                this.cat.teaBag = true;
                this.cat.teaBagging();
                break;
            case 39: //arrow right
                this.cat.move = true;
                this.cat.goRight();
                break;
            case 88: //x
                break; 
        }
    }.bind(this);

    document.onkeyup = function (e) {
        switch (e.keyCode) {
            case 37: //arrow left
                this.cat.move = false;
                break;
            case 40: //arror down
                this.cat.teaBag = false;
                this.cat.teaBagging();
                break;
            case 39: //arrow right
                this.cat.move = false;
                break; 
            case 88: //x
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
    this.render.drawLifes(this.cat.life);
    this.render.drawScore(this.score);
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

Game.prototype.getScore = function(){
    this.scoreID = setInterval(function(){
        this.score++;
    }.bind(this), 1000);
};

// Game.prototype.stop = function(){};

Game.prototype.checkCollisionCatVsEnemy = function(){
    if (this.cat.x + this.cat.width >= this.enemy.x){
        this.cat.life--;
    } 
};

Game.prototype.throwObstacles = function(){
    this.intervalPepinil = setInterval(function(){
        this.obstacles.push(new Obstacle(this.width, this.floor));
    }.bind(this), 1000);
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

Game.prototype.checkObstacle = function(){
    this.obstacles.forEach(function(obstacle, index, obstaclesArr){
        if(obstacle.x < 0){
            obstacle.clearIntervalId();
            obstaclesArr.shift();
        }
    }.bind(this));
};

Game.prototype.gameOver = function(){
    if(this.cat.life === 0){
        clearInterval(this.scoreID);
        return true;
    }
};