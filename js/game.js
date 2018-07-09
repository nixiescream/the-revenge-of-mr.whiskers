function Game(ctx, width, height, floor){
    this.ctx = ctx,
    this.width = width,
    this.height = height,
    this.floor = floor,
    this.cat = new Cat(this.width, this.floor),
    this.enemy = new Enemy(),
    this.render = new Render(this.ctx, this.cat, this.enemy)
};

Game.prototype.start = function(){
    this._assignControlToKeys();
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
};

Game.prototype._assignControlToKeys = function(){
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 38: //arrow up
                this.cat.up = true;
                this.cat.jump();
                break;
            case 37: //arrow left
                this.cat.goLeft();
                this.cat.run();
                break;
            case 39: //arrow right
                this.cat.goRight();
                this.cat.run();
                break; 
        }
    }.bind(this);
};

Game.prototype._update = function (){
    this.render.drawCat(this.width, this.height);
    this.render.drawEnviroment(this.width, this.height);
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
};
// Game.prototype.stop = function(){};
Game.prototype.checkCollisions = function(){};