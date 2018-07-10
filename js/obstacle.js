function Obstacle(width, floor){
    this.x = width-200;
    this.y = Math.floor(Math.random()* (570 - 610) + 610);
    this.width = 35;
    this.height = 35;
    this.intervalId = undefined;
    this.collision = false;
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
    this.x -= 30;
};