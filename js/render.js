function Render(ctx, cat, enemy){
    this.ctx = ctx;
    this.cat = cat;
    this.enemy = enemy;
}

Render.prototype.drawEnviroment = function(width, height){
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, height-150, width, height);
};

Render.prototype.drawCat = function(width, height){
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.cat.x, this.cat.y, this.cat.width, this.cat.height);
};
Render.prototype.drawEnemy = function(width, height){
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);
};
Render.prototype.drawObjects = function(){};
Render.prototype.drawBullet = function(){};