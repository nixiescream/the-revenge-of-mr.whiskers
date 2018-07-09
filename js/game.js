function Game(ctx, width, height){
    this.ctx = ctx,
    this.width = width,
    this.height = height,
    this.cat = new Cat(this.width, this.height),
    this.enemy = new Enemy(),
    this.render = new Render(this.ctx, this.cat, this.enemy)
};

Game.prototype.start = function(){
    this.render.drawEnviroment(this.width, this.height);
    this.render.drawCat();
};
Game.prototype._assignControlToKeys = function(){
    document.onkeydown = function (e) {
        switch (e.keyCode) {
          case 38: //arrow up
            this.cat.jump();
            break;
          case 37: //arrow left
            this.cat.goLeft();
            break;
          case 39: //arrow right
            this.cat.goRight();
            break; 
        }
      }.bind(this);
};
Game.prototype._update = function (){};
// Game.prototype.stop = function(){};
Game.prototype.checkCollisions = function(){};