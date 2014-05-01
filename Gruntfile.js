/*
 * grunt-variablize
 * https://github.com/msn0/grunt-variablize
 *
 * Copyright (c) 2014 Michał Jezierski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['tmp']
    },

    variablize: {
      minimal: {
        input: "test/fixtures/minimal.json",
        output: "tmp/minimal.js",
        variable: "Foo"
      },
      custom_property: {
        input: "test/fixtures/property.json",
        output: "tmp/property.js",
        variable: "Foo",
        property: "foo"
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'variablize', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
