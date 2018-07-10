function Render(ctx, cat, enemy, obstacles){
    this.ctx = ctx;
    this.cat = cat;
    this.enemy = enemy;
    this.obstacles = obstacles;
}

Render.prototype.drawEnviroment = function(width, height){
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, height-150, width, height);
};

Render.prototype.drawCat = function(){
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.cat.x, this.cat.y, this.cat.width, this.cat.height);
};

Render.prototype.drawEnemy = function(){
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);
};

Render.prototype.drawObstacles = function(){
    this.obstacles.forEach(function(obstacle){
        this.ctx.fillStyle ='yellow';
        this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }.bind(this));
};

Render.prototype.drawBackground = function(width,height){
    this.ctx.clearRect(0, 0, width, height);
}

Render.prototype.drawLifes = function(catLife){
    this.ctx.font = '48px sans-serif';
    this.ctx.fillText('Life: ' + catLife, 10, 50);
}

Render.prototype.drawBullet = function(){};