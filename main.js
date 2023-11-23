import * as PIXI from 'pixi.js';
const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };
let i = 15;

const app = new PIXI.Application({ background: '#c9f7b0', resizeTo: window });

document.body.appendChild(app.view);

const player = PIXI.Sprite.from('assets/wizardidle1.png');

player.x = app.screen.width / 2;
player.y = app.screen.height / 2;
player.anchor.set(0.5,0.5);


const bunny = PIXI.Sprite.from('assets/fire-skull.gif');

bunny.x = app.screen.width -Math.random() * 500;;
bunny.y = app.screen.height-Math.random() * 500;;
bunny.roundPixels;
bunny.height = 50;
bunny.width = 50;
bunny.anchor.set(0.5,0.5);

const earthElemental = PIXI.Sprite.from('assets/ghost-idle.gif');

earthElemental.anchor.set(0.5,0.63);
earthElemental.x = Math.random() * 500;
earthElemental.y = Math.random() * 500;
earthElemental.roundPixels;
// earthElemental.height = 50;
// earthElemental.width = 50;


app.stage.addChild(player,bunny,earthElemental);

app.ticker.add(delta =>
{
    let dy = bunny.y - player.y;
    let dx = bunny.x - player.x;
    let sy = earthElemental.y - player.y;
    let sx = earthElemental.x - player.x;
    let velocity = Math.sqrt(dy * dy + dx * dx);
    bunny.x -= dx * 2 / velocity;
    bunny.y -= dy * 2 / velocity;

    earthElemental.x -= sx / velocity;
    earthElemental.y -= sy / velocity;

    player.x += velocityX;
    player.y += velocityY;
    
    globalThis.addEventListener("pointerdown", (event) => {
        mousePos = { x: event.clientX, y: event.clientY };
        if(PointerEvent.pressure != 0) {
        let velocityr = 10 * Math.sqrt(Math.pow(player.x - mousePos.x,2) + Math.pow(player.y - mousePos.y,2));
        player.x -= (player.x - mousePos.x)/velocityr;
        player.y -= (player.y - mousePos.y)/velocityr;
    }});
});

let velocityX = 0;
let velocityY = 0;

globalThis.addEventListener('keydown', e => {
    if (["KeyW", "ArrowUp"].includes(e.code)) {
        velocityY = -3;
    }
    if (["KeyA", "ArrowLeft"].includes(e.code)) {
        velocityX = -3;
    }
    if (["KeyS", "ArrowDown"].includes(e.code)) {
        velocityY = 3;
    }
    if (["KeyD", "ArrowRight"].includes(e.code)) {
        velocityX = 3;
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