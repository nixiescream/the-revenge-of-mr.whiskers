# The revenge of Mr. Whiskers

## Descripción
El juego consistirá en un gato, llamado Mr. Whiskers, que cada dia cuando va a comer, un pepino lo asusta. El enemigo básicamente le lanzará cosas que odie y Mr. Whiskers tendrá que esquivarlas. En algun momento podrá vengarse y dispararle para derrotarlo y poder comer tranquilo.

## MVP - Tecnología (DOM - CANVAS)
El juego estará hecho en __canvas__.

-State transitions (Pantalla principal, juego, game over/win).

-Mover el gato izquierda-derecha y hacerlo saltar.

-Esquivar los objetos que te tira el enemigo.

-Si te toca uno de esos objetos, mueres.

## Backlog
-El gato puede disparar, y ganas el juego si matas al enemigo.

-Hay plataformas dónde subirte y poder esquivar/disparar mejor.

##  Estructuras de Datos

Clase __main.js__:
```javascript
var canvas;
var ctx;
var game = new Game([options]);
game.start();

function buildSplash(){};
function destroySplash(){};
function buildGame(){};
function destroyGame(){};
function buildGameOver(){};
function destroyGameOver(){};
```

Clase __game.js__:
```javascript
function Game([options]){
    this.cat = new Cat(),
    this.enemy = new Enemy(),
}

Game.prototype.start = function(){};
Game.prototype._assignControlToKeys = function(){};
Game.prototype._update = function (){};
Game.prototype.stop = function(){};
Game.prototype.checkCollisions = function(){};

```

Clase __render.js__:
```javascript
function Render(){

}

Render.prototype.drawEnviroment = function(){};
Render.prototype.drawCat = function(){};
Render.prototype.drawEnemy = function(){};
Render.prototype.drawObjects = function(){};
Render.prototype.drawBullet = function(){};
```

Clase __cat.js__:
```javascript
function Cat(){
    var x;
    var y;
    var direction;
    var life;
}

Cat.prototype.run = function(){};
Cat.prototype.goLeft = function(){};
Cat.prototype.goRight = function(){};
Cat.prototype.moveForward = function(){};
Cat.prototype.jump = function(){};
Cat.prototype.shot = function(){};
Cat.prototype.die = function(){};

```
Clase __enemy.js__
```javascript
function Enemy(){
    var x;
    var y;
    var life;
}

Enemy.prototype.throwObject = function(){};
Enemy.prototype.die = function(){};

```

Clase __bullet.js__:
```javascript
function Bullet(){
    var x;
    var y;
}
```

## Task

1. Crear el canvas.
2. Crear el personaje jugable "Mr. Whiskers".
3. Hacer que Mr. Whiskers se mueva a la izquierda y a la derecha.
4. Hacer que Mr. Whiskers salte.
5. Crear el enemigo.
6. Hacer que el enemigo tire objetos.
7. Hacer que los objetos del enemigo maten a Mr. Whiskers si lo tocan.


## Trello

[Link url](https://trello.com)

## Git

Especificar las url del proyecto y del deploy

[Link Repositorio](https://github.com/nixiescream/the-revenge-of-mr.whiskers)

[Link Deploy](http://github.com)

## Instrucciones del juego 

Al finalizar el juego generar las instrucciones
