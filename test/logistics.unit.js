if (typeof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("logistics.js", function() {

  describe("port()", function() {
    it("returns random value from dog array", function() {
      var port = faker.logistics.port();
      console.log(port)
      assert.ok(faker.definitions.logistics.port.indexOf(port) !== -1);
    });
  });
}); 