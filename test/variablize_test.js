'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.variablize = {
  setUp: function(done) {
    done();
  },
  minimal: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/minimal.js');
    var expected = grunt.file.read('test/expected/minimal.js');
    test.equal(actual, expected, 'should create js file from the whole json file.');

    test.done();
  },
  customProperty: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/property.js');
    var expected = grunt.file.read('test/expected/property.js');
    test.equal(actual, expected, "should create js based on one of properties");

    test.done();
  }

};
