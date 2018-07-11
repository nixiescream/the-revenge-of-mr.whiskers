function Cat(floor){
    this.x = 200;
    this.y = floor;
    this.width = 50;
    this.height = 50;
    this.floor = floor;
    this.direction = 'right';
    this.life = 3;
    this.speed_x = 15;
    this.speed_y = -30;
    this.gravity = 5.5;
    this.acceleration = 0.33;
    this.t = 0;
    this.up = false;
    this.move = false;
    this.teaBag = false;
}

Cat.prototype.run = function(){
    if(this.move){
        switch(this.direction){
            case 'left':
                if(this.x > 0){
                    this.x -= this.speed_x;
                }
                break;
            case 'right':
                this.x += this.speed_x;
                break;
        }
    }
};

Cat.prototype.teaBagging = function(){
    if(this.teaBag && !this.up && !this.move){
        this.height = 25;
        this.y = 635;
    } else {
        this.height = 50;
        this.y = this.floor;
    }
};

Cat.prototype.goLeft = function(){
    this.direction = 'left';
};

Cat.prototype.goRight = function(){
    this.direction = 'right';
};

Cat.prototype.jump = function(){
    if (this.up && !this.teaBag) {
        this.t += 1;
        this.y += this.acceleration*this.t*this.t - this.gravity*this.t;
        // this.y += this.speed_y;
        // this.speed_y += this.gravity;
        if (this.y > this.floor){
            this.y = this.floor;
            this.t = 0;
            this.up = false;
        }
    }
};