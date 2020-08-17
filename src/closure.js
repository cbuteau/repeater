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
        continueRun = false;
        if (options.continueRun) {
          continueRun = true;
        }
      }
    }
    if (continueRun) {
      repeaterPtr.start();
    } else {
      repeaterPtr.pause();
    }
  };
}
