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
    this.intervalGame = window.requestAnimationFrame(this.doFrame.bind(this));
};

Game.prototype._assignControlToKeys = function(){
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 38: //arrow up
                this.cat.up = true;
                break;
            case 37: //arrow left
                this.cat.move = true;
                this.cat.goLeft();
                break;
            case 39: //arrow right
                this.cat.move = true;
                this.cat.goRight();
                break; 
        }
    }.bind(this);

    document.onkeyup = function (e) {
        switch (e.keyCode) {
            case 37: //arrow left
                this.cat.move = false;
                break;
            case 39: //arrow right
                this.cat.move = false;
                break; 
        }
    }.bind(this);
};

Game.prototype.doFrame = function (){
    this.render.drawCat(this.width, this.height);
    this.render.drawEnemy(this.width, this.height);
    this.render.drawEnviroment(this.width, this.height);
    this.cat.run();
    this.cat.jump();
    this.intervalGame = window.requestAnimationFrame(this.doFrame.bind(this));
};
// Game.prototype.stop = function(){};
Game.prototype.checkCollisions = function(){};