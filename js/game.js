function Game(){
    this.cat = new Cat(),
    this.enemy = new Enemy()
};

Game.prototype.start = function(){};
Game.prototype._assignControlToKeys = function(){};
Game.prototype._update = function (){};
Game.prototype.stop = function(){};
Game.prototype.checkCollisions = function(){};