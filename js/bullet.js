function Bullet(catx, caty){
    this.x = catx;
    this.y = caty;
    this.width = 5;
    this.height = 5;
    this.damage = 2;
    this.start();
}

Bullet.prototype.start = function(){
    if(!this.intervalId){
        this.intervalId = setInterval(this.move.bind(this), 20);
    }
};

Bullet.prototype.clearIntervalId = function(){
    if(this.intervalId){
        clearInterval(this.intervalId);
    }
};

Bullet.prototype.move = function(){
    this.x += 20;
};