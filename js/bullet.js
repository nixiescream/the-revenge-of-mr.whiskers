function Bullet(catx, caty, catw, cath){
    this.x = catx;
    this.y = caty+cath/2;
    this.width = 20;
    this.height = 20;
    this.damage = 20;
    this.image = new Image();
    this.image.src = "images/sprites/hairball.png";
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
    this.x += 25;
};