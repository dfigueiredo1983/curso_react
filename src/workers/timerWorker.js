let isRunning = false;

self.onmessage = function (event) {
  if (isRunning) return;

  isRunning = true;

  // recebo o state por meio do worker.postMessage(state);
  // em TaskContextProvider.tsx
  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const now = new Date();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  // console.log(new Date(endDate));

  function tick() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};
