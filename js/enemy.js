function Enemy(width, height){
    this.x = width-250;
    this.y = 0;
    this.width = 230;
    this.height = height-150;
    this.life = 3000;
    this.collision = false;
    this.image = new Image();
    this.image.src = "./images/sprites/darth-cucumber1.png";
}
