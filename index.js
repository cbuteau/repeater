
const DEFAULT_OPTIONS = {
  forgetTry: false,
  notContinue: false
};

function createClosure(repeaterPtr, callback, options) {
  return function() {
    var continueRun;
    if (options.forgetTry) {
      // Save complexity without a try catch when solidified.
      continueRun = callback(options);
    } else {
      try {
        continueRun = callback(options);
      } catch (e) {
        console.log(options.name);
        console.error(e);
        continueRun = true;
        if (options.notContinue) {
          continueRun = false;
        }
      }
    }
    if (continueRun) {
      repeaterPtr.start();
    } else {
      repeaterPtr._isRunning = false;
    }
  };
}

export class Repeater {
  constructor(callback, options) {
    var tempOpts = options ? options : {};
    this.options = Object.assign(tempOpts, DEFAULT_OPTIONS);
    this.callback = createClosure(this, callback, this.options);
    this.start();
  }

  start() {
    this.token = requestAnimationFrame(this.callback);
    this._isRunning = true;
  }

  pause() {
    cancelAnimationFrame(this.token);
    this._isRunning =false;
  }

  get isRunning() {
    return this._isRunning;
  }
}
