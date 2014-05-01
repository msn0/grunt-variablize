/*
 * grunt-variablize
 * https://github.com/msn0/grunt-variablize
 *
 * Copyright (c) 2014 Michał Jezierski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  grunt.registerMultiTask('variablize', 'Turn json file into js object.', function () {
    var input, output;

    input = grunt.file.readJSON(this.data.input);
    if (this.data.hasOwnProperty('property')) {
      input = input[this.data.property];
    }
    output = "var " + this.data.variable + " = " + JSON.stringify(input) + ";";
    grunt.file.write(this.data.output, output);
    grunt.log.writeln("File " + this.data.output + " created.");
  });

};
