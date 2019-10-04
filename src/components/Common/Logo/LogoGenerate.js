const QUARTER_PI = Math.PI * 0.25;
const HALF_PI = Math.PI * 0.5;
const PI = Math.PI;
const TWO_PI = Math.PI * 2;

const STROKE_WIDTH = 2;

let ctx;

const random = num => {
  return Math.random() * num;
}

const setDimensions = (canvas, ctx, width, height, pixelRatio) => {
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.scale(pixelRatio, pixelRatio);
}

const topPart = (x, y, width, height, strokeWidth) => {
  ctx.save();

  ctx.translate(x, y + (height / 2));
  // ctx.strokeRect(0, 0, width, height);

  let randX = random(20);
  let randY = random(5) + 3;

  let inc = Math.ceil(random(10));

  if (inc < 5) {
    inc = 1;
  }

  let choice = Math.ceil(random(3));

  let skew = random(4) + 4;

  if (choice === 3) {
    inc = width / 5;
  }

  for (let _x = 0; _x < width; _x += inc) {
    let _y = Math.sin(_x / (width/randX)) * (height/randY);

    ctx.beginPath();
    switch(choice) {
      case 3:
        ctx.save();
        ctx.translate(_x, -(skew));

        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(inc, skew);
        ctx.lineTo(inc, (height * 0.75) + skew);
        ctx.lineTo(0, (height * 0.75));
        ctx.closePath();

        ctx.restore();
        ctx.stroke();
        break;
      default:
        ctx.arc(_x, _y, strokeWidth / 2, 0, TWO_PI);
        ctx.fill();
        break;
    }
  }

  ctx.restore();
}

const middlePart = (x, y, width, height) => {
  ctx.save();

  ctx.translate(x, y);
  // ctx.strokeRect(0, 0, width, height);

  let mod = random(0.25);

  let h = num => height * num;
  let w = num => width * num * 2;

  // if (Math.random() > 0.5) {
  //   mod *= -1;
  // }

  ctx.beginPath()

  ctx.moveTo(w(mod), h(0.25) - h(mod));
  ctx.lineTo(width - w(mod), h(0.25) + h(mod));
  ctx.lineTo(width - w(mod), h(0.75) + h(mod));
  ctx.lineTo(w(mod), h(0.75) - h(mod));

  ctx.closePath();
  ctx.stroke();

  ctx.restore();
}

const bottomPart = (x, y, width, height) => {
  ctx.save();

  ctx.translate(x, y);
  // ctx.strokeRect(0, 0, width, height);

  let circles = 5;

  let total = random(circles) + 1;

  for (let i = circles - 1; i >= 0; i--) {
    if (i < total) {
      let start = PI + (PI * random(0.25));
      let end = start + random(QUARTER_PI) + (QUARTER_PI * 0.5);

      ctx.beginPath()
      ctx.arc(width, height, (width / circles) * i, start, end);
      ctx.stroke();
    }
  }

  ctx.restore();
}

export const generate = (canvas, _ctx, width, height, strokeWidth = STROKE_WIDTH) => {
  ctx = _ctx;

  setDimensions(canvas, ctx, width, height, window.devicePixelRatio);

  ctx.clearRect(0, 0, width, height);

  // A variable to increase/decrease padding with ease
  let mod = 1;

  // Create a clipped width and height to clear the surrounding box
  let _width = width - (strokeWidth * mod);
  let _height = height - (strokeWidth * mod);

  ctx.save();
  ctx.lineWidth = strokeWidth;

  // Move into the clipped zone
  ctx.translate(strokeWidth * (mod / 2), strokeWidth * (mod / 2));

  // Add the surrounding bounding box
  ctx.strokeRect(0, 0, _width, _height);

  topPart(0, 0, _width, _height * 0.25, strokeWidth);

  middlePart(_width * 0.35, 0, _width * 0.3, _height);

  bottomPart(0, _height * 0.5, _width * 0.5, _height * 0.5);

  ctx.restore();
};
