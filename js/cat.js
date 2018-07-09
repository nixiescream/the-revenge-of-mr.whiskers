function Cat(width, floor){
    this.x = 200,
    this.y = floor,
    this.floor = floor,
    this.direction = 'right',
    this.life = 1,
    // this.speed_x = 15,
    // this.speed_y = -30,
    // this.gravity = 2,
    this.t = 0,
    this.up = false
}

Cat.prototype.run = function(){
    switch(this.direction){
        case 'left':
            this.x -= 15;
            break;
        case 'right':
            this.x += 15;
            break;
    }
};

Cat.prototype.goLeft = function(){
    this.direction = 'left';
};

Cat.prototype.goRight = function(){
    this.direction = 'right';
};

Cat.prototype.jump = function(){
    if (this.up) {
        this.t += 1;
        this.y += 0.35*this.t*this.t - 5.75*this.t;
        // this.y += this.speed_y;
        // this.speed_y += this.gravity;
        if (this.y > this.floor){
            this.y = this.floor;
            this.t = 0;
            this.up = false;
        }
    }
};

Cat.prototype.shot = function(){};
Cat.prototype.die = function(){};