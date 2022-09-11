let canvas, ctx, wave, theta;

const strokeColor = {
    h: 200,
    s: 50,
    l: 50,
};

window.onload = () => {
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext("2d");

    wave = {
        // y: canvas.height / 4000,
        length: 200000,
        // amplitude: 15000,
        speed: 0.015,
    };

    theta = 0;
    window.requestAnimationFrame(animation);
};

function animation(timestamp) {
    window.requestAnimationFrame(animation);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // NOTE+ Left down
    const rightBottomOption = {
        sx: window.innerWidth / 10000,
        sy: window.innerHeight - window.innerHeight / 2,
        width: window.innerWidth,
        getY(i) {
            return (
                this.sy +
                Math.sin(i * wave.length * 2 + theta) *
                4 *
                Math.sin(i * wave.length / 2 + theta) *
                40
            );
        },
    };
    plotSine(0, rightBottomOption);

    theta += wave.speed;
}

function plotSine(yOffset, opt) {
    ctx.beginPath();
    // ctx.moveTo(opt.sx + yOffset, opt.sy);
    // const alpha = map(yOffset, 0, 24, 1, 0);
    ctx.strokeStyle = '#e05a00';
    ctx.lineWidth = 1;

    // NOTE: Left waves
    for (let i = opt.sx; i < opt.width; i++) {
        ctx.lineTo(i + yOffset, opt.getY(i));
    }

    ctx.stroke();
}

function map(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}
