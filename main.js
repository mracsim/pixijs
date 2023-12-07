import * as PIXI from 'pixi.js';
const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };
class Character extends PIXI.Sprite {
    constructor(imagePath, x, y) {
      super.from(imagePath);
      this.position.set(x, y);
      app.stage.addChild(this);
    }
  }
  class Player extends Character {
    constructor(x, y) {
        super('assets/wizardidle1.png', x, y);
    }
  }
  class Enemy extends Character {
    constructor(x, y) {
        super('assets/fire-skull.gif', x, y);
    }
    moveTowards(player) {
        const angle = Math.atan2(player.y - this.y, player.x - this.x);
        const speed = 5;
        this.x += Math.cos(angle) * speed;
        this.y += Math.sin(angle) * speed;
      }
    }




const app = new PIXI.Application({ background: '#c9f7b0', resizeTo: window });
document.body.appendChild(app.view);

const player = new Player(400, 300);
const enemies = [];

function createEnemy() {
    const enemy = new Enemy(Math.random() * 800, Math.random() * 600);
    enemies.push(enemy);
  }

  app.ticker.add(() => {
    enemies.forEach(enemy => {
      enemy.moveTowards(player);
    });
  });

setInterval(createEnemy, 1000);

globalThis.addEventListener("pointerdown", (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    if(PointerEvent.pressure != 0) {
        let velocityr = 10 * Math.sqrt(Math.pow(player.x - mousePos.x,2) + Math.pow(player.y - mousePos.y,2));
        player.x -= (player.x - mousePos.x)/velocityr;
        player.y -= (player.y - mousePos.y)/velocityr;
        }
    }
);
// globalThis.addEventListener('keydown', e => {
//     if (["KeyW", "ArrowUp"].includes(e.code)) {
//         velocityY = -3;
//     }
//     if (["KeyA", "ArrowLeft"].includes(e.code)) {
//         velocityX = -3;
//     }
//     if (["KeyS", "ArrowDown"].includes(e.code)) {
//         velocityY = 3;
//     }
//     if (["KeyD", "ArrowRight"].includes(e.code)) {
//         velocityX = 3;
//     }
// });

// globalThis.addEventListener('keyup', e => {
//     if (["KeyW", "ArrowUp"].includes(e.code)) {
//         velocityY = 0;
//     }
//     if (["KeyA", "ArrowLeft"].includes(e.code)) {
//         velocityX = 0;
//     }
//     if (["KeyS", "ArrowDown"].includes(e.code)) {
//         velocityY = 0;
//     }
//     if (["KeyD", "ArrowRight"].includes(e.code)) {
//         velocityX = 0;
//     }
// })