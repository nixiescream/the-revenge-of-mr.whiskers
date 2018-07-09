function Enemy(width, height){
    this.x = width-250;
    this.y = 0;
    this.width = 230;
    this.height = height;
    this.life;
}

Enemy.prototype.throwObject = function(){};
Enemy.prototype.die = function(){};
