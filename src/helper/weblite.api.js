// W && R
const { W } = window;

export default () =>
  W.setHooks({
    wappWillStart(start) {
      start();
    }
  });
