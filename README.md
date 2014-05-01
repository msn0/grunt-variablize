# grunt-variablize

> Turn json file into js object.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-variablize --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-variablize');
```

## The "variablize" task

### Overview
In your project's Gruntfile, add a section named `variablize` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  variablize: {
    your_target: {
      // Target-specific options go here.
    },
  },
});
```

### Options

#### input
Type: `String`

Path to json file.

#### output
Type: `String`

Path to output js file.

#### variable
Type: `String`

Variable name to use.

#### property
Type: `String`

Json property name which should be variablized.

### Usage Examples

#### Basic Usage
In this example, the whole `resources/Config.json` file is used to create `dist/Config.js`.

```js
// resources/Config.json
{
  "foo": "bar"
}
```

```js
// dist/Config.js
var Config = {"foo":"bar"};
```

```js
grunt.initConfig({
  variablize: {
    basic: {
      input: "resources/Config.json",
      output: "dist/Config.js",
      variable: "Config"
    }
  },
});
```

#### Use Property Name
In this example, `property` is used to filter json file.

```js
// resources/Config.json
{
  "dev": {
    "foo": "foo-value"
  },
  "test": {
    "bar": "bar-value"
  },
  "prod": {
    "baz": "baz-value"
  }
}
```

```js
// dist/Config.js
var Config = {"baz":"baz-value"};
```

```js
grunt.initConfig({
  variablize: {
    prod: {
      input: "resources/Config.json",
      output: "dist/Config.js",
      variable: "Config",
      property: "prod"
    }
  },
});
```
