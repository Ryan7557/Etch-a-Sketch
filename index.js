const canvas = document.querySelector("#canvas-sketch");
const refresh = document.querySelector('.refresh');
const ctx = canvas.getContext('2d');

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 20;
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(400, 450);
ctx.stroke();

const width = canvas.width;
const height = canvas.height;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * 3);
ctx.moveTo(x, y);
ctx.lineTo(x, y);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

function draw(option) {
    hue += 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (option.key) {
        case 'ArrowUp':
            y -= 40;
            break;
        case 'ArrowDown':
            y += 40;
            break;
        case 'ArrowLeft':
            x -= 40;
            break;
        case 'ArrowRight':
            x += 40;
            break;
        
            default:
                break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

window.addEventListener('keydown', draw);

function refreshCanvas() {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}

refresh.addEventListener('click', refreshCanvas);