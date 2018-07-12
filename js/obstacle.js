function Obstacle(width, floor){
    this.x = width-200;
    this.y = Math.floor(Math.random()* (550 - 590) + 590);
    this.width = 90;
    this.height = 33;
    this.intervalId = undefined;
    this.collision = false;
    this.image = new Image();
    this.image.src = "./images/sprites/cucumber.png";
    this.start();
}

Obstacle.prototype.start = function(){
    if(!this.intervalId){
        this.intervalId = setInterval(this.move.bind(this), 20);
    }
};

Obstacle.prototype.clearIntervalId = function(){
    if(this.intervalId){
        clearInterval(this.intervalId);
    }
};

Obstacle.prototype.move = function(){
    this.x -= 25;
};