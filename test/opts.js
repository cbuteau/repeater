import Repeater from "../src/repeater.js"

describe('Options', function() {
  xit ('forgetTry', function(done) {
    var count = 0;
    var test = new Repeater(expect(() => {
      count++;
      throw new Error('forgetTry may be more performant but less stable');
    }).toThrowError(), {
      name: 'forgetTrytester',
      forgetTry: true
    });

    setTimeout(() => {
      expect(count).toBe(1);
      done();
    }, 500);

  });

  it ('continueRun', function(done) {
    var count = 0;
    var test = new Repeater(() => {
      count++;
      throw new Error('continueRun means if an exception occurs we keep triggerings the RAF.');
    }, {
      name: 'continueRuntester',
      continueRun: true
    });

    setTimeout(() => {
      expect(count).toBeGreaterThan(1);
      done();
    }, 2000);

  });
})
