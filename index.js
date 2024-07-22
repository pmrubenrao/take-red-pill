const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log('widthL', canvas.width);

const texts = [
  '日',
  'ﾊ',
  'ﾐ',
  'ﾋ',
  'ｰ',
  'ｳ',
  'ｼ',
  'ﾅ',
  'ﾓ',
  'ﾆ',
  'ｻ',
  'ﾜ',
  'ﾂ',
  'ｵ',
  'ﾘ',
  'ｱ',
  'ﾎ',
  'ﾃ',
  'ﾏ',
  'ｹ',
  'ﾒ',
  'ｴ',
  'ｶ',
  'ｷ',
  'ﾑ',
  'ﾕ',
  'ﾗ',
  'ｾ',
  'ﾈ',
  'ｽ',
  'ﾀ',
  'ﾇ',
  'ﾍ',
  ':',
  '・',
  '.',
  '=',
  '*',
  '+',
  '-',
  '<',
  '>',
  '¦',
  '｜',
  'ﾘ',
];

const fontSize = 16;

const columns = 1500;

console.log('columns are', columns);

const f = [];
for (let x = 0; x < columns; x++) {
  f[x] = 0;
}

const draw = () => {
  context.fillStyle = 'rgba(0,0,0,0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#0f0';
  context.font = fontSize + 'px monospace';

  for (let x = 0; x < columns; x++) {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    context.fillText(randomText, x * fontSize, f[x] * fontSize);

    if (f[x] * fontSize > canvas.height && Math.random() > 0.975) {
      f[x] = 0;
    }
    f[x]++;
  }
};

setInterval(draw, 40);
