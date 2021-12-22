const colors = ['#FFFFFF','#2196F3','#4CAF50','#FF9800','#009688','#795548'];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};   

// const bodyRef = document.querySelector('body');
// const btnStartRef = document.querySelector('button[data-action="start"]');
// const btnStopRef = document.querySelector('button[data-action="stop"]');
// let timerId = null;
// let isActive = false;

// btnStartRef.addEventListener('click', handleBtnStart);
// btnStopRef.addEventListener('click', handleBtnStop);

// function handleBtnStart () {
//   if (isActive) {
//     return;
//   }
// isActive = true;
// timerId = setInterval(randomColor, 1000);
// }

// function randomColor () {
//   bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
// }

// function handleBtnStop () {
//   clearInterval(timerId);
// isActive = false;
// }


const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
}

const colorChoice = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.timerId = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      let randomColors = randomIntegerFromInterval(min, max);
      refs.body.style.backgroundColor = colors[randomColors];
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  },
};

refs.btnStart.addEventListener("click", colorChoice.start.bind(colorChoice));
refs.btnStop.addEventListener("click", colorChoice.stop.bind(colorChoice))