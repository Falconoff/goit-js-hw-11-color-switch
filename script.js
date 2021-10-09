const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let bodyEl = document.querySelector('body').style;
let timerId = null;
let isActive = false;

startBtn.addEventListener('click', () => {
  // console.log('click Start');
  if (isActive) return;

  timerId = setInterval(() => {
    bodyEl.backgroundColor = `${
      colors[randomIntegerFromInterval(0, colors.length - 1)]
    }`;
    // console.log('timer');
  }, 1000);

  isActive = true;
});

stopBtn.addEventListener('click', () => {
  // console.log('click Stop');
  clearInterval(timerId);
  isActive = false;
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
