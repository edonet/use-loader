# use-loader
use css module loader for webpack

## Installation
npm
``` shell
$ npm install @arted/use-loader
```

or yarn
``` shell
$ yarn add @arted/use-loader
```

## Usage
``` javascript
// webpack.config.js
module.exports = {
	...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "@arted/use-loader", // add use function which load css module
                "style-loader", // creates style nodes from JS strings
                "@arted/css-loader", // translates CSS into CommonJS
                "@arted/sass-loader" // compiles Sass to CSS
            ]
        }]
    }
};
```
