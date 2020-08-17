import Repeater from "../src/repeater.js"


  describe('Confirm contructor', function() {

    it ('param count', function() {
      expect(Repeater.length).toBe(2);
    });

    it ('quick run', function(done) {
      var count = 0;
      var max = 10;
      var test = new Repeater(function() {
        count++;
        if (count < max) {
          return true;
        } else {
          return false;
        }
      });
      setTimeout(function() {
        expect(count).toBe(10);
        done();
      }, 500);
    })

  });
