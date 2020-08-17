export function createClosure(repeaterPtr, callback, options) {
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
