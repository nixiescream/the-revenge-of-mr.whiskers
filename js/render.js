function Render(ctx, cat, enemy){
    this.ctx = ctx,
    this.cat = cat,
    this.enemy = enemy
}

Render.prototype.drawEnviroment = function(width, height){
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, height-150, width, height);
};

Render.prototype.drawCat = function(width, height){
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.cat.x, this.cat.y, 50, 50);
};
Render.prototype.drawEnemy = function(width, height){
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(width-250, 0, 230, height);
};
Render.prototype.drawObjects = function(){};
Render.prototype.drawBullet = function(){};