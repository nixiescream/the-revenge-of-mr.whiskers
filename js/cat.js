function Cat(width, height){
    this.x = 200,
    this.y = height-200,
    this.direction = 'right',
    this.life = 1
}

Cat.prototype.run = function(){};
Cat.prototype.goLeft = function(){
    this.direction = 'left';
};

Cat.prototype.goRight = function(){
    this.direction = 'right';
};

Cat.prototype.jump = function(){};
Cat.prototype.shot = function(){};
Cat.prototype.die = function(){};