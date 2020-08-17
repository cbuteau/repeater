import {createClosure} from "./closure.js";
import {DEFAULT_OPTIONS} from "./opts.js";

export default class Repeater {
  constructor(callback, options) {
    var tempOpts = options ? options : {};
    this.options = Object.assign(DEFAULT_OPTIONS, tempOpts);
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
