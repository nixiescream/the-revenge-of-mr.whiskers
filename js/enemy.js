function Enemy(width, height){
    this.x = width-250;
    this.y = 0;
    this.width = 230;
    this.height = height-150;
    this.life;
}

Enemy.prototype.die = function(){};
