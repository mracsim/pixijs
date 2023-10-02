import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ background: '#2099bb', resizeTo: window });

document.body.appendChild(app.view);

const player = PIXI.Sprite.from('assets/SkilledBattlemage.png');

player.x = app.screen.width / 2;
player.y = app.screen.height / 2;

const bunny = PIXI.Sprite.from('assets/FireElemental.png');

bunny.anchor.set(0.2);

bunny.x = app.screen.width;
bunny.y = app.screen.height;

app.stage.addChild(bunny);
app.stage.addChild(player);

app.ticker.add(delta =>
{
    let dy = bunny.y - player.y;
    let dx = bunny.x - player.x;
    let velocity = Math.sqrt(dy * dy + dx * dx);
    bunny.x -= dx * 2 / velocity;
    bunny.y -= dy * 2 / velocity;

    player.x += velocityX;
    player.y += velocityY;

});

let velocityX = 0;
let velocityY = 0;

globalThis.addEventListener('keydown', e => {
    if (["KeyW", "ArrowUp"].includes(e.code)) {
        velocityY = -2;
    }
    if (["KeyA", "ArrowLeft"].includes(e.code)) {
        velocityX = -2;
    }
    if (["KeyS", "ArrowDown"].includes(e.code)) {
        velocityY = 2;
    }
    if (["KeyD", "ArrowRight"].includes(e.code)) {
        velocityX = 2;
    }
});

globalThis.addEventListener('keyup', e => {
    if (["KeyW", "ArrowUp"].includes(e.code)) {
        velocityY = 0;
    }
    if (["KeyA", "ArrowLeft"].includes(e.code)) {
        velocityX = 0;
    }
    if (["KeyS", "ArrowDown"].includes(e.code)) {
        velocityY = 0;
    }
    if (["KeyD", "ArrowRight"].includes(e.code)) {
        velocityX = 0;
    }
})