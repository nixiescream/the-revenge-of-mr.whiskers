function Cat(width, floor){
    this.x = 200;
    this.y = floor;
    this.width = 50;
    this.height = 50;
    this.floor = floor;
    this.direction = 'right';
    this.life = 1;
    this.speed_x = 15;
    this.speed_y = -30;
    // this.gravity = 2
    this.t = 0;
    this.up = false;
    this.move = false;
}

Cat.prototype.run = function(){
    if(this.move){
        switch(this.direction){
            case 'left':
                this.x -= this.speed_x;
                break;
            case 'right':
                this.x += this.speed_x;
                break;
        }
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
        this.y += 0.33*this.t*this.t - 5.5*this.t;
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