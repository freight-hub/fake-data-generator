if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("logistics.js", function() {

  describe("dog()", function() {
    it("returns random value from dog array", function() {
      var dog = faker.logistics.dog();
      console.log(dog)
      assert.ok(faker.definitions.animal.dog.indexOf(dog) !== -1);
    });
  });
}); 